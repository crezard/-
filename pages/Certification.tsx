
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ClipboardList, Search, Award, Scale, TrendingUp, Users } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const CertIntro = () => (
  <div className="space-y-10 animate-fadeIn">
    <div className="prose prose-green max-w-none">
      <h4 className="text-xl font-bold text-gray-900 mb-6">비건 인증이란 무엇인가요?</h4>
      <p className="text-gray-600 text-lg leading-relaxed">
        비건 인증은 제품의 전 공정에서 동물 유래 성분을 포함하지 않고, 동물 실험을 하지 않았음을 공식적으로 증명하는 제도입니다. 
        이는 단순한 채식주의자를 위한 표식을 넘어, 가치 소비와 윤리적 제조를 실천하는 기업의 약속입니다.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 border rounded-3xl bg-white shadow-sm">
        <h4 className="font-bold text-xl mb-4 text-green-800">인증의 필요성</h4>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>소비자의 알 권리 보장 및 신뢰 구축</li>
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>복잡한 원료 성분 분석의 투명성 확보</li>
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>글로벌 비건 시장 진출을 위한 필수 조건</li>
        </ul>
      </div>
      <div className="p-8 border rounded-3xl bg-white shadow-sm">
        <h4 className="font-bold text-xl mb-4 text-green-800">심사 범위</h4>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>원재료 및 부재료의 동물성 성분 여부</li>
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>제조 공정상의 동물성 교차 오염 여부</li>
          <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>최종 제품 및 원료의 동물 실험 여부</li>
        </ul>
      </div>
    </div>
  </div>
);

const CertProcess = () => (
  <div className="space-y-16 animate-fadeIn">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-gray-500">투명하고 공정한 심사 과정을 통해 제품의 비건 신뢰도를 보장합니다.</p>
    </div>
    
    <div className="space-y-12">
      {[
        { icon: <ClipboardList />, step: "1", title: "신청 및 수수료 납부", desc: "인증요청 확인 후 제품 원료 및 성분 목록, 제조공정 등의 특징과 관련된 신청서를 작성합니다. 신청서를 접수하고 심사 비용이 입금되면, 서류를 검토·분석한 후 적합성 여부를 결정합니다." },
        { icon: <Search />, step: "2", title: "평가 및 심사", desc: "제품 초기 평가는 생산공정 단계에서 인증 요구사항에 적합한 원재료 및 부재료 구성성분 분석과 첨가제 등 모든 배합성분의 기술자료 평가를 통해 적합성 여부를 평가합니다." },
        { icon: <Scale />, step: "3", title: "실험 및 심의위원회", desc: "제품의 특성상 2차 검증이 필요한 경우에는 PCR 검사를 통한 과학적 근거를 기반으로 심의위원회를 소집하여 평가합니다." },
        { icon: <Search />, step: "4", title: "계약 체결", desc: "본 인증원의 평가 및 심사를 거쳐 적합하다고 판정된 제품에 대해 비건 인증을 승인하고, 신청 업체와 본 인증원 간에 계약을 체결합니다." },
        { icon: <Award />, step: "5", title: "비건 인증 발급", desc: "평가 및 검증 과정에서 수집된 정보와 데이터를 근거로 비건 인증 발급이 적합한 경우에 한하여 비건인증서를 발급합니다." }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-700 shadow-sm">
              {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
            </div>
            {idx < 4 && <div className="hidden md:block w-px h-24 bg-gray-100 mt-4"></div>}
          </div>
          <div className="flex-grow pt-2">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-3xl font-black text-green-700/20">{item.step}</span>
              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
            </div>
            <p className="text-gray-600 leading-relaxed bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CertBenefit = () => (
  <div className="space-y-12 animate-fadeIn">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "마케팅 강화", desc: "공신력 있는 인증 마크 부착을 통해 브랜드 가치 극대화", icon: <TrendingUp className="w-12 h-12 text-green-700" /> },
        { title: "소비자 신뢰 확보", desc: "복잡한 성분 확인 없이 명확한 선택 기준 제시", icon: <Award className="w-12 h-12 text-blue-700" /> },
        { title: "글로벌 경쟁력", desc: "국제 표준에 부합하는 기준으로 수출 경쟁 우위 점유", icon: <Users className="w-12 h-12 text-orange-700" /> }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-gray-50 rounded-3xl text-center border border-gray-100">
          <div className="mx-auto mb-6">{item.icon}</div>
          <h4 className="font-bold text-lg mb-3">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const SubNav = () => {
  const location = useLocation();
  const subItems = NAV_ITEMS.find(item => item.path === '/certification')?.subItems || [];
  
  return (
    <div className="flex overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-gray-100 -mx-6 px-6 lg:mx-0 lg:px-0">
      <div className="flex space-x-3 min-w-max px-1">
        {subItems.map((item) => {
          const isActive = location.pathname === item.path || (location.pathname === '/certification' && item.path === '/certification/intro');
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

const Certification: React.FC = () => {
  const location = useLocation();
  const certSubItems = NAV_ITEMS.find(item => item.path === '/certification')?.subItems || [];
  const currentSubItem = certSubItems.find(sub => sub.path === location.pathname);
  const pageTitle = currentSubItem ? currentSubItem.title : "비건인증소개";

  return (
    <div className="pb-20">
      <div className="bg-gray-900 min-h-[300px] md:min-h-[450px] flex items-center justify-center text-white relative pt-16 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-30" alt="Fresh Produce Background" />
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
            <Route path="intro" element={<CertIntro />} />
            <Route path="process" element={<CertProcess />} />
            <Route path="benefit" element={<CertBenefit />} />
            <Route path="/" element={<CertIntro />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Certification;
