'use client';

import { SlideUp } from '@/components/ui/motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  // YouTube 영상 ID 추출
  const youtubeVideoId = 'UbYaxhgNIac';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* YouTube 비디오 배경 */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* YouTube iframe - 배경용으로 확대 */}
          <iframe
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* 오버레이 - 그라디언트 대신 단색 + 블러 처리로 모던함 강조 */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 pt-20">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* 메인 타이틀 */}
          <SlideUp delay={0.2} className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              놀이로 <span className="text-secondary-light">기억</span>을 깨우다
              <br />
              <span className="text-white">AR로 경험을 확장하다</span>
            </h1>
          </SlideUp>
          
          {/* 서브 타이틀 */}
          <SlideUp delay={0.4}>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-2xl mx-auto">
              AR·XR 기술 기반의 인터랙티브 퍼즐로
              <br className="hidden md:block" />
              어린이와 어르신에게 잊지 못할 몰입 경험을 선사합니다
            </p>
          </SlideUp>

          {/* CTA 버튼 */}
          <SlideUp delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/products"
              className="group relative px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-secondary/30 flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">제품 둘러보기</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center"
            >
              회사 소개
            </Link>
          </SlideUp>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </div>
    </section>
  );
}
