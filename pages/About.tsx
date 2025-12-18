
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, CheckCircle2, Leaf } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Greeting = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="max-w-4xl mx-auto py-4">
      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 italic text-center">"건강하고 지속가능한 삶을 위한 약속"</h4>
      <div className="text-gray-600 leading-relaxed space-y-6 mb-12 text-lg">
        <p className="font-bold text-xl text-green-800">안녕하세요.</p>
        <p>한국비건평가인증원 홈페이지를 방문해주신 여러분을 환영합니다.</p>
        <p>전 세계적으로 채식주의에 대한 수요가 늘어나면서 국내에서도 소비 트렌드의 변화가 일어나고 있습니다.</p>
        <p>비윤리적 공장식 축산 방식에 대한 반대, 비윤리성, 육류 소비가 환경에 미치는 영향에 대한 고민 등 인간과 동물, 환경 간의 지속가능성을 추구하는 인식이 확산되고 있습니다.</p>
        <p>동물 실험을 하지 않은 제품 및 논비건(non-vegan) 성분이 없는 제품에 대한 수요가 증가하고 있으며, 젊은 소비층 사이에서는 비거니즘(veganism)이 새로운 라이프 스타일의 하나로 자리 잡고 있습니다.</p>
        <p>본 인증원은 비건 제품을 인증함으로써 소비자의 손쉬운 선택을 돕고 기업의 원활한 생산 및 판매를 촉진하고자 설립되었습니다.</p>
        <p>공정하고 정확한 심사를 통한 비건 제품의 적합성 평가 등으로 비건 문화 확산에 기여하고자 합니다.</p>
        <p>감사합니다.</p>
      </div>
      <div className="text-right border-t border-gray-100 pt-8">
        <p className="text-gray-500 text-sm">한국비건평가인증원 대표이사</p>
        <p className="text-3xl font-bold text-gray-900 tracking-tight">유 승 혁</p>
      </div>
    </div>
  </div>
);

const Introduction = () => (
  <div className="space-y-10 animate-fadeIn">
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
        지속 가능한 미래를 위한 기준,<br />
        <span className="text-green-700">한국비건평가인증원</span>이 만들어가겠습니다.
      </h4>
      <div className="w-16 h-1 bg-green-700 mx-auto"></div>
    </div>

    <div className="prose prose-green max-w-none text-gray-600 leading-relaxed space-y-6">
      <p>
        ‘비거노믹스(vegenomics)’는 전반적인 비건 산업을 뜻하는 말입니다. 세계 비건 시장은 식품, 화장품, 의류 등 여러 분야에서 괄목할 만한 성장세를 기록하고 있습니다.
      </p>
      <p>
        본 인증원은, 맞춤형 비건 제품 등록을 통해 기업의 원활한 제품 생산을 촉진하고 소비자가 손쉽게 비건 제품을 구입할 수 있도록 돕고 있습니다.
      </p>
    </div>

    <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-8 flex items-center">
        <Shield className="w-5 h-5 text-green-700 mr-2" /> 비건 인증 승인을 위한 3대 필수 조건
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "원료 및 유전자", desc: "동물 유래 성분 및 관련 유전자 변형 생물(GMO) 배제", icon: <Leaf className="w-6 h-6 text-green-600" /> },
          { title: "동물 실험 금지", desc: "완제품 및 성분에 대한 동물 실험 배제", icon: <Shield className="w-6 h-6 text-green-600" /> },
          { title: "교차 오염 방지", desc: "생산 공정 중 동물성 원료와의 교차 오염 차단", icon: <CheckCircle2 className="w-6 h-6 text-green-600" /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Mark = () => (
  <div className="space-y-12 animate-fadeIn">
    <div className="max-w-md mx-auto mb-10 p-12 bg-white shadow-2xl rounded-[3rem] border-2 border-gray-50 text-center">
      <div className="relative inline-block px-12 py-8">
        <div className="absolute inset-0 border-[5px] border-[#A5D8F3] rounded-[2rem]"></div>
        <div className="relative flex items-center">
          <span className="text-8xl font-serif font-black text-[#1A5319] italic tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>vegan</span>
          <Leaf className="w-16 h-16 text-[#1A5319] fill-[#1A5319] absolute -top-6 -right-2 -rotate-12" />
        </div>
      </div>
      <p className="mt-8 text-gray-400 font-bold tracking-widest uppercase text-xs">Official Certification Mark</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "심볼 (Symbol)", desc: "자연스럽게 뻗은 나뭇잎은 생명 존중의 가치를 상징합니다.", icon: <Leaf className="text-green-600 w-6 h-6" /> },
        { title: "컬러 (Color)", desc: "Deep Green은 신뢰를, Sky Blue는 깨끗하고 안전한 가치를 의미합니다.", icon: <Shield className="text-blue-600 w-6 h-6" /> },
        { title: "프레임 (Frame)", desc: "개방형 프레임은 비건 문화의 확장성을 나타냅니다.", icon: <CheckCircle2 className="text-orange-600 w-6 h-6" /> }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-left">
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
            {item.icon}
          </div>
          <h5 className="font-bold text-gray-900 mb-3">{item.title}</h5>
          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const SubNav = () => {
  const location = useLocation();
  const subItems = NAV_ITEMS.find(item => item.path === '/about')?.subItems || [];
  
  return (
    <div className="flex overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-gray-100 -mx-6 px-6 lg:mx-0 lg:px-0">
      <div className="flex space-x-3 min-w-max px-1">
        {subItems.map((item) => {
          const isActive = location.pathname === item.path || (location.pathname === '/about' && item.path === '/about/greeting');
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

const About: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const aboutSubItems = NAV_ITEMS.find(item => item.path === '/about')?.subItems || [];
  const currentSubItem = aboutSubItems.find(sub => sub.path === currentPath);
  const pageTitle = currentSubItem ? currentSubItem.title : "인사말";

  return (
    <div className="pb-20">
      <div className="bg-gray-900 min-h-[300px] md:min-h-[450px] flex items-center justify-center text-white relative pt-16 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-30" alt="" />
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
            <Route path="greeting" element={<Greeting />} />
            <Route path="intro" element={<Introduction />} />
            <Route path="mark" element={<Mark />} />
            <Route path="/" element={<Greeting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default About;
