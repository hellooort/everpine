import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductById } from '@/data/products';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    return {
      title: '제품을 찾을 수 없습니다 | 에버파인',
    };
  }

  return {
    title: `${product.name} | 에버파인`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 브레드크럼 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              홈
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-primary">
              제품소개
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* 제품 상세 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* 이미지 영역 */}
              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <svg
                    className="w-32 h-32 mx-auto text-secondary/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                  <p className="mt-4 text-gray-500">제품 이미지</p>
                </div>
              </div>

              {/* 제품 정보 */}
              <div className="p-8 lg:p-12">
                {/* 카테고리 뱃지 */}
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${
                    product.category === 'kids'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {product.category === 'kids' ? '어린이용' : '어르신용'}
                </span>

                {/* 제품명 */}
                <h1 className="text-3xl font-bold text-primary mb-4">
                  {product.name}
                </h1>

                {/* 간단 설명 */}
                <p className="text-lg text-gray-600 mb-6">
                  {product.shortDescription}
                </p>

                {/* 가격 */}
                {product.price && (
                  <p className="text-2xl font-bold text-secondary mb-8">
                    {product.price}
                  </p>
                )}

                {/* 구매 버튼 */}
                <div className="flex gap-4 mb-8">
                  <a
                    href="https://smartstore.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-lg text-center transition-colors"
                  >
                    구매하기
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg text-center transition-colors"
                  >
                    문의하기
                  </Link>
                </div>

                {/* 특징 목록 */}
                <div className="border-t pt-8">
                  <h3 className="font-semibold text-primary mb-4">제품 특징</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상세 설명 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6">제품 상세 설명</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            {/* 카테고리별 추가 정보 */}
            {product.category === 'kids' && (
              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-primary mb-4">
                  학습 효과
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {['관찰력', '문제해결력', '공간 인지', '집중력'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-white rounded-lg p-4 text-center shadow-sm"
                    >
                      <span className="text-primary font-medium">{skill}</span>
                      <span className="block text-sm text-gray-500 mt-1">향상</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.category === 'senior' && (
              <div className="mt-12 p-6 bg-purple-50 rounded-xl">
                <h3 className="font-semibold text-primary mb-4">
                  인지 자극 영역
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {['기억력', '주의력', '판단력', '반응 인지'].map((area) => (
                    <div
                      key={area}
                      className="bg-white rounded-lg p-4 text-center shadow-sm"
                    >
                      <span className="text-primary font-medium">{area}</span>
                      <span className="block text-sm text-gray-500 mt-1">자극</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 목록으로 돌아가기 */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            제품 목록으로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}
