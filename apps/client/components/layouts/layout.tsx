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
      <footer className="bg-gray-100 text-grey py-4 mt-auto mb-0">
        <div className="container mx-auto">
          <p>© 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
