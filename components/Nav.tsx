'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TiThMenuOutline } from 'react-icons/ti';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowLinks(false);
      }
    };

    if (showLinks) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLinks]);

  useEffect(() => {
    const sections = ['home', 'find-doctor', 'apps', 'testimonials', 'about'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId === 'home') {
            setActiveLink('/');
          } else {
            setActiveLink(`#${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateActiveLink = () => {
      const currentHash = window.location.hash;
      const currentPath = window.location.pathname;

      if (currentHash) {
        setActiveLink(currentHash);
      } else {
        setActiveLink(currentPath);
      }
    };

    // Set initial active link
    updateActiveLink();

    // Listen for hash changes
    const handleHashChange = () => {
      updateActiveLink();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setShowLinks(false); // Close mobile menu when nav link is clicked
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`flex flex-row justify-between items-center px-4 sm:px-6 md:px-10 lg:px-[6rem] xl:px-[10rem] 2xl:px-[15rem] pt-[2rem] fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-50/80 backdrop-blur-sm' : ''
        }`}
      >
        <div>
          <Link
            href='/'
            className='flex flex-row gap-4 items-center justify-center'
          >
            <div className='bg-[#458ff8] flex items-center justify-center w-[50px] h-[50px] rounded-full'>
              <p className='text-white font-mulish font-bold text-[26px]'>T</p>
            </div>
            <div className='font-bold text-lg text-[#233348]'>
              <p>Trafalga</p>
            </div>
          </Link>
        </div>

        <div className='flex lg:hidden'>
          <button onClick={handleLinks}>
            <TiThMenuOutline className='text-lg' />
          </button>
        </div>
        <div className='hidden lg:flex flex-row items-center justify-center gap-[40px]'>
          <Link
            href='#home'
            onClick={() => handleNavClick('/')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '/' || activeLink === '#home'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534] hover:opacity-75'
            }`}
          >
            Home
          </Link>

          <Link
            href='#find-doctor'
            onClick={() => handleNavClick('#find-doctor')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#find-doctor'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534] hover:opacity-75'
            }`}
          >
            Find a doctor
          </Link>

          <Link
            href='#apps'
            onClick={() => handleNavClick('#apps')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#apps'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534] hover:opacity-75'
            }`}
          >
            Apps
          </Link>

          <Link
            href='#testimonials'
            onClick={() => handleNavClick('#testimonials')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#testimonials'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534] hover:opacity-75'
            }`}
          >
            Testimonials
          </Link>
          <Link
            href='#about'
            onClick={() => handleNavClick('#about')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#about'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534] hover:opacity-75'
            }`}
          >
            About us
          </Link>
        </div>
      </nav>

      {showLinks && (
        <div className='flex lg:hidden flex-col gap-[40px] bg-gray-400 fixed top-[6rem] left-5 w-[300px] z-40 p-4'>
          <Link
            href='#home'
            onClick={() => handleNavClick('/')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '/' || activeLink === '#home'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534]'
            }`}
          >
            Home
          </Link>

          <Link
            href='#find-doctor'
            onClick={() => handleNavClick('#find-doctor')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#find-doctor'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534]'
            }`}
          >
            Find a doctor
          </Link>

          <Link
            href='#apps'
            onClick={() => handleNavClick('#apps')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#apps'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534]'
            }`}
          >
            Apps
          </Link>

          <Link
            href='#testimonials'
            onClick={() => handleNavClick('#testimonials')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#testimonials'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534]'
            }`}
          >
            Testimonials
          </Link>
          <Link
            href='#about'
            onClick={() => handleNavClick('#about')}
            className={`text-lg font-mulish transition-all ${
              activeLink === '#about'
                ? 'text-[#1F1534] font-bold opacity-100'
                : 'font-normal opacity-50 text-[#1f1534]'
            }`}
          >
            About us
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
