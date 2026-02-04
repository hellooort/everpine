import { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: '어르신 퍼즐 | 에버파인',
  description: '에버파인의 어르신 인지 자극 퍼즐을 만나보세요. 인지 저하 예방과 두뇌 활동 유지를 위한 퍼즐입니다.',
};

export default function SeniorProductsPage() {
  const seniorProducts = getProductsByCategory('senior');

  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-sm text-purple-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">제품소개</Link>
            <span>/</span>
            <span className="text-white font-medium">어르신 퍼즐</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
              어르신용
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">어르신 퍼즐</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            인지 저하 예방과 두뇌 활동 유지를 목적으로 한 
            퍼즐 기반 인지 자극 콘텐츠입니다. 
            요양보호사와 함께 진행하기에 최적화되어 있습니다.
          </p>
        </div>
      </section>

      {/* 제품 목록 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-2">전체 제품</h2>
            <p className="text-gray-600">{seniorProducts.length}개의 제품이 있습니다</p>
          </div>

          {/* 제품 그리드 - 1줄 4개 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 어르신 퍼즐 특징 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">어르신 퍼즐의 특징</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">인지 자극 설계</h3>
              <p className="text-gray-600">
                기억력·주의력·판단력·반응 인지를 자극하는 구조로 설계되어 
                두뇌 활동을 활성화합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">현장 친화적</h3>
              <p className="text-gray-600">
                요양보호사가 &quot;아버님, 이렇게 하시면 됩니다&quot; 형태로 
                직접 시연하며 진행하기 쉬운 사용성을 제공합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">체크리스트 연동</h3>
              <p className="text-gray-600">
                본인용·보호자용 체크리스트를 통해 
                인지 상태를 확인하고 관찰할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 인지 자극 영역 섹션 */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">인지 자극 영역</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['기억력', '주의력', '판단력', '반응 인지'].map((area) => (
              <div key={area} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-primary">{area}</span>
                <span className="block text-sm text-gray-500 mt-1">자극</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시즌 안내 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">시즌별 콘텐츠 구성</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((season) => (
              <div key={season} className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center">
                <span className="text-4xl font-bold text-purple-600">시즌 {season}</span>
                <p className="text-sm text-purple-700 mt-2">
                  {season === 1 && '1분기'}
                  {season === 2 && '2분기'}
                  {season === 3 && '3분기'}
                  {season === 4 && '4분기'}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            분기별 1개 시즌 운영으로 지속적인 인지 자극 콘텐츠를 제공합니다
          </p>
        </div>
      </section>

      {/* 목록으로 돌아가기 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-purple-600 transition-colors"
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
