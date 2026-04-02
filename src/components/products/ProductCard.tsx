import Link from 'next/link';
import { Product } from '@/data/products';
import { ArrowRight, Puzzle, Brain, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const CardWrapper = product.comingSoon ? 'div' : Link;
  const cardProps = product.comingSoon 
    ? { className: "group block cursor-default" }
    : { href: `/products/${product.id}`, className: "group block" };

  return (
    <CardWrapper {...cardProps as any}>
      <div className={cn(
        "relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 h-full flex flex-col",
        !product.comingSoon && "hover:shadow-xl hover:-translate-y-1"
      )}>
        {/* 준비중 오버레이 */}
        {product.comingSoon && (
          <div className="absolute inset-0 z-30 bg-gray-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center">
            <Clock className="w-12 h-12 text-white mb-3" />
            <span className="text-white text-xl font-bold">준비중</span>
            <span className="text-white/70 text-sm mt-1">Coming Soon</span>
          </div>
        )}

        {/* 이미지 영역 */}
        <div className="relative h-56 bg-gray-50 overflow-hidden group-hover:bg-gray-100 transition-colors">
          {/* 임시 이미지 플레이스홀더 */}
          <div className={cn(
            "w-full h-full flex items-center justify-center transition-transform duration-500",
            !product.comingSoon && "group-hover:scale-105",
            product.category === 'study' ? "bg-green-50/50" : "bg-purple-50/50"
          )}>
            <div className={cn(
              "text-center transform transition-transform duration-300",
              !product.comingSoon && "group-hover:scale-110"
            )}>
              {product.category === 'study' ? (
                <Puzzle className="w-16 h-16 mx-auto text-green-300/80 mb-2" />
              ) : (
                <Brain className="w-16 h-16 mx-auto text-purple-300/80 mb-2" />
              )}
            </div>
          </div>
          
          {/* 카테고리 뱃지 */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={cn(
                "px-3 py-1 text-xs font-bold rounded-full shadow-sm backdrop-blur-sm",
                product.category === 'study'
                  ? "bg-white/90 text-green-600"
                  : "bg-white/90 text-purple-600"
              )}
            >
              {product.category === 'study' ? 'Kids' : 'Senior'}
            </span>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className={cn(
            "text-lg font-bold text-gray-900 mb-2 transition-colors line-clamp-1",
            !product.comingSoon && "group-hover:text-primary"
          )}>
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center justify-end pt-4 border-t border-gray-100 mt-auto">
            {/* 더보기 링크 */}
            <div className={cn(
              "flex items-center text-sm font-medium text-gray-400 transition-colors",
              !product.comingSoon && "group-hover:text-accent"
            )}>
              <span className="mr-1">{product.comingSoon ? '준비중' : '자세히'}</span>
              {!product.comingSoon && (
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
