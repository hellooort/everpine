import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#363636] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="EverPine"
                width={140}
                height={35}
                className="h-9 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              (주)에버파인은 놀이와 기억, 그리고 이야기를 연결하는 콘텐츠를 만듭니다.<br />
              아이에게는 배움의 즐거움을, 어르신에게는 기억의 소중함을 전하며<br />
              XR과 퍼즐, 캐릭터를 통해 세대를 잇는 새로운 경험을 제공합니다.
            </p>
            <p className="text-secondary text-sm font-medium mb-3">Play, Think, Remember – Everpine</p>
            <div className="text-gray-300 text-sm space-y-1">
              <p>주소: 대전광역시 대덕구 한남로 70, 한남대학교</p>
              <p className="pl-[2.5rem]">캠퍼스혁신파크 산학연혁신허브 A동 401호</p>
              <p>전화: 070-8870-1431</p>
              <p>이메일: wind2015@everpine.kr</p>
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
                <Link href="/products/study" className="hover:text-white transition-colors">
                  공부방
                </Link>
              </li>
              <li>
                <Link href="/products/life" className="hover:text-white transition-colors">
                  에버파인 라이프
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2017-2026 (주)에버파인(Everpine Co.,Ltd). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
