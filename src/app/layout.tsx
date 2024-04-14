import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Overpass } from 'next/font/google';

import './globals.css';

const overpass = Overpass({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BeamNG.wheels',
  description: 'A preview of all available wheels in BeamNG.drive.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
