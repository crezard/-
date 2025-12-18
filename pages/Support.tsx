
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const NoticeList = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="space-y-4">
      {[
        { id: 10, title: "[공지] 2024년 상반기 비건 심사 기준 강화 안내", date: "2024.03.15", important: true },
        { id: 9, title: "[이벤트] 제12회 비건 박람회 무료 티켓 나눔", date: "2024.03.10", important: false },
        { id: 8, title: "웹사이트 시스템 정기 점검 안내", date: "2024.02.28", important: false },
        { id: 7, title: "[규정] 표시·광고 실증기관 지정 갱신 완료", date: "2024.02.15", important: true },
      ].map((item) => (
        <div key={item.id} className="bg-white p-5 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer flex justify-between items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {item.important && <span className="bg-red-50 text-red-500 text-[10px] font-black px-2 py-0.5 rounded border border-red-100 uppercase tracking-tighter">Notice</span>}
              <span className="text-xs font-bold text-gray-400">No. {item.id}</span>
            </div>
            <h4 className="text-base md:text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors leading-snug">{item.title}</h4>
            <p className="text-xs font-medium text-gray-400">{item.date}</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-green-500 transition-colors" />
        </div>
      ))}
    </div>
  </div>
);

const PressList = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {[
        { id: 1, title: "한국비건인증원, 2024 소비자 신뢰 브랜드 대상 수상", source: "매일경제", date: "2024.03.20", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&h=400&q=80" },
        { id: 2, title: "비건 시장 연 20% 성장... 인증 마크의 힘", source: "조선비즈", date: "2024.03.12", image: "https://images.unsplash.com/photo-1542601098-38374d1e41f2?auto=format&fit=crop&w=600&h=400&q=80" },
      ].map((press) => (
        <div key={press.id} className="group cursor-pointer">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
            <img src={press.image} alt={press.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute top-5 left-5">
              <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black text-gray-900 uppercase tracking-widest shadow-sm">{press.source}</span>
            </div>
          </div>
          <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">{press.title}</h4>
          <p className="text-sm font-medium text-gray-400">{press.date}</p>
        </div>
      ))}
    </div>
  </div>
);

const ContactForm = () => (
  <div className="animate-fadeIn space-y-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-green-900/5 border border-gray-100">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
              <input type="text" className="w-full p-5 bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none rounded-2xl transition-all font-medium" placeholder="업체명을 입력하세요" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Manager</label>
              <input type="text" className="w-full p-5 bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none rounded-2xl transition-all font-medium" placeholder="담당자 성함" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone</label>
              <input type="tel" className="w-full p-5 bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none rounded-2xl transition-all font-medium" placeholder="010-0000-0000" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input type="email" className="w-full p-5 bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none rounded-2xl transition-all font-medium" placeholder="example@email.com" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Inquiry Details</label>
            <textarea rows={6} className="w-full p-5 bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none rounded-2xl transition-all font-medium resize-none" placeholder="문의하실 내용을 상세히 기재해 주세요."></textarea>
          </div>
          <button type="button" className="w-full bg-[#1A5319] text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-800 transition-all shadow-xl active:scale-95 text-lg">
            <span>문의 신청하기</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
      
      <div className="space-y-8">
        <div className="bg-[#111827] text-white p-10 rounded-[2.5rem] shadow-2xl">
          <h4 className="text-sm font-black text-green-400 uppercase tracking-[0.2em] mb-10">Quick Contact</h4>
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Call Representative</p>
                <p className="font-bold text-xl md:text-2xl">02-1234-5678</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Official Email</p>
                <p className="font-bold text-lg md:text-xl text-gray-300">contact@vegan-cert.kr</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-sm text-gray-400 leading-relaxed">서울특별시 강남구 테헤란로 123, 5층</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-10 rounded-[2.5rem] border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-green-700" />
            <h5 className="font-black text-[#1A5319]">실시간 카카오 문의</h5>
          </div>
          <p className="text-sm text-green-700/70 font-medium leading-relaxed mb-6">
            평일 오전 9시 ~ 오후 6시 사이 빠른 상담이 가능합니다.
          </p>
          <button className="w-full bg-[#FEE500] text-[#3c1e1e] font-black py-4 rounded-xl shadow-lg active:scale-95 transition-transform">
            카카오톡 상담 시작
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SubNav = () => {
  const location = useLocation();
  const subItems = NAV_ITEMS.find(item => item.path === '/support')?.subItems || [];
  
  return (
    <div className="flex overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-gray-100 -mx-6 px-6 lg:mx-0 lg:px-0">
      <div className="flex space-x-3 min-w-max px-1">
        {subItems.map((item) => {
          const isActive = location.pathname === item.path || (location.pathname === '/support' && item.path === '/support/notice');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-8 py-4 rounded-full text-base font-black transition-all whitespace-nowrap shadow-sm hover:shadow-md ${
                isActive 
                  ? 'bg-[#1A5319] text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Support: React.FC = () => {
  const location = useLocation();
  const suppSubItems = NAV_ITEMS.find(item => item.path === '/support')?.subItems || [];
  const currentSubItem = suppSubItems.find(sub => sub.path === location.pathname);
  const pageTitle = currentSubItem ? currentSubItem.title : "공지사항";

  return (
    <div className="pb-20">
      <div className="bg-gray-900 min-h-[300px] md:min-h-[450px] flex items-center justify-center text-white relative pt-16 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-30" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent opacity-50"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg">{pageTitle}</h2>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 md:mt-16 max-w-6xl">
        <SubNav />
        <div className="w-full">
          <Routes>
            <Route path="notice" element={<NoticeList />} />
            <Route path="press" element={<PressList />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="/" element={<NoticeList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Support;
