import { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: '공부방 | (주)에버파인',
  description: '(주)에버파인의 어린이 학습 콘텐츠를 만나보세요. 핑하, BB, 따비 등 캐릭터 IP 기반의 학습 교구와 콘텐츠를 제공합니다.',
};

export default function StudyProductsPage() {
  const studyProducts = getProductsByCategory('study');

  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-sm text-green-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">제품소개</Link>
            <span>/</span>
            <span className="text-white font-medium">공부방</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
              Kids
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">공부방</h1>
          <p className="text-lg text-green-100 max-w-2xl">
            공부방은 XR, 퍼즐, 캐릭터 콘텐츠를 결합한 체험형 학습 솔루션으로 
            아이들의 사고력과 창의력을 키웁니다.
          </p>
        </div>
      </section>

      {/* 제품 목록 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-2">전체 제품</h2>
            <p className="text-gray-600">{studyProducts.length}개의 제품이 있습니다</p>
          </div>

          {/* 제품 그리드 - 1줄 4개 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 키즈 제품의 특징 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">키즈 제품의 특징</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">XR 콘텐츠 연동</h3>
              <p className="text-gray-600">
                종이 콘텐츠를 넘어 디지털 체험으로 확장되는 학습 구조. 
                XR 기술을 활용하여 보고, 듣고, 체험하는 입체적인 학습 경험을 제공합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">놀이와 학습이 결합된 콘텐츠</h3>
              <p className="text-gray-600">
                단순한 교구가 아닌 다양한 활동을 통해 
                아이들이 자연스럽게 인지력·사고력·기초 학습 능력을 키울 수 있습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">감각 자극 기반 학습 경험</h3>
              <p className="text-gray-600">
                시각·촉각 중심의 오감 자극 콘텐츠. 
                색칠, 쓰기, 따라가기 등 활동을 통해 집중력과 소근육 발달을 동시에 유도합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 학습 효과 섹션 */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">기대되는 학습 효과</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['관찰력', '집중력', '소근육 발달', '창의력'].map((skill) => (
              <div key={skill} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
            className="inline-flex items-center gap-2 text-primary hover:text-green-600 transition-colors"
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
