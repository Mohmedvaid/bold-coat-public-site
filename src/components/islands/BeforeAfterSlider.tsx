'use client';

import { useId, useState, type KeyboardEvent, type PointerEvent } from 'react';

type Props = {
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfterSlider({
  beforeLabel = 'Before: weathered North Shore exterior, photo coming soon',
  afterLabel = 'After: freshly painted suburban home exterior, photo coming soon',
}: Props) {
  const [position, setPosition] = useState(50);
  const labelId = useId();

  const clamp = (value: number) => Math.min(100, Math.max(0, value));

  const updateFromClientX = (clientX: number, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(next));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX, event.currentTarget);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    updateFromClientX(event.clientX, event.currentTarget);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Home') {
      event.preventDefault();
      setPosition(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div className="reveal">
      <div
        className="relative aspect-[16/9] w-full cursor-ew-resize overflow-hidden bg-cream select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
      >
        <div
          className="absolute inset-0 bg-cream"
          role="img"
          aria-label={beforeLabel}
        />
        <div
          className="absolute inset-0 bg-[#e6dfd0]"
          role="img"
          aria-label={afterLabel}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-navy"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy shadow-md">
            <span className="size-2.5 rounded-full bg-red" />
          </div>
        </div>
      </div>
      <label htmlFor={labelId} className="sr-only">
        Compare before and after
      </label>
      <input
        id={labelId}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        onKeyDown={onKeyDown}
        className="mt-3 w-full accent-navy"
      />
    </div>
  );
}
