// components/Layout.tsx
import React from 'react';
import Link from 'next/link';
import NavBar from './header';
import { Toaster } from 'react-hot-toast';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <Toaster />
      <main>{children}</main>

    </div>
  );
};

export default Layout;
