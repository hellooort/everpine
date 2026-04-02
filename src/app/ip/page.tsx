'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { ChevronRight } from 'lucide-react';

const ipData = [
  {
    id: 'pingha',
    name: 'PingHa',
    nameKr: '핑하',
    tag: '공감',
    tagColor: 'bg-pink-500',
    description: '바쁜 도시 속 작은 회사에서 살아가는 캐릭터들의 이야기',
    subDescription: '일상 속 고민, 실수, 관계를 통해 공감과 위로를 전하는 힐링 스토리',
    keywords: ['공감', '위로', '일상', '직장 라이프'],
    target: '20~30대 직장인, 감성 콘텐츠 소비층',
    image: '/PINGHA.png',
  },
  {
    id: 'jingeo',
    name: '징어와 친구들',
    nameKr: '징어와 친구들',
    tag: 'B급 감성',
    tagColor: 'bg-cyan-500',
    description: '스타일과 재미를 사랑하는 해산물 캐릭터들의 유쾌한 일상',
    subDescription: '황당하고 유쾌한 B급 코미디 콘텐츠',
    keywords: ['유머', '병맛', 'B급 감성', '트렌디'],
    target: '10~20대, SNS·숏폼 콘텐츠 소비층',
    image: '/JINGO.png',
  },
  {
    id: 'lovedino',
    name: 'LOVEDINO',
    nameKr: '러브디노',
    tag: '성장',
    tagColor: 'bg-emerald-500',
    description: '신비로운 공룡 마을에서 함께 성장하는 공룡 친구들',
    subDescription: '사랑과 협력으로 함께 성장하는 교육 콘텐츠',
    keywords: ['사랑', '협력', '성장', '교육', '모험'],
    target: '유아~초등학생, 부모 및 교육 시장',
    image: '/LOVEDINO.png',
  },
];

export default function IPPage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 - 전체 너비 */}
      <section className="relative">
        {/* 이미지 */}
        <div className="relative w-full md:overflow-hidden">
          <Image
            src="/협회 이미지 go.png"
            alt="에버파인 캐릭터들"
            width={1920}
            height={800}
            className="w-full h-auto object-cover brightness-75 md:brightness-75"
            style={{ marginTop: '0' }}
            priority
          />
          {/* PC에서만 이미지 위치 조절용 - CSS로 처리 */}
          <style jsx>{`
            @media (min-width: 768px) {
              img { margin-top: -35% !important; }
            }
          `}</style>
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* 텍스트 오버레이 - 중앙 배치 */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 pt-16 md:pt-20">
          <FadeIn>
            <p className="text-white/80 text-sm tracking-widest mb-3">CHARACTER IP</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg px-4">
              캐릭터로 만드는<br className="sm:hidden" /> 새로운 콘텐츠 경험
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 drop-shadow-md">
              감성, 유머, 교육을 담은 다양한 캐릭터 IP로<br />
              콘텐츠와 제품, 서비스까지 확장합니다
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IP 카드 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ipData.map((ip) => (
              <StaggerItem key={ip.id}>
                <Link href={`/ip/${ip.id}`} className="group block">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full"
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={ip.image}
                        alt={ip.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-block px-4 py-2 text-sm font-bold text-white rounded-full ${ip.tagColor} shadow-lg`}>
                          {ip.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                          {ip.name}
                        </h3>
                        {ip.name !== ip.nameKr && (
                          <p className="text-white/80 text-sm mb-3">{ip.nameKr}</p>
                        )}
                        <p className="text-white/90 text-sm leading-relaxed mb-4 drop-shadow">
                          {ip.description}
                        </p>
                        <div className="flex items-center">
                          <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors flex items-center gap-1">
                            자세히 보기
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 하단 설명 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideUp>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              캐릭터 IP 사업
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              (주)에버파인은 자체 개발한 캐릭터 IP를 기반으로 다양한 콘텐츠와 제품을 제작합니다.<br />
              각 캐릭터는 고유의 세계관과 스토리를 가지고 있으며, 교육, 엔터테인먼트, 라이선싱 등<br />
              다양한 분야로 확장하고 있습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['콘텐츠 제작', '캐릭터 상품', '라이선싱', '교육 콘텐츠', 'XR 체험'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
