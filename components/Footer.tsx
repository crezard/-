
import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const VeganLogo = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center px-3 py-1.5 ${className}`}>
    <div className="absolute inset-0 border-[1.5px] border-[#A5D8F3] rounded-lg opacity-60"></div>
    <div className="relative flex items-center">
      <span className="text-xl font-serif font-black text-white italic tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>vegan</span>
      <Leaf className="w-4 h-4 text-green-400 fill-green-400 absolute -top-2 -right-1.5 -rotate-12" />
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3">
              <VeganLogo />
              <span className="text-xl font-bold text-white tracking-tight">한국비건평가인증원</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              엄격한 기준과 투명한 심사를 통해 생명 존중의 가치를 실천하고, 지속 가능한 비건 라이프스타일을 선도하는 공신력 있는 인증 기관입니다.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all group">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
              고객 지원
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 rounded-lg bg-white/5 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">Representative</p>
                  <p className="text-sm font-bold text-gray-300">02-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 rounded-lg bg-white/5 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">Official Email</p>
                  <p className="text-sm font-bold text-gray-300">contact@vegan-cert.kr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Address */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
              오시는 길
            </h4>
            <div className="flex items-start space-x-3 text-sm leading-relaxed">
              <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p>서울특별시 강남구 테헤란로 123,<br />비건빌딩 5층 한국비건평가인증원</p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-[11px] text-gray-600 leading-relaxed">
                사업자번호: 123-45-67890<br />
                대표: 유승혁 | 통신판매업신고: 제2024-서울강남-0000호
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] text-gray-600">
            <p>© 2026 한국 비건 평가 인증원 All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white font-bold transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
