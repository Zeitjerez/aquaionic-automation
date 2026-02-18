import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware navigation utilities
// Use these instead of next/link and next/navigation when you need locale support
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
