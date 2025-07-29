import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CosmicPay - The Future of Digital Wallets',
  description: 'Experience seamless USDT-backed transactions with 1:1 stability. CosmicPay brings the power of digital finance to your fingertips with UPI integration, liquidity rewards, and global accessibility.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}