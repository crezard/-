
import React from 'react';
import { ShieldCheck, Leaf, Globe, FileCheck, Search, Users, Headphones } from 'lucide-react';

export const NAV_ITEMS = [
  {
    title: '인증원소개',
    path: '/about',
    subItems: [
      { title: '인사말', path: '/about/greeting' },
      { title: '기관소개', path: '/about/intro' },
      { title: '비건인증마크', path: '/about/mark' },
    ]
  },
  {
    title: '비건인증',
    path: '/certification',
    subItems: [
      { title: '비건인증소개', path: '/certification/intro' },
      { title: '비건인증절차', path: '/certification/process' },
      { title: '비건인증효과', path: '/certification/benefit' },
    ]
  },
  {
    title: '비건인증제품',
    path: '/products',
    subItems: [
      { title: '식품분야', path: '/products/food' },
      { title: '비식품분야', path: '/products/non-food' },
    ]
  },
  {
    title: '고객지원',
    path: '/support',
    subItems: [
      { title: '공지사항', path: '/support/notice' },
      { title: '언론보도', path: '/support/press' },
      { title: '상담 및 문의', path: '/support/contact' },
    ]
  }
];

export const CORE_VALUES = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
    title: "신뢰성 (Reliability)",
    description: "엄격한 기준과 투명한 심사 절차를 통해 소비자가 믿을 수 있는 비건 제품을 인증합니다."
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-700" />,
    title: "생명 존중 (Ethics)",
    description: "동물 유래 원료를 배제하고 동물 실험을 반대하여 생명의 존엄성을 실천합니다."
  },
  {
    icon: <Globe className="w-8 h-8 text-green-700" />,
    title: "지속가능성 (Sustainability)",
    description: "지구 환경과 미래 세대를 위해 지속 가능한 소비 문화를 선도합니다."
  }
];
