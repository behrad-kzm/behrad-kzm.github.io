import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'portfolio-intro-complete';

const STEPS = [
  {
    id: 'activity-bar',
    title: 'Explorer & Q&A',
    description:
      'This slim bar on the far left switches between the file explorer and Q&A.',
  },
  {
    id: 'sidebar',
    title: 'Sidebar',
    description:
      'Browse directories and files here. Each experience is a file — click one to open a tab and show its content in the main window.',
  },
  {
    id: 'tabbar',
    title: 'Tabs',
    description:
      'Files you open appear as tabs. Click a tab to bring that file back into view.',
  },
  {
    id: 'main-window',
    title: 'Main window',
    description: 'When you open a file, its content is shown here.',
  },
] as const;

type StepId = (typeof STEPS)[number]['id'];

interface IntroTourProps {
  onSidebarNeeded?: (open: boolean) => void;
}

const PAD = 6;
const CARD_WIDTH = 320;
const CARD_GAP = 16;

const needsSidebar = (id: StepId) => id === 'activity-bar' || id === 'sidebar';

const IntroTour = ({ onSidebarNeeded }: IntroTourProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const step = STEPS[stepIndex];

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = window.setTimeout(() => setVisible(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    onSidebarNeeded?.(needsSidebar(step.id));
  }, [visible, step.id, onSidebarNeeded]);

  useEffect(() => {
    if (!visible) return;

    let cancelled = false;
    let frame = 0;

    const measure = () => {
      const el = document.querySelector(`[data-tour="${step.id}"]`);
      if (el && !cancelled) {
        setRect(el.getBoundingClientRect());
        return true;
      }
      return false;
    };

    const wait = needsSidebar(step.id) ? 340 : 50;

    const start = window.setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        if (!measure()) {
          frame = requestAnimationFrame(tick);
        }
      };
      tick();
    }, wait);

    const onResize = () => measure();
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      window.clearTimeout(start);
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [visible, step.id]);

  const finish = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
    setRect(null);
    onSidebarNeeded?.(false);
  };

  const handleNext = () => {
    if (stepIndex >= STEPS.length - 1) {
      finish();
      return;
    }
    setRect(null);
    setStepIndex((i) => i + 1);
  };

  if (!visible) return null;

  const highlight = rect
    ? {
        top: Math.max(0, rect.top - PAD),
        left: Math.max(0, rect.left - PAD),
        width: rect.width + PAD * 2,
        height: rect.height + PAD * 2,
      }
    : null;

  const card = highlight ? placeCard(highlight) : null;

  return (
    <div
      className="fixed inset-0 z-[70] overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-tour-title"
      aria-describedby="intro-tour-description"
    >
      <div className="absolute inset-0" aria-hidden />
      {!highlight && <div className="absolute inset-0 bg-black/70" />}
      {highlight && (
        <div
          className="absolute rounded-md ring-2 ring-primary/70 transition-[top,left,width,height] duration-300"
          style={{
            ...highlight,
            boxShadow: '0 0 0 9999px hsl(220 13% 4% / 0.78)',
          }}
        />
      )}

      {highlight && (
        <div
          className="tour-finger pointer-events-none absolute text-4xl leading-none drop-shadow-md"
          style={fingerStyle(highlight, card)}
          aria-hidden
        >
          👈🏻
        </div>
      )}

      {card && (
        <div
          className="absolute z-[71] rounded-lg border border-border bg-card p-4 shadow-xl"
          style={{ top: card.top, left: card.left, width: card.width }}
        >
          <p className="mb-1 text-xs text-muted-foreground">
            {stepIndex + 1} / {STEPS.length}
          </p>
          <h2 id="intro-tour-title" className="mb-2 text-base font-semibold text-foreground">
            {step.title}
          </h2>
          <p id="intro-tour-description" className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={finish}>
              Skip
            </Button>
            <Button size="sm" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

function placeCard(highlight: { top: number; left: number; width: number; height: number }) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const width = Math.min(CARD_WIDTH, vw - 32);
  const estimatedHeight = 200;
  const rightSpace = vw - (highlight.left + highlight.width);
  const leftSpace = highlight.left;

  let left: number;
  let top: number;

  if (rightSpace >= width + CARD_GAP + 16) {
    left = highlight.left + highlight.width + CARD_GAP;
    top = clamp(highlight.top, 16, vh - estimatedHeight - 16);
  } else if (leftSpace >= width + CARD_GAP + 16) {
    left = highlight.left - CARD_GAP - width;
    top = clamp(highlight.top, 16, vh - estimatedHeight - 16);
  } else if (highlight.top + highlight.height + CARD_GAP + estimatedHeight < vh) {
    left = clamp(highlight.left, 16, vw - width - 16);
    top = highlight.top + highlight.height + CARD_GAP;
  } else if (highlight.top > estimatedHeight + CARD_GAP) {
    left = clamp(highlight.left, 16, vw - width - 16);
    top = highlight.top - estimatedHeight - CARD_GAP;
  } else {
    left = Math.max(16, (vw - width) / 2);
    top = Math.max(16, vh - estimatedHeight - 16);
  }

  return { top, left, width };
}

function fingerStyle(
  highlight: { top: number; left: number; width: number; height: number },
  card: { top: number; left: number; width: number } | null
) {
  const size = 36;
  const midY = highlight.top + highlight.height / 2 - size / 2;
  const rightOfTarget = highlight.left + highlight.width + 8;
  const vw = window.innerWidth;

  if (card && card.left >= highlight.left + highlight.width && rightOfTarget + size < vw) {
    return { top: clamp(midY, highlight.top, highlight.top + highlight.height - size), left: rightOfTarget };
  }

  return {
    top: highlight.top + 12,
    left: clamp(highlight.left + highlight.width - size - 8, 8, vw - size - 8),
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default IntroTour;
