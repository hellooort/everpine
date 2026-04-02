'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { ArrowLeft, Heart, Smile, Sparkles, Users, Target, Hash } from 'lucide-react';

const ipDatabase = {
  pingha: {
    name: 'PingHa',
    nameKr: '핑하',
    tag: '공감',
    tagColor: 'bg-pink-500',
    headerBg: 'bg-gradient-to-br from-pink-600 to-rose-500',
    heroImage: '/PINGHA.png',
    imagePosition: 'center 50%', // 조절: 0%=상단, 50%=중앙, 100%=하단
    story: '핑하는 바쁜 도시 속 작은 회사에서 살아가는 캐릭터들의 이야기를 담고 있습니다. 일상 속에서 겪는 고민, 실수, 관계를 통해 공감과 위로를 전하는 힐링 스토리입니다.',
    target: ['20~30대 직장인', '감성 콘텐츠 소비층', '힐링 콘텐츠 선호 사용자'],
    keywords: ['공감', '위로', '일상', '직장 라이프'],
    characters: [
      { name: '핑하(Pingha) 주임', description: '성실하고 따뜻한 성격으로 팀의 중심이 되는 캐릭터. 작은 배려와 긍정적인 태도로 주변을 변화시킴' },
      { name: '필로(Peelo) 대표', description: '강한 책임감과 추진력을 가진 리더. 조직을 이끄는 중심 역할' },
      { name: '프로포(Froppo) 인턴', description: '실수는 많지만 밝고 긍정적인 에너지의 소유자. 성장형 캐릭터' },
      { name: '나비(Naby) 팀장', description: '차분하고 신뢰감 있는 매니저. 조직의 균형을 잡는 역할' },
    ],
    icon: Heart,
  },
  jingeo: {
    name: '징어와 친구들',
    nameKr: '징어와 친구들',
    tag: 'B급 감성',
    tagColor: 'bg-cyan-500',
    headerBg: 'bg-gradient-to-br from-cyan-600 to-teal-500',
    heroImage: '/JINGO.png',
    imagePosition: 'center 40%', // 조절: 0%=상단, 50%=중앙, 100%=하단
    story: '징어와 친구들은 스타일과 재미를 사랑하는 해산물 캐릭터들이 유쾌하고 황당한 일상을 보내는 B급 코미디 콘텐츠입니다.',
    target: ['10~20대', 'SNS 및 숏폼 콘텐츠 소비층', '밈(Meme) 문화 선호층'],
    keywords: ['유머', '병맛', 'B급 감성', '트렌디'],
    characters: [
      { name: '징어(Jingeo)', description: '스타일을 중요하게 생각하는 장난꾸러기 캐릭터. 항상 재미있는 일을 찾고 즐김' },
      { name: '쭈꾸(Jjukku)', description: '꼼꼼하면서도 독특한 사고를 가진 캐릭터. 반전 매력을 보유' },
      { name: '옥토(Okto)', description: '단순하고 자유로운 성격으로 유쾌한 상황을 만들어내는 캐릭터' },
    ],
    icon: Smile,
  },
  lovedino: {
    name: 'LOVEDINO',
    nameKr: '러브디노',
    tag: '성장',
    tagColor: 'bg-emerald-500',
    headerBg: 'bg-gradient-to-br from-emerald-600 to-green-500',
    heroImage: '/LOVEDINO.png',
    imagePosition: 'center 45%', // 조절: 0%=상단, 50%=중앙, 100%=하단
    story: '외부와 단절된 신비로운 공룡 마을 \'러브디노 빌리지\'에서 다양한 개성을 가진 공룡들이 함께 살아가며 성장하는 이야기입니다.',
    target: ['유아 ~ 초등학생', '부모 및 교육 시장', '키즈 콘텐츠 소비층'],
    keywords: ['사랑', '협력', '성장', '교육', '모험'],
    characters: [
      { name: '티티 (Ti-Ti)', species: '티라노사우루스', description: '호기심이 많고 장난기 넘치는 중심 캐릭터. 새로운 것에 먼저 도전하며 이야기의 시작을 이끕니다.' },
      { name: '롱기 (Longie)', species: '브라키오사우루스', description: '다정하고 든든한 큰형 같은 캐릭터. 친구들을 챙기며 안정감을 주는 역할을 합니다.' },
      { name: '스피디 (Speedy)', species: '갈리미무스', description: '빠르고 똑똑한 판단력을 가진 캐릭터. 문제가 생기면 가장 먼저 해결 방법을 찾아냅니다.' },
      { name: '코코 (Co-Co)', species: '트리케라톱스', description: '책임감이 강하고 친구를 먼저 생각하는 캐릭터. 위기 상황에서 앞장서는 용기를 가지고 있습니다.' },
      { name: '플랫 (Flat)', species: '스피노사우루스', description: '모험과 새로운 경험을 좋아하는 캐릭터. 두려움보다 기대가 앞서는 성격입니다.' },
      { name: '파라 (Para)', species: '파라사우롤로푸스', description: '음악과 감정으로 마음을 표현하는 캐릭터. 친구들의 감정을 섬세하게 이해합니다.' },
      { name: '돈 (Don)', species: '디메트로돈', description: '마을의 기억과 지혜를 가진 캐릭터. 느긋하고 안정적인 분위기를 만듭니다.' },
      { name: '푸티 (Pooty)', species: '프테라노돈', description: '자유롭게 하늘을 날며 소식을 전하는 캐릭터. 밝고 활발한 에너지를 가지고 있습니다.' },
      { name: '핀핀 (PinPin)', species: '스테고사우루스', description: '차분하고 다정한 보호자형 캐릭터. 친구들의 감정을 부드럽게 다독여줍니다.' },
      { name: '벨로 (Velo)', species: '벨로시랩터', description: '빠르고 활발한 행동력의 캐릭터. 생각보다 행동이 먼저인 직선적인 성격입니다.' },
      { name: '알루 (Alu)', species: '오비랩터', description: '섬세한 감각을 가진 예술가 캐릭터. 아름다움과 표현을 중요하게 생각합니다.' },
      { name: '포포 (Po-Po)', species: '딜로포사우루스', description: '감정 표현이 솔직하고 풍부한 캐릭터. 기분에 따라 행동이 달라지는 매력을 가집니다.' },
      { name: '쿵쿵 (KoongKoong)', species: '안킬로사우루스', description: '느긋하고 여유로운 평화주의자 캐릭터. 항상 편안한 분위기를 만들어냅니다.' },
    ],
    icon: Sparkles,
  },
};

export default function IPDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const ip = ipDatabase[id as keyof typeof ipDatabase];
  
  if (!ip) {
    notFound();
  }

  const IconComponent = ip.icon;

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 - 이미지 배경 */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 -top-20">
          <Image
            src={ip.heroImage}
            alt={ip.name}
            fill
            className="object-cover"
            style={{ objectPosition: ip.imagePosition }}
            priority
          />
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 flex flex-col justify-end min-h-[70vh]">
          <FadeIn>
            {/* 뒤로가기 */}
            <Link 
              href="/ip" 
              className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              캐릭터 IP 목록
            </Link>

            <div className="flex flex-col md:flex-row md:items-end gap-8">
              {/* 텍스트 */}
              <div>
                <span className={`inline-block px-4 py-1.5 text-sm font-bold text-white rounded-full ${ip.tagColor} mb-4 shadow-lg`}>
                  {ip.tag}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                  {ip.name}
                </h1>
                {ip.name !== ip.nameKr && (
                  <p className="text-white/80 text-xl drop-shadow">{ip.nameKr}</p>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 스토리 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Hash className="w-5 h-5 text-primary" />
              </span>
              스토리
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {ip.story}
            </p>
          </SlideUp>
        </div>
      </section>

      {/* 타겟 & 키워드 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <SlideUp delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  타겟
                </h3>
                <ul className="space-y-2">
                  {ip.target.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Hash className="w-5 h-5 text-primary" />
                  컨셉 키워드
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ip.keywords.map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* 캐릭터 소개 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </span>
              캐릭터 소개
            </h2>
          </SlideUp>

          <StaggerContainer className={`grid gap-6 ${ip.characters.length > 4 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
            {ip.characters.map((char, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {char.name}
                  </h4>
                  {'species' in char && (
                    <p className="text-sm text-primary font-medium mb-3">
                      {char.species}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {char.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {ip.name} IP에 관심이 있으신가요?
            </h2>
            <p className="text-gray-600 mb-8">
              라이선싱, 협업, 콘텐츠 제작 등 다양한 문의를 환영합니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              문의하기
            </Link>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
