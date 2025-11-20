// src/components/ui/toaster.tsx
"use client";

import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";
import type { ToasterProps as SonnerToasterProps } from "sonner";


/**
 * Small compatibility layer so imports of "@/components/ui/toaster"
 * resolve to a sonner-based Toaster and also provide minimal types.
 *
 * Adjust visuals/props as needed.
 */

/* ----- Types ----- */

export type ToastActionElement = React.ReactNode;

export type ToastProps = {
  id?: string;
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  // allow extra fields for compatibility with custom managers
  [k: string]: any;
};

/* Re-export sonner's Toaster props if you want to forward them */
export type ToasterProps = SonnerToasterProps;

/* ----- Component ----- */

export default function Toaster(props: ToasterProps) {
  // If you use next-themes or need different styling per theme,
  // you can add logic here. For now, just render sonner's Toaster.
  return <SonnerToaster {...props} />;
}
