import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제품소개 | 에버파인',
  description: '에버파인의 AR 기반 어린이 퍼즐과 어르신 인지 자극 퍼즐을 만나보세요.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">제품소개</h1>
          <p className="text-lg text-gray-300">
            AR·XR 기술로 인지와 기억을 자극하는 인터랙티브 퍼즐
          </p>
        </div>
      </section>

      {/* 카테고리 선택 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">제품 카테고리</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              에버파인은 어린이와 어르신, 각 세대에 맞는 맞춤형 퍼즐 콘텐츠를 제공합니다.
              <br />원하시는 카테고리를 선택해주세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 어린이 퍼즐 카드 */}
            <Link href="/products/kids" className="group">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* 이미지 영역 */}
                <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-5xl font-bold">4</span>
                    <span className="text-xl ml-1">개 제품</span>
                  </div>
                </div>
                
                {/* 콘텐츠 영역 */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      어린이용
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                    어린이 퍼즐
                  </h3>
                  <p className="text-gray-600 mb-6">
                    놀이를 통한 학습 몰입을 핵심 가치로 합니다. 
                    퍼즐 완성 후 QR 코드 스캔 시 AR 콘텐츠가 연동되어 
                    흥미와 집중도를 극대화합니다.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AR 콘텐츠 연동
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      교과 학습 연계
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      자기주도 학습 습관 형성
                    </li>
                  </ul>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>제품 보러가기</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* 어르신 퍼즐 카드 */}
            <Link href="/products/senior" className="group">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* 이미지 영역 */}
                <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-5xl font-bold">1</span>
                    <span className="text-xl ml-1">개 제품</span>
                  </div>
                </div>
                
                {/* 콘텐츠 영역 */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      어르신용
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-purple-600 transition-colors">
                    어르신 퍼즐
                  </h3>
                  <p className="text-gray-600 mb-6">
                    인지 저하 예방과 두뇌 활동 유지를 목적으로 한 
                    퍼즐 기반 인지 자극 콘텐츠입니다. 
                    요양보호사와 함께 진행하기에 최적화되어 있습니다.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      인지 자극 설계
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
                      체크리스트 앱 연동
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
