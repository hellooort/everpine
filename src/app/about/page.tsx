'use client';

import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { MapPin, Phone, Clock, Mail, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// ... metadata는 layout이나 page에서 export 해야 하므로 여기서는 컴포넌트만 수정
// 실제 파일에서는 metadata export 구문 유지 필요하지만 여기서는 클라이언트 컴포넌트로 변경되어야 하므로 분리 필요
// 일단 컴포넌트 내부 로직 위주로 수정

// 연혁 데이터
const historyData = [
  { year: '2026', events: ['에버파인 법인 설립', '어린이용 AR 퍼즐 1차 시리즈 개발 착수'] },
  { year: '2025', events: ['AR/XR 퍼즐 콘텐츠 개발 시작', '서울시교육청 MOU 체결', '어르신용 인지 퍼즐 시즌 1 출시'] },
  { year: '2024', events: ['창업 준비 및 기술 연구', '특허 출원 (AR 기반 인지 자극 퍼즐 시스템)'] },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              회사소개
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
              AR·XR 기술로 인지 건강을 혁신하는 에버파인입니다
            </p>
          </SlideUp>
        </div>
      </section>

      {/* 인사말 섹션 */}
      <section id="greeting" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              {/* CEO 이미지 플레이스홀더 */}
              <FadeIn className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-xl border-4 border-white">
                <span className="text-4xl text-gray-300 font-light">CEO</span>
              </FadeIn>
              
              <div className="flex-1 text-center md:text-left">
                <SlideUp delay={0.2}>
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    &quot;놀이로 기억을 깨우다&quot;
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                    <p>
                      안녕하세요, 에버파인 대표입니다.
                    </p>
                    <p>
                      저희 에버파인은 AR·XR 기술을 활용하여 어린이와 어르신 모두에게 
                      즐거운 인지 자극 경험을 제공하고자 합니다.
                    </p>
                    <p>
                      단순한 퍼즐이 아닌, 기억력·집중력·판단력을 자연스럽게 
                      향상시킬 수 있는 인터랙티브 콘텐츠를 개발하며, 
                      돌봄 현장에서 실제로 활용 가능한 디지털 인지 도구를 만들어가고 있습니다.
                    </p>
                    <p>
                      앞으로도 사람 중심의 기술로 모든 세대의 인지 건강에 
                      기여하는 기업이 되겠습니다.
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-primary font-bold text-xl">에버파인 대표 홍길동</p>
                  </div>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 섹션 */}
      <section id="history" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">걸어온 길</h2>
            <p className="text-gray-500">에버파인이 만들어가는 혁신의 발자취입니다</p>
          </div>
          
          <div className="relative">
            {/* 타임라인 선 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2" />
            
            <StaggerContainer className="space-y-12">
              {historyData.map((item, index) => (
                <StaggerItem key={item.year} className={cn(
                  "relative flex items-start group",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* 연도 마커 (중앙) */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-secondary rounded-full transform -translate-x-1/2 mt-[0.35rem] z-20 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* 연도 텍스트 (모바일) */}
                  <div className="md:hidden absolute left-16 top-0 text-xl font-bold text-secondary leading-none">
                    {item.year}
                  </div>

                  {/* 콘텐츠 카드 영역 */}
                  <div className={cn(
                    "ml-16 md:ml-0 md:w-1/2 pt-8 relative",
                    index % 2 === 0 ? "md:pr-16 md:text-left" : "md:pl-16 md:text-right"
                  )}>
                    <div className="relative inline-block text-left max-w-full">
                      {/* 연도 텍스트 (데스크탑) - 박스 상단 모서리에 배치 */}
                      <div className={cn(
                        "hidden md:block text-3xl font-bold text-secondary absolute -top-[42px] w-full", // w-full 추가
                        index % 2 === 0 
                          ? "left-0 text-right"  // 짝수: 왼쪽 상단, 텍스트 오른쪽 정렬
                          : "right-0 text-left" // 홀수: 오른쪽 상단, 텍스트 왼쪽 정렬
                      )}>
                        {item.year}
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                        <ul className="space-y-3">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className={cn(
                              "flex items-start gap-2 text-gray-600",
                              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}>
                              <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 오시는 길 섹션 */}
      <section id="location" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">오시는 길</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* 지도 플레이스홀더 */}
            <FadeIn className="bg-gray-200 rounded-3xl h-[400px] flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 font-medium">지도 영역</p>
                <p className="text-sm text-gray-400 mt-2">API 연동 예정</p>
              </div>
            </FadeIn>
            
            {/* 정보 카드 */}
            <div className="grid gap-6">
              <SlideUp delay={0.1} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">주소</h3>
                    <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
                    <p className="text-gray-500 text-sm mt-1">에버파인 빌딩 5층</p>
                  </div>
                </div>
              </SlideUp>
              
              <SlideUp delay={0.2} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">연락처</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>전화: 02-1234-5678</p>
                      <p>팩스: 02-1234-5679</p>
                      <p>이메일: contact@everpine.co.kr</p>
                    </div>
                  </div>
                </div>
              </SlideUp>
              
              <SlideUp delay={0.3} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">운영시간</h3>
                    <p className="text-gray-600">월~금: 09:00 - 18:00</p>
                    <p className="text-gray-400 text-sm mt-1">주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
