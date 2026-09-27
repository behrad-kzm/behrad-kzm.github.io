import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const MENU_STEP = {
  id: 'menu-button',
  title: 'Sidebar menu',
  description:
    'Tap this button to open the sidebar. From there you can browse folders, experiences, and Q&A.',
} as const;

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

type Step = typeof MENU_STEP | (typeof STEPS)[number];
type StepId = Step['id'];

const isMenuStep = (id: StepId) => id === 'menu-button';

function getSteps(isMobile: boolean): Step[] {
  return isMobile ? [MENU_STEP, ...STEPS] : [...STEPS];
}

interface IntroTourProps {
  onSidebarNeeded?: (open: boolean) => void;
}

const PAD = 6;
const CARD_WIDTH = 320;
const CARD_GAP = 16;
const FINGER_ROOM = 56;

const needsSidebar = (id: StepId) => id === 'activity-bar' || id === 'sidebar';

const IntroTour = ({ onSidebarNeeded }: IntroTourProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [fingerRect, setFingerRect] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  const steps = getSteps(isMobile);
  const step = steps[Math.min(stepIndex, steps.length - 1)];

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsMobile(mq.matches);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
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
        const anchor = document.querySelector(`[data-tour-finger="${step.id}"]`);
        setFingerRect(anchor ? anchor.getBoundingClientRect() : null);
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
    setVisible(false);
    setRect(null);
    setFingerRect(null);
    onSidebarNeeded?.(false);
  };

  const handleNext = () => {
    if (stepIndex >= steps.length - 1) {
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

  const isDesktopMain = !isMobile && step.id === 'main-window';
  const fingerAlign: 'top' | 'center' | 'below' | 'left' = isDesktopMain
    ? 'left'
    : step.id === 'activity-bar'
      ? 'top'
      : step.id === 'tabbar' || isMenuStep(step.id)
        ? 'below'
        : 'center';
  const finger = highlight ? fingerStyle(highlight, fingerAlign, fingerRect) : null;
  const card = highlight ? keepCardOffFinger(placeCard(highlight, step.id, isMobile), finger) : null;

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
          className={`pointer-events-none absolute z-[72] text-4xl leading-none drop-shadow-md ${
            isDesktopMain
              ? 'tour-finger-right'
              : step.id === 'tabbar' || isMenuStep(step.id)
                ? 'tour-finger-up'
                : 'tour-finger'
          }`}
          style={finger ?? undefined}
          aria-hidden
        >
          {isDesktopMain ? '👉🏻' : step.id === 'tabbar' || isMenuStep(step.id) ? '👆🏻' : '👈🏻'}
        </div>
      )}

      {card && (
        <div
          className="absolute z-[71] rounded-lg border border-border bg-card p-4 shadow-xl"
          style={{ top: card.top, left: card.left, width: card.width }}
        >
          <p className="mb-1 text-xs text-muted-foreground">
            {stepIndex + 1} / {steps.length}
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

function placeCard(
  highlight: { top: number; left: number; width: number; height: number },
  stepId: StepId,
  isMobile: boolean
) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const estimatedHeight = 240;
  const belowIcons = highlight.top + 128;

  if (!isMobile && stepId === 'main-window') {
    const width = Math.min(CARD_WIDTH, Math.max(200, highlight.left - 32));
    return {
      top: clamp(highlight.top + 16, 16, vh - estimatedHeight - 16),
      left: 16,
      width,
    };
  }

  if (stepId === 'activity-bar') {
    const left = highlight.left + highlight.width + 12;
    const width = Math.min(CARD_WIDTH, Math.max(220, vw - left - 16));
    return {
      top: clamp(belowIcons, 16, vh - estimatedHeight - 16),
      left: clamp(left, 16, vw - width - 16),
      width,
    };
  }

  if (stepId === 'sidebar' && isMobile) {
    const width = Math.min(CARD_WIDTH, vw - 32);
    return {
      top: vh - estimatedHeight - 24,
      left: 16,
      width,
    };
  }

  const width = Math.min(CARD_WIDTH, vw - 32);
  const rightSpace = vw - (highlight.left + highlight.width);
  const leftSpace = highlight.left;
  const tallTarget = highlight.height > vh * 0.5;
  const alignedTop = tallTarget
    ? clamp(belowIcons, 16, vh - estimatedHeight - 16)
    : clamp(highlight.top, 16, vh - estimatedHeight - 16);

  let left: number;
  let top: number;

  if (rightSpace >= width + FINGER_ROOM + 16) {
    left = highlight.left + highlight.width + FINGER_ROOM;
    top = alignedTop;
  } else if (leftSpace >= width + CARD_GAP + 16) {
    left = highlight.left - CARD_GAP - width;
    top = alignedTop;
  } else if (highlight.top + highlight.height + FINGER_ROOM + estimatedHeight < vh) {
    left = clamp(highlight.left, 16, vw - width - 16);
    top = highlight.top + highlight.height + FINGER_ROOM;
  } else if (highlight.top > estimatedHeight + CARD_GAP) {
    left = clamp(highlight.left, 16, vw - width - 16);
    top = highlight.top - estimatedHeight - CARD_GAP;
  } else {
    left = clamp(highlight.left + 16, 16, vw - width - 16);
    top = clamp(belowIcons, 16, vh - estimatedHeight - 16);
  }

  return { top, left, width };
}

function fingerStyle(
  highlight: { top: number; left: number; width: number; height: number },
  align: 'top' | 'center' | 'below' | 'left',
  anchor: DOMRect | null
) {
  const size = 36;
  const target = anchor
    ? { top: anchor.top, left: anchor.left, width: anchor.width, height: anchor.height }
    : highlight;
  const vw = window.innerWidth;

  if (align === 'left') {
    return {
      top: clamp(target.top + 72, highlight.top, highlight.top + highlight.height - size),
      left: target.left + 8,
    };
  }

  if (align === 'below') {
    return {
      top: target.top + target.height + 4,
      left: clamp(target.left + target.width / 2 - size / 2, 8, vw - size - 8),
    };
  }

  const fingerY =
    align === 'top'
      ? target.top + 44
      : target.top + target.height / 2 - size / 2;
  const rightOfTarget = target.left + target.width + 8;

  return {
    top: clamp(fingerY, highlight.top, highlight.top + highlight.height - size),
    left: clamp(rightOfTarget, highlight.left, vw - size - 8),
  };
}

function keepCardOffFinger(
  card: { top: number; left: number; width: number },
  finger: { top: number; left: number } | null
) {
  if (!finger) return card;
  const size = 40;
  const gap = 20;
  const estimatedHeight = 240;
  const overlapsX =
    card.left < finger.left + size + gap && card.left + card.width > finger.left - gap;
  const overlapsY =
    card.top < finger.top + size + gap && card.top + estimatedHeight > finger.top - gap;
  if (!overlapsX || !overlapsY) return card;

  const vh = window.innerHeight;
  const below = finger.top + size + gap;
  if (below + estimatedHeight <= vh - 16) {
    return { ...card, top: below };
  }
  const above = finger.top - estimatedHeight - gap;
  if (above >= 16) {
    return { ...card, top: above };
  }
  return card;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default IntroTour;
