import React, { ReactNode } from 'react';
import Navbar from 'components/layout/navbar';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== '/' && <Navbar />}
      <main>{children}</main>
    </>
  );
}
