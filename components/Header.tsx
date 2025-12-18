
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X as CloseIcon, ChevronDown, Leaf, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const VeganLogo = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center px-3 py-1.5 md:px-4 ${className}`}>
    <div className="absolute inset-0 border-[2px] md:border-[3px] border-[#A5D8F3] rounded-[1rem] md:rounded-[1.2rem] opacity-90"></div>
    <div className="relative flex items-center">
      <span className="text-2xl md:text-3xl font-serif font-black text-white italic tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>vegan</span>
      <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white fill-white absolute -top-3 -right-1 -rotate-12" />
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const location = useLocation();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 상태 제어 (바디 스크롤 차단)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen]);

  // 경로 변경 시 초기화
  useEffect(() => {
    setIsOpen(false);
    setActiveSubMenu(null);
  }, [location.pathname]);

  const toggleSubMenu = (path: string) => {
    setActiveSubMenu(prev => prev === path ? null : path);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled ? 'bg-[#1A5319] shadow-2xl py-2' : 'bg-[#1A5319]/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-4 group shrink-0 relative z-[1002]">
            <VeganLogo className="scale-90 md:scale-100" />
            <div className="flex flex-col border-l border-white/20 pl-2 md:pl-4 py-0.5">
              <span className="text-[14px] md:text-xl font-bold text-white tracking-tight leading-none group-hover:text-green-200 transition-colors">한국비건평가인증원</span>
              <span className="text-[7px] md:text-[10px] text-white/60 font-medium uppercase tracking-[0.1em] mt-1 hidden sm:block">Korea Vegan Certification Authority</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className="text-white hover:text-green-200 font-bold py-2 flex items-center transition-all text-sm xl:text-base"
                >
                  {item.title}
                  <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-gray-100">
                  <div className="py-2">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-6 py-3 text-sm font-bold text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link to="/support/contact" className="bg-white text-[#1A5319] px-6 py-2.5 rounded-full text-sm font-black hover:bg-green-50 transition-all shadow-lg active:scale-95">
              인증 신청문의
            </Link>
          </nav>

          {/* Mobile Toggle Button - 최상위 z-index 부여 */}
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-[1100] p-3 rounded-2xl transition-all duration-300 flex items-center justify-center outline-none touch-manipulation ${
              isOpen 
                ? 'bg-white text-[#1A5319] shadow-xl' 
                : 'bg-[#153415] text-white shadow-inner border border-white/10'
            }`}
          >
            {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - 헤더와 형제 노드로 배치하여 간섭 최소화 */}
      <div 
        className={`fixed inset-0 bg-[#1A5319] z-[1050] lg:hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-12 overflow-y-auto no-scrollbar">
          <div className="flex-grow space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="border-b border-white/5 last:border-0">
                <button 
                  type="button"
                  onClick={() => toggleSubMenu(item.path)}
                  className="w-full flex justify-between items-center py-5 text-left focus:outline-none group active:opacity-70 transition-opacity"
                >
                  <span className={`text-xl font-black transition-colors ${activeSubMenu === item.path ? 'text-green-300' : 'text-white'}`}>
                    {item.title}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${activeSubMenu === item.path ? 'rotate-180 text-green-300' : ''}`} />
                </button>
                
                {/* CSS Grid를 이용한 부드러운 아코디언 애니메이션 */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    activeSubMenu === item.path ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 bg-black/10 rounded-[1.5rem] p-1.5 space-y-0.5">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="flex items-center px-4 py-4 text-base font-bold text-white/80 hover:bg-white/10 active:bg-white/5 rounded-xl transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 mr-4"></div>
                        {sub.title}
                        <ArrowRight className="ml-auto w-4 h-4 opacity-20" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA Area */}
          <div className="mt-8 space-y-4">
            <Link 
              to="/support/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-white text-[#1A5319] py-5 rounded-2xl font-black text-lg shadow-xl active:scale-[0.97] transition-all"
            >
              인증 신청 상담 문의
            </Link>
            <div className="text-center opacity-20 text-[10px] font-medium tracking-[0.3em] uppercase pb-6">
              Korea Vegan Certification Authority
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
