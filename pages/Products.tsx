
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Category, Product as ProductType } from '../types';
import { NAV_ITEMS } from '../constants';

const MOCK_PRODUCTS: ProductType[] = [
  // Food Category
  { id: 1, name: "삼양라면 비건 (Vegan Ramen)", company: "삼양식품(주)", category: Category.FOOD, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "어메이징 오트 언스위트 190ml", company: "매일유업(주)", category: Category.FOOD, image: "https://images.unsplash.com/photo-1635437536607-b8572f443763?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "순식물성 요리세상 연두", company: "샘표식품(주)", category: Category.FOOD, image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "오뚜기 비건 카레 / 짜장", company: "(주)오뚜기", category: Category.FOOD, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "비건 고소한 참기름 김", company: "성경식품", category: Category.FOOD, image: "https://images.unsplash.com/photo-1622323389906-88849b38038b?auto=format&fit=crop&w=800&q=80" },
  { id: 14, name: "비건 교자 만두", company: "CJ제일제당", category: Category.FOOD, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "비건 인증 배추김치", company: "풀무원식품(주)", category: Category.FOOD, image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=800&q=80" },
  { id: 16, name: "비건 고추장 / 된장", company: "대상(주) 청정원", category: Category.FOOD, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80" },
  
  // Non-Food Category
  { id: 3, name: "트리메이 시카 리페어 비건 크림", company: "TRIMAY", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "아로마 515 라이프 디자인 소프", company: "AROMÁ515", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1605264964528-06403738d6dc?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "기린화장품 비건 단백질 트리트먼트", company: "KIRIN COSMETICS", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "네이처비타 하이드레이팅 세럼", company: "naturavita", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "비건 뱀부 칫솔 세트", company: "OKO101", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "케어팜 비건 릴리프 바디워시", company: "CARE FARM", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "휴먼피아 코스텍 비건 선스크린", company: "HUMANPIA COSTECH", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1556229167-da31d4548633?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "뷰티메이커스 비건 페이셜 마스크", company: "BEAUTY MAKERS", category: Category.NON_FOOD, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80" },
];

const ProductList = ({ category }: { category: Category | 'ALL' }) => {
  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    return category === 'ALL' || p.category === category;
  });

  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${product.category === Category.FOOD ? 'bg-green-600' : 'bg-blue-600'}`}>
                  {product.category === Category.FOOD ? '식품' : '비식품'}
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-400 font-bold mb-1 uppercase tracking-wider">{product.company}</p>
              <h4 className="font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors line-clamp-1">{product.name}</h4>
              <div className="flex justify-between items-center">
                <button className="flex items-center text-xs font-semibold text-gray-400 hover:text-green-600 transition-colors">
                  인증 정보 확인 <ExternalLink className="ml-1 w-3 h-3" />
                </button>
                <div className="flex items-center space-x-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                   <span className="text-[10px] text-green-700 font-bold">인증완료</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SubNav = () => {
  const location = useLocation();
  const subItems = NAV_ITEMS.find(item => item.path === '/products')?.subItems || [];
  
  return (
    <div className="flex overflow-x-auto no-scrollbar pb-4 mb-12 border-b border-gray-100 -mx-6 px-6 lg:mx-0 lg:px-0">
      <div className="flex space-x-3 min-w-max px-1">
        {subItems.map((item) => {
          const isActive = location.pathname === item.path || (location.pathname === '/products' && item.path === '/products/food');
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

const Products: React.FC = () => {
  const location = useLocation();
  const prodSubItems = NAV_ITEMS.find(item => item.path === '/products')?.subItems || [];
  const currentSubItem = prodSubItems.find(sub => sub.path === location.pathname);
  const pageTitle = currentSubItem ? currentSubItem.title : "인증제품 전체";

  return (
    <div className="pb-20">
      <div className="bg-gray-900 min-h-[300px] md:min-h-[450px] flex items-center justify-center text-white relative pt-16 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-30" alt="Fresh Produce Background" />
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
            <Route path="food" element={<ProductList category={Category.FOOD} />} />
            <Route path="non-food" element={<ProductList category={Category.NON_FOOD} />} />
            <Route path="/" element={<ProductList category="ALL" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Products;
