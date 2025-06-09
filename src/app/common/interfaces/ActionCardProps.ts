import { ReactNode } from 'react';

export interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  titleColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  children?: ReactNode;
};