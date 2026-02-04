import HeroSection from "@/components/home/HeroSection";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import Philosophy from "@/components/home/Philosophy";

export default function Home() {
  return (
    <div className="-mt-20">
      {/* 히어로 섹션 - AR 영상 배경 + 문구 */}
      <HeroSection />
      
      {/* 파트너사 무한 스크롤 */}
      <PartnersMarquee />
      
      {/* 철학 한 마디 */}
      <Philosophy />
    </div>
  );
}
