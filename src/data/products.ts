export interface Product {
  id: string;
  name: string;
  category: 'study' | 'life';
  brand?: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  comingSoon?: boolean;
}

export const products: Product[] = [
  // ========================================
  // 공부방 - 핑하(Pingha) 시리즈
  // ========================================
  {
    id: 'pingha-alphabet',
    name: '핑하 알파벳 컬러링 북 with AR',
    category: 'study',
    brand: '핑하',
    shortDescription: '색칠하며 배우고, AR로 살아나는 알파벳 학습!',
    description: '핑하 캐릭터와 함께 영어 알파벳을 재미있게 익히는 체험형 컬러링북입니다. 색칠한 그림이 AR로 살아 움직이며, 자연스럽게 알파벳과 발음을 학습할 수 있습니다.',
    features: [
      'AR 알파벳 애니메이션',
      '핑하 캐릭터 수록',
      '색칠 + 학습 동시 진행',
      '발음 학습 기능',
      '만 4세 이상 권장',
    ],
    image: '/images/products/pingha-alphabet.jpg',
  },
  {
    id: 'pingha-body-male',
    name: '핑하 인체도감 (남)',
    category: 'study',
    brand: '핑하',
    shortDescription: '남자 인체 구조를 쉽고 재미있게 이해하는 어린이 학습 도감!',
    description: '그림과 설명으로 몸의 원리를 자연스럽게 배울 수 있습니다. 아이 눈높이에 맞춘 구성으로 신체에 대한 이해를 돕습니다.',
    features: [
      '남아 맞춤 인체 구조 설명',
      '쉬운 그림과 설명',
      '신체 기관별 학습',
      '건강 습관 교육 포함',
      '만 5세 이상 권장',
    ],
    image: '/images/products/pingha-body-male.jpg',
  },
  {
    id: 'pingha-body-female',
    name: '핑하 인체도감 (여)',
    category: 'study',
    brand: '핑하',
    shortDescription: '여자 인체 구조를 친근하게 배우는 어린이 맞춤 도감!',
    description: '아이 눈높이에 맞춘 구성으로 신체 이해를 돕습니다. 여아에게 필요한 신체 지식을 쉽고 친근하게 전달합니다.',
    features: [
      '여아 맞춤 인체 구조 설명',
      '쉬운 그림과 설명',
      '신체 기관별 학습',
      '건강 습관 교육 포함',
      '만 5세 이상 권장',
    ],
    image: '/images/products/pingha-body-female.jpg',
  },
  {
    id: 'pingha-world-map',
    name: '핑하 세계지도',
    category: 'study',
    brand: '핑하',
    shortDescription: '세계 나라와 문화를 한눈에 배우는 학습 지도!',
    description: '핑하 캐릭터와 함께 글로벌 감각을 키워보세요. 각 나라의 위치, 문화, 특징을 재미있게 학습할 수 있습니다.',
    features: [
      '세계 주요 국가 수록',
      '나라별 문화 정보',
      '핑하 캐릭터 일러스트',
      '글로벌 감각 향상',
      '만 5세 이상 권장',
    ],
    image: '/images/products/pingha-world-map.jpg',
  },
  {
    id: 'pingha-korea-map',
    name: '핑하 한국지도',
    category: 'study',
    brand: '핑하',
    shortDescription: '우리나라 지리와 지역 특징을 쉽고 재미있게 배우는 지도!',
    description: '아이들이 자연스럽게 한국을 이해할 수 있도록 구성되었습니다. 각 지역의 특산물, 명소, 특징을 한눈에 볼 수 있습니다.',
    features: [
      '전국 시·도 수록',
      '지역별 특산물·명소',
      '핑하 캐릭터 일러스트',
      '지리 감각 향상',
      '만 5세 이상 권장',
    ],
    image: '/images/products/pingha-korea-map.jpg',
  },

  // ========================================
  // BB 프리미엄 시리즈
  // ========================================
  {
    id: 'bb-dinosaur-poster',
    name: 'BB 공룡 포스터',
    category: 'study',
    brand: 'BB',
    shortDescription: '다양한 공룡을 한눈에!',
    description: '아이들의 호기심을 자극하는 생생한 공룡 학습 포스터입니다. 주요 공룡의 이름, 특징, 시대를 한눈에 파악할 수 있습니다.',
    features: [
      '인기 공룡 총집합',
      '공룡 이름·특징 수록',
      '생생한 일러스트',
      '호기심·탐구심 자극',
      '만 4세 이상 권장',
    ],
    image: '/images/products/bb-dinosaur-poster.jpg',
  },
  {
    id: 'bb-animal-poster',
    name: 'BB 동물 포스터',
    category: 'study',
    brand: 'BB',
    shortDescription: '육지 동물들을 쉽고 재미있게 배우는 학습 포스터!',
    description: '관찰력과 인지력을 함께 키워줍니다. 다양한 육지 동물의 이름과 특징을 한눈에 학습할 수 있습니다.',
    features: [
      '육지 동물 총집합',
      '동물 이름·특징 수록',
      '생생한 일러스트',
      '관찰력·인지력 향상',
      '만 4세 이상 권장',
    ],
    image: '/images/products/bb-animal-poster.jpg',
  },
  {
    id: 'bb-ocean-poster',
    name: 'BB 해양 포스터',
    category: 'study',
    brand: 'BB',
    shortDescription: '바다 속 생물을 한눈에 배우는 해양 학습 포스터!',
    description: '아이들의 상상력과 탐구심을 자극합니다. 다양한 해양 생물의 이름과 특징을 재미있게 학습할 수 있습니다.',
    features: [
      '해양 생물 총집합',
      '생물 이름·특징 수록',
      '생생한 일러스트',
      '상상력·탐구심 자극',
      '만 4세 이상 권장',
    ],
    image: '/images/products/bb-ocean-poster.jpg',
  },
  {
    id: 'bb-solar-system-poster',
    name: 'BB 태양계 포스터',
    category: 'study',
    brand: 'BB',
    shortDescription: '우주와 행성을 쉽게 이해하는 태양계 포스터!',
    description: '아이들의 과학적 사고를 키워주는 콘텐츠입니다. 태양계 행성의 순서, 크기, 특징을 한눈에 학습할 수 있습니다.',
    features: [
      '태양계 행성 수록',
      '행성별 특징 설명',
      'STEM 기반 콘텐츠',
      '과학적 사고력 향상',
      '만 5세 이상 권장',
    ],
    image: '/images/products/bb-solar-system-poster.jpg',
  },

  // ========================================
  // 따비 시리즈
  // ========================================
  {
    id: 'ddabi-number',
    name: '따비와 쓱쓱 따라쓰기 숫자',
    category: 'study',
    brand: '따비',
    shortDescription: '재미있게 쓰면서 배우는 숫자 학습!',
    description: '따비 캐릭터와 함께 기초 수 개념을 익혀보세요. 반복 쓰기를 통해 숫자를 자연스럽게 익힐 수 있습니다.',
    features: [
      '숫자 따라쓰기',
      '따비 캐릭터 수록',
      '기초 수 개념 학습',
      '소근육 발달',
      '만 4세 이상 권장',
    ],
    image: '/images/products/ddabi-number.jpg',
  },
  {
    id: 'ddabi-hangul',
    name: '따비와 쓱쓱 따라쓰기 한글',
    category: 'study',
    brand: '따비',
    shortDescription: '한글을 쉽고 즐겁게 배우는 따라쓰기 포스터!',
    description: '기초 글자 쓰기와 읽기를 동시에 익힐 수 있습니다. 자음, 모음부터 기초 단어까지 체계적으로 학습합니다.',
    features: [
      '한글 따라쓰기',
      '자음·모음 학습',
      '기초 단어 수록',
      '쓰기·읽기 동시 학습',
      '만 4세 이상 권장',
    ],
    image: '/images/products/ddabi-hangul.jpg',
  },
  {
    id: 'ddabi-abc',
    name: '따비와 쓱쓱 따라쓰기 ABC',
    category: 'study',
    brand: '따비',
    shortDescription: '영어 알파벳을 자연스럽게 익히는 따라쓰기 학습!',
    description: '반복 쓰기를 통해 기초 영어를 탄탄하게 만들어줍니다. 대문자, 소문자를 함께 학습할 수 있습니다.',
    features: [
      '알파벳 따라쓰기',
      '대문자·소문자 학습',
      '기초 영어 단어 수록',
      '쓰기 습관 형성',
      '만 4세 이상 권장',
    ],
    image: '/images/products/ddabi-abc.jpg',
  },
  {
    id: 'ddabi-dinosaur-trace',
    name: '따비와 꾹꾹 따라가기 공룡',
    category: 'study',
    brand: '따비',
    shortDescription: '선 긋기 활동으로 집중력과 소근육을 키우는 학습 놀이!',
    description: '공룡 테마로 더욱 재미있게 따라가기 활동을 즐길 수 있습니다. 선 긋기를 통해 필기 준비 능력을 키워줍니다.',
    features: [
      '선 긋기 활동',
      '공룡 테마 구성',
      '집중력 향상',
      '소근육 발달',
      '만 3세 이상 권장',
    ],
    image: '/images/products/ddabi-dinosaur-trace.jpg',
  },

  // ========================================
  // 에버파인 라이프 - 시니어 인지케어
  // ========================================
  {
    id: 'memory-puzzle-s1',
    name: '기억퍼즐 365 시즌 1',
    category: 'life',
    brand: '기억퍼즐',
    shortDescription: '1분기 인지자극 프로그램 - 봄의 기억',
    description: '어르신의 인지 건강을 위해 설계된 전문 인지 자극 퍼즐입니다. 봄을 주제로 기억력, 주의력, 판단력, 반응 인지를 자연스럽게 자극하며, 요양보호사가 함께 진행할 수 있도록 구성되어 있습니다.',
    features: [
      '1분기 (봄) 테마',
      'CST 기반 인지자극 프로그램',
      '기억력·주의력·판단력 자극',
      '요양보호사 가이드 포함',
      'AI 안내 영상 제공',
      '체크리스트 앱 연동',
    ],
    image: '/images/products/memory-puzzle-s1.jpg',
  },
  {
    id: 'memory-puzzle-s2',
    name: '기억퍼즐 365 시즌 2',
    category: 'life',
    brand: '기억퍼즐',
    shortDescription: '2분기 인지자극 프로그램 - 여름의 추억',
    description: '어르신의 인지 건강을 위해 설계된 전문 인지 자극 퍼즐입니다. 여름을 주제로 기억력, 주의력, 판단력, 반응 인지를 자연스럽게 자극하며, 요양보호사가 함께 진행할 수 있도록 구성되어 있습니다.',
    features: [
      '2분기 (여름) 테마',
      'CST 기반 인지자극 프로그램',
      '기억력·주의력·판단력 자극',
      '요양보호사 가이드 포함',
      'AI 안내 영상 제공',
      '체크리스트 앱 연동',
    ],
    image: '/images/products/memory-puzzle-s2.jpg',
  },
  {
    id: 'memory-puzzle-s3',
    name: '기억퍼즐 365 시즌 3',
    category: 'life',
    brand: '기억퍼즐',
    shortDescription: '3분기 인지자극 프로그램 - 가을의 정취',
    description: '어르신의 인지 건강을 위해 설계된 전문 인지 자극 퍼즐입니다. 가을을 주제로 기억력, 주의력, 판단력, 반응 인지를 자연스럽게 자극하며, 요양보호사가 함께 진행할 수 있도록 구성되어 있습니다.',
    features: [
      '3분기 (가을) 테마',
      'CST 기반 인지자극 프로그램',
      '기억력·주의력·판단력 자극',
      '요양보호사 가이드 포함',
      'AI 안내 영상 제공',
      '체크리스트 앱 연동',
    ],
    image: '/images/products/memory-puzzle-s3.jpg',
  },
  {
    id: 'memory-puzzle-s4',
    name: '기억퍼즐 365 시즌 4',
    category: 'life',
    brand: '기억퍼즐',
    shortDescription: '4분기 인지자극 프로그램 - 겨울의 온기',
    description: '어르신의 인지 건강을 위해 설계된 전문 인지 자극 퍼즐입니다. 겨울을 주제로 기억력, 주의력, 판단력, 반응 인지를 자연스럽게 자극하며, 요양보호사가 함께 진행할 수 있도록 구성되어 있습니다.',
    features: [
      '4분기 (겨울) 테마',
      'CST 기반 인지자극 프로그램',
      '기억력·주의력·판단력 자극',
      '요양보호사 가이드 포함',
      'AI 안내 영상 제공',
      '체크리스트 앱 연동',
    ],
    image: '/images/products/memory-puzzle-s4.jpg',
    comingSoon: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'study' | 'life'): Product[] => {
  return products.filter(product => product.category === category);
};
