'use client';

// 파트너사 목록 (샘플 데이터)
const partners = [
  { name: '서울시교육청', logo: '/images/partners/partner1.svg' },
  { name: '보건복지부', logo: '/images/partners/partner2.svg' },
  { name: '대한치매학회', logo: '/images/partners/partner3.svg' },
  { name: '아동발달연구소', logo: '/images/partners/partner4.svg' },
  { name: '스마트러닝협회', logo: '/images/partners/partner5.svg' },
  { name: '요양시설협회', logo: '/images/partners/partner6.svg' },
  { name: '한국AR협회', logo: '/images/partners/partner7.svg' },
  { name: 'XR콘텐츠협회', logo: '/images/partners/partner8.svg' },
];

export default function PartnersMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
          함께하는 파트너
        </h2>
        <p className="text-gray-600 text-center">
          에버파인과 함께 인지 건강을 위해 노력하는 파트너사입니다
        </p>
      </div>

      {/* 무한 스크롤 컨테이너 */}
      <div className="relative">
        <div className="flex animate-marquee">
          {/* 첫 번째 세트 */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex flex-col items-center justify-center"
            >
              <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center p-4 hover:bg-gray-200 transition-colors">
                {/* 로고 이미지가 없을 경우 텍스트로 표시 */}
                <span className="text-sm font-medium text-gray-600 text-center">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
          {/* 두 번째 세트 (무한 스크롤을 위한 복제) */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex flex-col items-center justify-center"
            >
              <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center p-4 hover:bg-gray-200 transition-colors">
                <span className="text-sm font-medium text-gray-600 text-center">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
