export interface Product {
  id: string;
  name: string;
  category: 'kids' | 'senior';
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  price?: string;
}

export const products: Product[] = [
  // 어린이 퍼즐 (4개)
  {
    id: 'kids-1',
    name: 'AR 동물 탐험 퍼즐',
    category: 'kids',
    shortDescription: 'QR 스캔으로 살아 움직이는 동물들을 만나보세요',
    description: '어린이들이 좋아하는 동물 친구들이 AR로 살아납니다. 퍼즐을 완성한 후 QR 코드를 스캔하면 3D 동물이 나타나 아이들의 호기심과 학습 욕구를 자극합니다. 동물의 특징, 서식지, 먹이 등 교육 콘텐츠도 함께 제공됩니다.',
    features: [
      '25피스 / 50피스 선택 가능',
      'AR 동물 8종 수록',
      '동물 도감 연동',
      '관찰력·집중력 향상',
      '만 4세 이상 권장',
    ],
    image: '/images/products/kids-1.jpg',
    price: '29,000원',
  },
  {
    id: 'kids-2',
    name: 'AR 공룡 세계 퍼즐',
    category: 'kids',
    shortDescription: '공룡이 살아 움직이는 신비로운 체험',
    description: '중생대 공룡들이 AR 기술로 되살아납니다. 티라노사우루스, 트리케라톱스 등 인기 공룡들을 퍼즐로 맞추고 AR로 만나보세요. 공룡의 크기, 특징, 시대 정보를 재미있게 학습할 수 있습니다.',
    features: [
      '35피스 / 70피스 선택 가능',
      'AR 공룡 10종 수록',
      '공룡 백과사전 연동',
      '공간 인지력 향상',
      '만 5세 이상 권장',
    ],
    image: '/images/products/kids-2.jpg',
    price: '32,000원',
  },
  {
    id: 'kids-3',
    name: 'AR 우주 탐사 퍼즐',
    category: 'kids',
    shortDescription: '태양계를 여행하는 우주 탐험',
    description: '태양계 행성들을 퍼즐로 맞추고 AR로 탐험해보세요. 각 행성의 특징, 크기, 거리 등을 시각적으로 학습할 수 있으며, 우주에 대한 호기심을 키워줍니다.',
    features: [
      '48피스 구성',
      'AR 행성 9종 수록',
      '우주 퀴즈 게임 포함',
      '문제해결력 향상',
      '만 6세 이상 권장',
    ],
    image: '/images/products/kids-3.jpg',
    price: '35,000원',
  },
  {
    id: 'kids-4',
    name: 'AR 한글 놀이 퍼즐',
    category: 'kids',
    shortDescription: '놀이로 배우는 한글 첫걸음',
    description: '한글 자음, 모음을 퍼즐로 맞추며 자연스럽게 한글을 익힙니다. AR로 글자가 살아 움직이며 발음을 들려주고, 관련 단어를 보여줍니다. 한글 교육의 새로운 패러다임을 경험하세요.',
    features: [
      '자음 14종 + 모음 10종',
      'AR 한글 애니메이션',
      '발음 학습 기능',
      '단어 카드 연동',
      '만 4세 이상 권장',
    ],
    image: '/images/products/kids-4.jpg',
    price: '38,000원',
  },
  // 어르신 퍼즐 (1개)
  {
    id: 'senior-1',
    name: '기억 자극 시즌 퍼즐 (시즌 1~4)',
    category: 'senior',
    shortDescription: '인지 저하 예방을 위한 두뇌 활동 퍼즐',
    description: '어르신의 인지 건강을 위해 설계된 전문 인지 자극 퍼즐입니다. 기억력, 주의력, 판단력, 반응 인지를 자연스럽게 자극하며, 요양보호사가 함께 진행할 수 있도록 구성되어 있습니다. 시즌별로 다양한 주제와 난이도를 제공하며, AI 안내 영상으로 쉽게 따라할 수 있습니다.',
    features: [
      '시즌 1~4 (분기별 1개 시즌)',
      '기억력·주의력·판단력 자극',
      '요양보호사 가이드 포함',
      'AI 안내 영상 제공',
      '체크리스트 앱 연동',
      '부담 없는 난이도 설계',
    ],
    image: '/images/products/senior-1.jpg',
    price: '시즌별 45,000원',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'kids' | 'senior'): Product[] => {
  return products.filter(product => product.category === category);
};
