"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import { useInView } from "framer-motion";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#f59e0b",
  strokeWidth = 1.5,
  animationDuration = 800,
  iterations = 1,
  padding = 2,
  multiline = true,
  isView = true,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [resolvedColor, setResolvedColor] = useState(color);

  // Trigger when element scrolls into view
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  const shouldShow = !isView || isInView;

  // Resolve CSS variable to actual computed color string if needed
  useEffect(() => {
    if (elementRef.current && color.startsWith("var(")) {
      const varName = color.slice(4, -1).trim();
      const computed = getComputedStyle(elementRef.current).getPropertyValue(varName).trim();
      if (computed) {
        setResolvedColor(computed);
      } else {
        setResolvedColor("#f59e0b");
      }
    } else {
      setResolvedColor(color);
    }
  }, [color]);

  useEffect(() => {
    const element = elementRef.current;
    let annotation: RoughAnnotation | null = null;
    let resizeObserver: ResizeObserver | null = null;

    if (shouldShow && element) {
      const annotationConfig = {
        type: action,
        color: resolvedColor,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      };

      const currentAnnotation = annotate(element, annotationConfig);
      annotation = currentAnnotation;
      currentAnnotation.show();

      // Recalculate annotation size when window or element resizes
      resizeObserver = new ResizeObserver(() => {
        currentAnnotation.hide();
        currentAnnotation.show();
      });

      resizeObserver.observe(element);
      resizeObserver.observe(document.body);
    }

    return () => {
      annotation?.remove();
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [
    shouldShow,
    action,
    resolvedColor,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
