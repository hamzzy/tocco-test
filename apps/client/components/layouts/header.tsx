import React from 'react';

const NavBar: React.FC = () => {
  return (
    <section className="overflow-hidden flex-1 h-full flex flex-col">
      <nav className="shrink bg-[#101828] lg:bg-[#F6F5F2] lg:py-3 lg:border lg:border-b-1 z-10 flex justify-between px-4 lg:px-8 py-3 lg:py-6">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px' }}>
          <a className="gap-2" href="#">
            TOCCO 
          </a>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
