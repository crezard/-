
import React from 'react';
import { ArrowRight, CheckCircle, Leaf, Search, Award, Star, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CORE_VALUES } from '../constants';

const PARTNER_COMPONENTS = [
  { name: "Maeil", render: () => (
    <div className="bg-[#004791] px-4 py-2 flex items-center justify-center w-28 md:w-36 h-12 md:h-16 shadow-sm" style={{ clipPath: 'polygon(0 0, 50% 12%, 100% 0, 100% 100%, 0 100%)' }}>
      <span className="text-white font-serif text-sm md:text-xl font-bold tracking-tight">Maeil</span>
    </div>
  )},
  { name: "samyang", render: () => (
    <div className="flex items-center space-x-1 h-12 md:h-16">
      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#00A0E3] mb-3 md:mb-4"></div>
      <span className="text-lg md:text-2xl font-bold text-[#231F20] tracking-tighter">samyang</span>
      <div className="flex space-x-0.5 md:space-x-1 mt-3 md:mt-4">
        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#ED1C24]"></div>
        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#8DC63F]"></div>
      </div>
    </div>
  )},
  { name: "TRIMAY", render: () => (
    <div className="flex items-center space-x-0 font-sans h-12 md:h-16">
      <span className="text-lg md:text-2xl font-bold text-black tracking-widest">TRIM</span>
      <div className="relative inline-block">
         <span className="text-lg md:text-2xl font-bold text-black">A</span>
         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="w-[1px] h-[70%] bg-white -rotate-12 translate-x-[-1px]"></div>
         </div>
      </div>
      <span className="text-lg md:text-2xl font-bold text-black tracking-widest">Y</span>
    </div>
  )},
  { name: "KIRIN COSMETICS", render: () => (
    <div className="flex items-center space-x-1.5 text-[#6B46C1] h-12 md:h-16">
      <div className="relative w-7 h-7 md:w-10 md:h-10 flex items-center justify-center shrink-0">
         <div className="absolute w-0.5 md:w-1 h-4 md:h-6 bg-current rotate-12 rounded-full transform -translate-x-1"></div>
         <div className="absolute w-2 h-2 md:w-3 md:h-3 border border-current rounded-full top-1 left-1 md:left-1.5"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] md:text-lg font-bold leading-none">(주)기린화장품</span>
      </div>
    </div>
  )},
  { name: "BEAUTY MAKERS", render: () => (
    <div className="flex items-center h-12 md:h-16">
      <span className="text-[10px] md:text-base font-black text-black tracking-[0.1em] md:tracking-[0.2em] uppercase">BEAUTY MAKERS</span>
    </div>
  )},
  { name: "AROMA 515", render: () => (
    <div className="flex flex-col items-center h-12 md:h-16 justify-center scale-90 md:scale-100">
      <div className="flex flex-col items-center leading-none">
        <span className="text-sm md:text-xl font-black text-black tracking-tight">AROMÁ515</span>
        <div className="w-full h-[1px] bg-black mt-0.5"></div>
      </div>
    </div>
  )},
  { name: "CARE FARM", render: () => (
    <div className="flex flex-col items-center leading-none h-12 md:h-16 justify-center scale-90 md:scale-100">
      <div className="flex items-center">
        <span className="text-sm md:text-xl font-black text-[#F39800]">CARE</span>
        <span className="text-sm md:text-xl font-black text-[#00816F] ml-0.5">FARM</span>
      </div>
    </div>
  )},
  { name: "HUMANPIA COSTECH", render: () => (
    <div className="bg-[#064E3B] px-3 py-1.5 flex flex-col items-center rounded-sm text-white h-12 md:h-16 justify-center">
      <span className="text-[10px] md:text-2xl font-light tracking-[0.1em] md:tracking-widest">HUMANPIA</span>
    </div>
  )},
  { name: "naturavita", render: () => (
    <div className="bg-[#1A5319] px-3 py-1.5 flex flex-col items-center rounded-sm h-12 md:h-16 justify-center">
      <span className="text-[10px] md:text-xl font-bold text-white tracking-tighter">naturavita</span>
    </div>
  )},
  { name: "OKO101", render: () => (
    <div className="flex items-center h-12 md:h-16">
      <span className="text-[12px] md:text-xl font-bold text-black tracking-widest">OKO101</span>
    </div>
  )}
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[700px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover object-center" 
            alt="Nature and Sustainability" 
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 py-16 md:py-0">
          <div className="max-w-2xl text-white text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 leading-[1.15] md:leading-tight tracking-tight">
              당신의 제품에<br />
              <span className="text-green-400">생명의 가치</span>를 더합니다.
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium opacity-90">
              한국비건평가인증원은 신뢰할 수 있는 엄격한 심사를 통해 지속 가능한 비건 라이프스타일을 선도합니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/certification/process" className="bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center transition-all shadow-2xl active:scale-95 text-lg">
                인증절차 알아보기 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/products/food" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-black flex items-center justify-center transition-all text-lg">
                인증제품 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              공신력 있는 비건 인증,<br className="md:hidden" /> 한국비건평가인증원
            </h2>
            <p className="text-gray-500 text-base md:text-xl font-medium">
              신뢰도 높은 비건평가, 한국비건평가인증원이 함께합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 md:gap-y-16 gap-x-6 md:gap-x-12 items-center justify-items-center">
            {PARTNER_COMPONENTS.map((Partner, idx) => (
              <div key={idx} className="transition-all duration-500 transform hover:scale-110 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 cursor-pointer">
                <Partner.render />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Principles Section - Centered and grouped tighter */}
      <section className="py-24 md:py-32 bg-[#f8f9f7]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
            <div className="flex flex-col items-center lg:items-end lg:w-[42%] text-center lg:text-right">
              {/* Logo Frame */}
              <div className="relative p-8 md:p-12 bg-white border-[2px] md:border-[4px] border-[#A5D8F3] rounded-[1.5rem] md:rounded-[2rem] shadow-xl mb-6 flex flex-col items-center min-w-[280px]">
                <div className="relative mb-8">
                  <span className="text-6xl md:text-8xl font-serif font-black text-[#1A5319] italic tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>vegan</span>
                  <Leaf className="w-10 h-10 md:w-16 md:h-16 text-[#1A5319] fill-[#1A5319] absolute -top-4 -right-2 md:-top-8 md:-right-4 -rotate-12" />
                </div>
                
                <div className="flex flex-col items-center space-y-2 mb-2">
                  <div className="text-[#1A5319] font-black tracking-[0.4em] text-lg md:text-2xl leading-none">RESPECT</div>
                  <div className="text-[#1A5319] font-black tracking-[0.4em] text-lg md:text-2xl leading-none">TRUST</div>
                  <div className="text-[#1A5319] font-black tracking-[0.4em] text-lg md:text-2xl leading-none">EXPERTISE</div>
                </div>
              </div>

              {/* Company Info below the frame - aligned to right on lg */}
              <div className="flex items-center space-x-3 mb-8 text-[#1A5319] font-bold text-sm md:text-lg">
                <span className="tracking-widest">KIVAC</span>
                <span className="text-gray-300">|</span>
                <span className="font-medium">realvegan.co.kr</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  한국비건평가인증원의<br />
                  <span className="inline-block bg-[#1A5319] text-white px-5 py-3 mt-2 rounded-lg shadow-lg">비건 인증 3원칙</span>
                </h3>
              </div>
            </div>

            <div className="lg:w-[50%] w-full max-w-2xl">
              <div className="bg-white border-[2px] md:border-[3px] border-[#1A5319] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                <div className="divide-y divide-gray-100">
                  {[
                    { title: "RESPECT", desc: "공정한 평가, 소통의 존중, 사회적 책임을 위해 모든 이해관계자에 대한 존중을 바탕으로 공정하고 투명한 운영" },
                    { title: "TRUST", desc: "실제로 믿을 수 있는 품질 제공 보장을 위해 투명한 절차, 정기 모니터링, 독립적인 평가 등 투명한 결과 제공" },
                    { title: "EXPERTISE", desc: "비건 인증 기준에 대한 깊은 이해와 최고의 품질 보장 전문 인력 확보, 과학적 근거 마련 및 전문가 의견 수렴" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 md:p-12 hover:bg-green-50/50 transition-colors group">
                      <h4 className="text-xl md:text-2xl font-black text-[#1A5319] tracking-[0.2em] mb-4 flex items-center justify-center lg:justify-start">
                        <span className="w-2 h-2 rounded-full bg-green-300 mr-3 group-hover:scale-150 transition-transform"></span>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-lg leading-relaxed text-center lg:text-left font-medium">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Mobile Vertical Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">핵심 가치</h2>
            <div className="w-12 h-1.5 bg-green-700 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-500 text-base md:text-xl font-medium leading-relaxed">
              한국비건평가인증원은 비건 문화를 확산시키고 제품의 신뢰도를 높이기 위해 다음과 같은 가치를 지향합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-[#f8f9f7] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-green-100 group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-green-600 group-hover:text-white">
                  {React.cloneElement(value.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10 transition-colors" })}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base font-medium opacity-80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA Section */}
      <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#1A5319] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-center text-white relative shadow-3xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <Globe className="w-[800px] h-[800px] absolute -top-40 -left-40" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <Award className="w-16 h-16 md:w-24 md:h-24 text-green-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                지금 바로 귀사의 제품에<br className="md:hidden" /> <span className="text-green-300">비건의 가치</span>를 더하세요
              </h2>
              <p className="text-green-100/80 text-base md:text-2xl mb-12 font-medium leading-relaxed">
                전담 심사역이 신청부터 발급까지 전 과정을 전문적으로 지원합니다.<br className="hidden md:block" />
                비건 인증 마크는 소비자와의 가장 신뢰 깊은 약속입니다.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/support/contact" className="w-full sm:w-auto bg-white text-[#1A5319] px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl active:scale-95">
                  상담 신청하기
                </Link>
                <a href="tel:02-1234-5678" className="w-full sm:w-auto bg-green-800/50 backdrop-blur-sm text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-lg hover:bg-green-800 transition-colors">
                  02-1234-5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
