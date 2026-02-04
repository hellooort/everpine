import { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: '어린이 퍼즐 | 에버파인',
  description: '에버파인의 AR 기반 어린이 퍼즐을 만나보세요. 놀이를 통한 학습 몰입을 핵심 가치로 합니다.',
};

export default function KidsProductsPage() {
  const kidsProducts = getProductsByCategory('kids');

  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">제품소개</Link>
            <span>/</span>
            <span className="text-white font-medium">어린이 퍼즐</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
              어린이용
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">어린이 퍼즐</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            놀이를 통한 학습 몰입을 핵심 가치로 합니다. 
            퍼즐 완성 후 QR 코드 스캔 시 AR 콘텐츠가 연동되어 
            흥미와 집중도를 극대화합니다.
          </p>
        </div>
      </section>

      {/* 제품 목록 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-2">전체 제품</h2>
            <p className="text-gray-600">{kidsProducts.length}개의 제품이 있습니다</p>
          </div>

          {/* 제품 그리드 - 1줄 4개 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kidsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 어린이 퍼즐 특징 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">어린이 퍼즐의 특징</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">AR 콘텐츠 연동</h3>
              <p className="text-gray-600">
                실물 퍼즐과 디지털 경험을 연결해 흥미와 집중도를 극대화합니다. 
                QR 코드 스캔으로 3D 캐릭터가 살아 움직입니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">교과 학습 연계</h3>
              <p className="text-gray-600">
                초등 교과 학습 요소를 자연스럽게 녹인 콘텐츠 구성으로 
                놀면서 배우는 교육 효과를 제공합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">자기주도 학습</h3>
              <p className="text-gray-600">
                &quot;놀이 → 성취 → 확장 경험(AR)&quot;의 구조로 
                자기주도적 학습 습관을 형성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 학습 효과 섹션 */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">기대되는 학습 효과</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['관찰력', '문제해결력', '공간 인지', '집중력'].map((skill) => (
              <div key={skill} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-primary">{skill}</span>
                <span className="block text-sm text-gray-500 mt-1">향상</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 목록으로 돌아가기 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            제품 카테고리로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}
