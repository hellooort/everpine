'use client';

import { FadeIn, SlideUp } from '@/components/ui/motion';
import { Quote, ArrowRight, Sparkles, Brain, Puzzle, MonitorPlay } from 'lucide-react';
import Link from 'next/link';

export default function Philosophy() {
  return (
    <>
      {/* 철학 섹션 */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'radial-gradient(#2d3e50 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* 여는 따옴표 아이콘 */}
          <FadeIn>
            <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary">
              <Quote className="w-8 h-8 fill-current" />
            </div>
          </FadeIn>

          {/* 철학 문구 */}
          <SlideUp delay={0.2}>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8 tracking-tight">
              기술은 전면에 드러나지 않되,
              <br />
              <span className="text-secondary inline-block mt-2">사용자는 &apos;쉽게&apos;,</span>
              <br />
              <span className="text-secondary inline-block mt-2">보호자는 &apos;신뢰할 수 있게&apos;</span>
              <br />
              <span className="inline-block mt-2">작동하는 것을 목표로 합니다.</span>
            </blockquote>
          </SlideUp>

          {/* 닫는 따옴표 아이콘 (반전) */}
          <FadeIn delay={0.4}>
            <div className="mb-12 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400">
              <Quote className="w-6 h-6 fill-current rotate-180" />
            </div>
          </FadeIn>

          {/* 부가 설명 */}
          <SlideUp delay={0.5}>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              에버파인은 교육적이되 딱딱하지 않고, 전문적이되 과장하지 않으며,
              <br className="hidden md:block" />
              기술 중심이 아닌 <strong className="text-primary font-semibold">사람 중심</strong>의 가치를 추구합니다.
            </p>
          </SlideUp>

          {/* 키워드 태그 */}
          <SlideUp delay={0.6} className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              { text: 'AR·XR 기술', icon: MonitorPlay },
              { text: '인지 자극', icon: Brain },
              { text: '놀이 기반', icon: Puzzle },
              { text: '두뇌 활동', icon: Sparkles },
            ].map((tag, idx) => (
              <span
                key={tag.text}
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-600 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 cursor-default"
              >
                <tag.icon className="w-4 h-4" />
                {tag.text}
              </span>
            ))}
          </SlideUp>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* 장식용 원 */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SlideUp>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              에버파인과 함께 <br className="md:hidden" />
              <span className="text-secondary-light">인지 건강의 새로운 경험</span>을 시작하세요
            </h3>
            <p className="text-gray-300 mb-10 text-lg font-light">
              AR·XR 기반 인터랙티브 퍼즐로 어린이와 어르신 모두에게 즐거운 인지 자극을 선사합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-primary font-bold rounded-xl transition-all duration-300 shadow-lg"
              >
                회사 소개
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-secondary/20"
              >
                제품 둘러보기
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>
    </>
  );
}
