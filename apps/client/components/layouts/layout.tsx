// components/Layout.tsx
import React from 'react';
import Link from 'next/link';
import NavBar from './header';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <main className="container mx-auto py-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto">
          <p>© 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
