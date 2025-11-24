
'use client';

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type Phase = "idle" | "enter" | "exit";

interface Options {
  enterDuration?: number; // ms until we run the callback
  exitDuration?: number;  // ms to animate out
}

export function usePageWaveTransition(options: Options = {}) {
  const { enterDuration = 250, exitDuration = 350 } = options;

  const [phase, setPhase] = useState<Phase>("idle");
  const timeoutsRef = useRef<number[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  const trigger = (onCovered?: () => void) => {
    clearAllTimeouts();
    setPhase("enter");

    // When overlay is fully covering, run the callback (change language/theme)
    const mid = window.setTimeout(() => {
      onCovered?.();
      setPhase("exit");
    }, enterDuration);

    // When exit animation is done, remove overlay
    const end = window.setTimeout(() => {
      setPhase("idle");
    }, enterDuration + exitDuration);

    timeoutsRef.current.push(mid, end);
  };

  const Overlay =
    phase === "idle"
      ? null
      : createPortal(
          <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            <div
              className={
                "absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-background " +
                (phase === "enter" ? "wave-page-enter" : "wave-page-exit")
              }
            />
          </div>,
          document.body
        );

  return { trigger, Overlay };
}
