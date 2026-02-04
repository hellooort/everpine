import Link from 'next/link';
import { Product } from '@/data/products';
import { ArrowRight, Puzzle, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        {/* 이미지 영역 */}
        <div className="relative h-56 bg-gray-50 overflow-hidden group-hover:bg-gray-100 transition-colors">
          {/* 임시 이미지 플레이스홀더 */}
          <div className={cn(
            "w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105",
            product.category === 'kids' ? "bg-blue-50/50" : "bg-purple-50/50"
          )}>
            <div className="text-center transform transition-transform duration-300 group-hover:scale-110">
              {product.category === 'kids' ? (
                <Puzzle className="w-16 h-16 mx-auto text-blue-300/80 mb-2" />
              ) : (
                <Brain className="w-16 h-16 mx-auto text-purple-300/80 mb-2" />
              )}
            </div>
          </div>
          
          {/* 카테고리 뱃지 */}
          <div className="absolute top-4 left-4">
            <span
              className={cn(
                "px-3 py-1 text-xs font-bold rounded-full shadow-sm backdrop-blur-sm",
                product.category === 'kids'
                  ? "bg-white/90 text-blue-600"
                  : "bg-white/90 text-purple-600"
              )}
            >
              {product.category === 'kids' ? '어린이용' : '어르신용'}
            </span>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            {/* 가격 */}
            <span className="font-semibold text-gray-900">
              {product.price || '가격 문의'}
            </span>
            
            {/* 더보기 링크 */}
            <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-secondary transition-colors">
              <span className="mr-1">자세히</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
