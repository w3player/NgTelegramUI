import { type ClassValue, clsx } from 'clsx';

export function classnames(...classes: ClassValue[]): string {
  return clsx(...classes);
}
