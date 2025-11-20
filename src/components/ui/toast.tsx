// src/components/ui/toast.ts
import * as React from "react";

/**
 * Minimal types to satisfy imports from "@/components/ui/toast".
 * Adjust fields if your project expects more.
 */

export type ToastActionElement = React.ReactNode;

export type ToastProps = {
  id?: string;
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  // allow any extras so your existing code doesn't break
  [key: string]: any;
};
