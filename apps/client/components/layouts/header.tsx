import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <section className="overflow-hidden flex-1 h-full flex flex-col">
      <nav className="shrink bg-[#101828] lg:bg-[#F6F5F2] lg:py-3 lg:border lg:border-b-1 z-10 flex justify-between px-4 lg:px-8 py-3 lg:py-6">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px' }}>
          <Link href="/">TOCCO</Link>
         
        </div>
        <div>
        <Link className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 href="/product-form">
            create produt
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
