import { ReactNode } from "react";

export interface QuickStatusProps {
  title?: string;
  total: number;
  read: number;
  pending: number;
  children?: ReactNode;
}
