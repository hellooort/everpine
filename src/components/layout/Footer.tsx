import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#363636] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                <span className="text-primary font-bold">EP</span>
              </div>
              <span className="text-xl font-bold">에버파인</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              AR·XR 기술을 기반으로,<br />
              어린이와 어르신의 기억과 인지를 놀이로 자극하는<br />
              인터랙티브 퍼즐 콘텐츠 전문 기업입니다.
            </p>
            <div className="text-gray-300 text-sm space-y-1">
              <p>주소: 서울특별시 강남구 테헤란로 123</p>
              <p>전화: 02-1234-5678</p>
              <p>이메일: contact@everpine.co.kr</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  제품소개
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <a 
                  href="https://smartstore.naver.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  스토어
                </a>
              </li>
            </ul>
          </div>

          {/* 제품 */}
          <div>
            <h3 className="font-semibold mb-4">제품</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/products#kids" className="hover:text-white transition-colors">
                  어린이 퍼즐
                </Link>
              </li>
              <li>
                <Link href="/products#senior" className="hover:text-white transition-colors">
                  어르신 퍼즐
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 에버파인(Everpine). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
