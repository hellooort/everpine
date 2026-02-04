import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: '문의하기 | 에버파인',
  description: '에버파인에 대한 문의사항을 남겨주세요. 빠른 시일 내에 답변 드리겠습니다.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">문의하기</h1>
          <p className="text-lg text-gray-300">
            궁금한 점이 있으시면 언제든 문의해주세요
          </p>
        </div>
      </section>

      {/* 문의 폼 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* 연락처 정보 */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">연락처 정보</h2>
              
              <div className="space-y-6">
                {/* 전화 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">전화</h3>
                    <p className="text-gray-600">02-1234-5678</p>
                    <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                  </div>
                </div>

                {/* 이메일 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">이메일</h3>
                    <p className="text-gray-600">contact@everpine.co.kr</p>
                    <p className="text-sm text-gray-500">24시간 접수 가능</p>
                  </div>
                </div>

                {/* 주소 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">주소</h3>
                    <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
                    <p className="text-sm text-gray-500">에버파인 빌딩 5층</p>
                  </div>
                </div>
              </div>

              {/* FAQ 안내 */}
              <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-primary mb-3">자주 묻는 질문</h3>
                <p className="text-sm text-gray-600 mb-4">
                  문의 전에 자주 묻는 질문을 확인해보세요.
                  원하시는 답변을 빠르게 찾을 수 있습니다.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">Q.</span>
                    제품 배송은 얼마나 걸리나요?
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">Q.</span>
                    AR 앱은 어디서 다운로드하나요?
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">Q.</span>
                    단체 구매 할인이 있나요?
                  </li>
                </ul>
              </div>
            </div>

            {/* 문의 폼 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">문의 양식</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
