import React from 'react';

export type NavigationSection = 'home' | 'focus' | 'curriculum' | 'processes';

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface CurriculumData {
  name: string;
  value: number;
  color: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
}