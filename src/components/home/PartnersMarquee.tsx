'use client';

import Image from 'next/image';

// 파트너사 목록
const partners = [
  { name: '서울시교육청', logo: '/mainlogo/서울시교육청.png' },
  { name: '보건복지부', logo: '/mainlogo/보건복지부.png' },
  { name: '대한치매학회', logo: '/mainlogo/대한치매학회.png' },
  { name: '아동발달연구소', logo: '/mainlogo/아동발달연구소.png' },
  { name: '스마트러닝협회', logo: '/mainlogo/스마트러닝협회.png' },
  { name: '요양시설협회', logo: '/mainlogo/요양시설협회.png' },
  { name: '한국XR협회', logo: '' },  // 로고 없음
  { name: 'XR콘텐츠협회', logo: '' },  // 로고 없음
];

export default function PartnersMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
          함께하는 파트너
        </h2>
        <p className="text-gray-600 text-center">
          (주)에버파인과 함께 인지 건강을 위해 노력하는 파트너사입니다
        </p>
      </div>

      {/* 무한 스크롤 컨테이너 */}
      <div className="relative">
        <div className="flex animate-marquee">
          {/* 첫 번째 세트 */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-10 flex flex-col items-center justify-center"
            >
              {partner.logo ? (
                <div className="w-60 h-32 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={120}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-60 h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium text-gray-500 text-center">
                    {partner.name}
                  </span>
                </div>
              )}
            </div>
          ))}
          {/* 두 번째 세트 (무한 스크롤을 위한 복제) */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-10 flex flex-col items-center justify-center"
            >
              {partner.logo ? (
                <div className="w-60 h-32 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={120}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-60 h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium text-gray-500 text-center">
                    {partner.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
