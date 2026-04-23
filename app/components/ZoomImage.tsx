"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type ZoomState = {
  from: ImageRect;
  to: ImageRect;
  expanded: boolean;
};

function getTargetRect(width: number, height: number): ImageRect {
  const maxWidth = window.innerWidth * 0.92;
  const maxHeight = window.innerHeight * 0.9;
  const scale = Math.min(maxWidth / width, maxHeight / height, 1);
  const targetWidth = width * scale;
  const targetHeight = height * scale;

  return {
    top: (window.innerHeight - targetHeight) / 2,
    left: (window.innerWidth - targetWidth) / 2,
    width: targetWidth,
    height: targetHeight,
  };
}

export default function ZoomImage({
  src,
  alt,
  width,
  height,
  sizes,
  frameClassName,
  imageClassName,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  frameClassName?: string;
  imageClassName?: string;
}) {
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<ZoomState | null>(null);

  useEffect(() => {
    if (!zoom) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoom]);

  function openZoom() {
    const frame = imageFrameRef.current;

    if (!frame) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const from = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };

    setZoom({
      from,
      to: getTargetRect(width, height),
      expanded: false,
    });

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setZoom((current) =>
          current
            ? {
                ...current,
                expanded: true,
              }
            : current,
        );
      });
    });
  }

  function closeZoom() {
    setZoom((current) =>
      current
        ? {
            ...current,
            expanded: false,
          }
        : current,
    );

    window.setTimeout(() => setZoom(null), 260);
  }

  const activeRect = zoom?.expanded ? zoom.to : zoom?.from;

  return (
    <>
      <button
        type="button"
        className={frameClassName}
        aria-label={`${alt} 확대 보기`}
        onClick={openZoom}
      >
        <div ref={imageFrameRef}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            quality={100}
            unoptimized
            className={imageClassName}
          />
        </div>
      </button>

      {zoom && activeRect ? (
        <div
          className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm"
          onClick={closeZoom}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={100}
            unoptimized
            className="object-contain"
            style={{
              position: "fixed",
              top: activeRect.top,
              left: activeRect.left,
              width: activeRect.width,
              height: activeRect.height,
              transition:
                "top 260ms cubic-bezier(0.16, 1, 0.3, 1), left 260ms cubic-bezier(0.16, 1, 0.3, 1), width 260ms cubic-bezier(0.16, 1, 0.3, 1), height 260ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <button
            type="button"
            className="type-body fixed right-[var(--space-page)] top-[var(--space-page)]"
            onClick={closeZoom}
          >
            Close
          </button>
        </div>
      ) : null}
    </>
  );
}
