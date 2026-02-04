'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: '메인', href: '/' },
  { name: '회사소개', href: '/about' },
  { name: '제품소개', href: '/products' },
  { name: '문의하기', href: '/contact' },
  { name: '스토어', href: 'https://smartstore.naver.com', external: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-xl shadow-lg transition-transform group-hover:scale-105 group-hover:rotate-3">
              <span className="text-white font-bold text-lg">EP</span>
            </div>
            <span className={cn(
              "text-2xl font-bold transition-colors",
              scrolled ? "text-primary" : "text-white"
            )}>
              에버파인
            </span>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-all hover:-translate-y-0.5",
                    scrolled ? "text-gray-700 hover:text-primary" : "text-gray-200 hover:text-white"
                  )}
                >
                  {item.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all hover:-translate-y-0.5",
                    scrolled ? "text-gray-700 hover:text-primary" : "text-gray-200 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">메뉴 열기</span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
