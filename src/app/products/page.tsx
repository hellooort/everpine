import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: '제품소개 | (주)에버파인',
  description: '(주)에버파인의 공부방 학습 콘텐츠와 에버파인 라이프 인지케어 솔루션을 만나보세요.',
};

export default function ProductsPage() {
  const studyProducts = getProductsByCategory('study');
  const lifeProducts = getProductsByCategory('life');

  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-primary pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">제품소개</h1>
          <p className="text-lg text-gray-300">
            XR과 퍼즐, 캐릭터를 통해 세대를 잇는 새로운 경험
          </p>
        </div>
      </section>

      {/* 카테고리 선택 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">제품 카테고리</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              (주)에버파인은 아이에게는 배움의 즐거움을, 어르신에게는 기억의 소중함을 전합니다.
              <br />원하시는 카테고리를 선택해주세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 공부방 카드 */}
            <Link href="/products/study" className="group">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* 이미지 영역 */}
                <div className="h-64 bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center p-8">
                  <Image
                    src="/공부방LOGO.png"
                    alt="공부방"
                    width={350}
                    height={130}
                    className="object-contain group-hover:scale-105 transition-transform brightness-0 invert"
                  />
                </div>
                
                {/* 콘텐츠 영역 */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      Kids
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-green-600 transition-colors">
                    공부방
                  </h3>
                  <p className="text-gray-600 mb-6">
                    공부방은 XR 기술을 활용해 아이들이 놀면서 배우는 새로운 학습 경험을 제공합니다. 
                    퍼즐과 체험형 콘텐츠를 통해 아이들의 인지 발달과 창의력을 자연스럽게 키웁니다.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      XR 콘텐츠 연동
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      캐릭터 IP 기반 학습
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      인지발달 및 두뇌개발
                    </li>
                  </ul>
                  <div className="flex items-center text-green-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>제품 보러가기</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* 에버파인 라이프 카드 */}
            <Link href="/products/life" className="group">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* 이미지 영역 */}
                <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center p-8">
                  <Image
                    src="/LOGO LIFE.png"
                    alt="에버파인 라이프"
                    width={350}
                    height={130}
                    className="object-contain group-hover:scale-105 transition-transform brightness-0 invert"
                  />
                </div>
                
                {/* 콘텐츠 영역 */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      Senior
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-purple-600 transition-colors">
                    에버파인 라이프
                  </h3>
                  <p className="text-gray-600 mb-6">
                    인지 저하 예방과 두뇌 활동 유지를 목적으로 한 
                    CST 기반 인지자극 콘텐츠입니다. 
                    요양보호사와 함께 진행하기에 최적화되어 있습니다.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      CST 기반 인지 자극
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      현장 친화적 사용성
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AI 안내 영상 제공
                    </li>
                  </ul>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>제품 보러가기</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
