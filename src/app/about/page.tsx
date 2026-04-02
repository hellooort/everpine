'use client';

import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { MapPin, Phone, Clock, Mail, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// ... metadata는 layout이나 page에서 export 해야 하므로 여기서는 컴포넌트만 수정
// 실제 파일에서는 metadata export 구문 유지 필요하지만 여기서는 클라이언트 컴포넌트로 변경되어야 하므로 분리 필요
// 일단 컴포넌트 내부 로직 위주로 수정

// 연혁 데이터
const historyData = [
  { 
    year: '2026', 
    events: [
      'AI 기반 인지활동 분석 및 운영지원 서비스 개발',
      '퍼즐 활동 데이터 수집 및 패턴 분석 데이터 구축',
      '개인 맞춤형 인지 프로그램 추천 시스템 구축',
      '기관용 운영 대시보드 및 관리 시스템 설계 및 적용',
      'XR + AI 융합형 디지털 헬스케어 콘텐츠 사업 확대'
    ] 
  },
  { 
    year: '2025', 
    events: [
      'XR 기반 인지자극 콘텐츠로 사업 영역 확장',
      '\'XR 체험형 치매 예방 솔루션 with 퍼즐\' 개발',
      '공간 인식 기반 XR 퍼즐 및 오프라인 연계 콘텐츠 설계',
      '감정카드, 활동 체크리스트, 데이터 기반 평가 시스템 구축',
      '요양기관 및 복지시설 협업 확대',
      '\'기억퍼즐 365\' 콘텐츠 중국 수출'
    ] 
  },
  { 
    year: '2024', 
    events: [
      '시니어 인지활동 시장 진출',
      '\'기억퍼즐 365\' 프로젝트 기획 및 개발 착수 (CST 기반 인지자극 퍼즐)',
      '요양병원 및 복지기관 대상 시범 운영 및 현장 적용 시작',
      '인지활동 교안 및 평가체계 개발'
    ] 
  },
  { 
    year: '2023', 
    events: [
      'BB 프리미엄 퍼즐 시리즈 개발 및 출시 (공룡, 동물, 바다, 태양계 등)',
      'STEM 기반 콘텐츠 확대',
      '어린이 인지발달 및 두뇌개발 콘텐츠 사업 본격화'
    ] 
  },
  { 
    year: '2021', 
    events: [
      '어린이 교육 콘텐츠 브랜드 확장',
      '핑하(Pingha), 징어와 친구들, 러브디노(Love Dino) 캐릭터 IP 개발',
      'XR 기반 학습 콘텐츠 및 컬러링북, 도감 시리즈 기획 및 제작',
      '체험형 교육 콘텐츠 및 인터랙티브 학습 교구 개발'
    ] 
  },
  { 
    year: '2018', 
    events: [
      '증강현실(AR) 기반 교육 콘텐츠 및 전자책 서비스 개발',
      '국내외 콘텐츠 유통 및 수출 사업 진행 (중국, 동남아 등)',
      'XR 기반 독서 및 체험형 콘텐츠 플랫폼 개발 및 서비스'
    ] 
  },
  { 
    year: '2017', 
    events: [
      '(주)에버파인 설립',
      '디지털 출판 및 교육 콘텐츠 사업 시작',
      'AR/VR 기반 인터랙티브 콘텐츠 연구 착수'
    ] 
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 페이지 헤더 */}
      <section className="bg-primary pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              회사소개
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
              XR 기술로 인지 건강을 혁신하는 (주)에버파인입니다
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
                      안녕하세요, (주)에버파인입니다.
                    </p>
                    <p>
                      (주)에버파인은 XR(확장현실)과 AI(인공지능) 기술을 기반으로
                      어린이부터 어르신까지 전 세대가 즐겁게 참여할 수 있는
                      인지자극 콘텐츠와 솔루션을 개발하는 기업입니다.
                    </p>
                    <p>
                      우리는 단순한 퍼즐이나 학습 도구를 넘어,
                      놀이와 경험을 통해 기억력·집중력·판단력 등 인지 기능을
                      자연스럽게 향상시키는 인터랙티브 콘텐츠를 만들어갑니다.
                    </p>
                    <p>
                      특히, 실제 요양기관과 교육 현장에서 활용 가능한
                      데이터 기반 인지활동 프로그램과 AI 분석 시스템을 통해
                      사용자의 상태를 체계적으로 이해하고,
                      개인 맞춤형 인지 경험을 제공합니다.
                    </p>
                    <p>
                      (주)에버파인은 기술을 위한 기술이 아닌, 사람을 위한 기술을 고민합니다.
                      누구나 쉽게 접근하고, 지속적으로 사용할 수 있는 콘텐츠를 통해
                      인지 건강 관리의 새로운 기준을 만들어가고 있습니다.
                    </p>
                    <p>
                      앞으로도 (주)에버파인은 모든 세대가 더 오래, 더 건강하게 생각하고 기억할 수 있도록
                      지속 가능한 인지 솔루션을 제공하는 기업으로 성장하겠습니다.
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-primary font-bold text-xl">(주)에버파인 대표 전윤용</p>
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
            <p className="text-gray-500">(주)에버파인이 만들어가는 혁신의 발자취입니다</p>
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
                    <p className="text-gray-600">대전광역시 대덕구 한남로 70, 한남대학교</p>
                    <p className="text-gray-500 text-sm mt-1">캠퍼스혁신파크 산학연혁신허브 A동 401호</p>
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
                      <p>전화: 070-8870-1431</p>
                      <p>팩스: 0508-959-2675</p>
                      <p>이메일: wind2015@everpine.kr</p>
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
