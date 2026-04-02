# 개인 개발 스타일 가이드

> 모든 프로젝트에서 일관된 디자인과 코드 스타일을 유지하기 위한 종합 가이드

---

## 목차

1. [디자인 철학](#디자인-철학)
2. [색상 시스템](#색상-시스템)
3. [타이포그래피](#타이포그래피)
4. [카드 디자인](#카드-디자인)
5. [모달 디자인](#모달-디자인)
6. [버튼 스타일](#버튼-스타일)
7. [폼 요소](#폼-요소)
8. [레이아웃 패턴](#레이아웃-패턴)
9. [애니메이션 패턴](#애니메이션-패턴)
10. [반응형 디자인](#반응형-디자인)
11. [아이콘 사용](#아이콘-사용)
12. [코드 가독성](#코드-가독성)
13. [예측 가능성](#예측-가능성)
14. [결합도 관리](#결합도-관리)
15. [프로젝트 구조](#프로젝트-구조)
16. [체크리스트](#체크리스트)

---

## 디자인 철학

### 핵심 원칙

1. **모던 미니멀리즘**: 불필요한 장식 제거, 콘텐츠 중심
2. **부드러운 곡선**: 딱딱한 각진 모서리 대신 rounded 사용
3. **미세한 인터랙션**: hover 시 자연스러운 움직임 (translate, scale)
4. **글래스모피즘**: backdrop-blur와 투명도 조합 (선택적)
5. **일관된 여백**: 8의 배수 기반 spacing (Tailwind 기본)

### 키워드

- 신뢰감 (Primary 컬러)
- 친근함 (부드러운 곡선)
- 세련됨 (미세한 그림자, blur 효과)
- 몰입감 (자연스러운 애니메이션)

---

## 색상 시스템

### 주요 브랜드 컬러

| 용도 | 컬러 | Tailwind | 설명 |
|------|------|----------|------|
| Primary | Blue | `bg-blue-600`, `text-blue-600` | 주 버튼, 강조, 액센트 |
| Primary Hover | Blue Dark | `hover:bg-blue-700` | 호버 상태 |
| Primary Light | Blue Light | `bg-blue-50`, `bg-blue-100` | 강조 배경, 정보 박스 |
| Border Accent | Blue Border | `border-blue-200` | 카드 테두리 |

### 텍스트 컬러

| 용도 | Tailwind | 설명 |
|------|----------|------|
| 제목/헤더 | `text-slate-800`, `text-gray-900` | 주요 텍스트 |
| 본문 | `text-slate-700`, `text-gray-700` | 일반 텍스트 |
| 보조/설명 | `text-slate-500`, `text-gray-500` | 부가 설명 |
| 필수 표시 | `text-red-500` | 필수 입력 필드 (*) |

### 배경 컬러

| 용도 | Tailwind | 설명 |
|------|----------|------|
| 기본 배경 | `bg-white` | 카드, 모달, 컨텐츠 |
| 페이지 배경 | `bg-gray-50`, `bg-slate-50` | 전체 페이지 |
| 강조 배경 | `bg-blue-50`, `bg-blue-100` | 정보 박스, 날짜 영역 |

### 그라디언트 패턴

```tsx
// 이미지 폴백 그라디언트
<div className="bg-gradient-to-br from-blue-500 to-green-400" />

// 히어로 오버레이 (선택적)
<div className="bg-primary/40 backdrop-blur-[2px]" />
<div className="bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
```

---

## 타이포그래피

### 폰트 패밀리

```css
font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, 
  system-ui, 'Noto Sans KR', sans-serif;
```

### 크기 스케일

| 용도 | Tailwind | 설명 |
|------|----------|------|
| 모달 제목 | `text-2xl` | 대형 제목 |
| 카드 제목 | `text-lg` | 카드 내 제목 |
| 본문 | `text-base` | 기본 본문 |
| 라벨/설명 | `text-sm` | 폼 라벨, 부가 설명 |

### 굵기

| 용도 | Tailwind | 설명 |
|------|----------|------|
| 제목 | `font-bold` | 700 |
| 강조 | `font-semibold` | 600 |
| 라벨 | `font-medium` | 500 |
| 본문 | `font-normal` | 400 |

---

## 카드 디자인

### 기본 구조

```tsx
<div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200">
  {/* 콘텐츠 */}
</div>
```

### 핵심 특징

- **테두리**: `border-2 border-blue-200` - 두꺼운 파란색 테두리
- **모서리**: `rounded-2xl` - 부드러운 둥근 모서리
- **그림자**: `shadow-lg hover:shadow-xl` - 호버 시 그림자 강화
- **전환**: `transition-all duration-200` - 부드러운 애니메이션

### 이미지 영역

```tsx
<div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-400">
  <img className="w-full h-full object-cover" />
</div>
```

### 텍스트 영역

```tsx
{/* 제목 */}
<div className="px-4 py-3 border-b border-gray-100">
  <h3 className="font-bold text-lg text-gray-900">{title}</h3>
</div>

{/* 콘텐츠 */}
<div className="px-4 py-3 space-y-2.5">
  {/* 정보 항목들 */}
</div>
```

### 정보 박스

```tsx
<div className="bg-blue-50 rounded-lg px-3 py-2">
  <div className="flex items-center gap-2 text-sm text-gray-700">
    <Icon className="h-4 w-4 text-blue-600" />
    <span>{text}</span>
  </div>
</div>
```

### 액션 영역

```tsx
<div className="px-4 pb-4 flex gap-2">
  <div className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg font-semibold text-sm">
    {action}
  </div>
</div>
```

### 완전한 카드 예시

```tsx
<div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200">
  {/* Edit Button */}
  <Button
    size="icon"
    variant="ghost"
    className="absolute top-2 right-2 z-20 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 hover:bg-white shadow-md rounded-full"
  >
    <Edit className="w-4 h-4 text-gray-600" />
  </Button>

  {/* Image */}
  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-400">
    {image}
  </div>

  {/* Title */}
  <div className="px-4 py-3 border-b border-gray-100">
    <h3 className="font-bold text-lg text-gray-900">{title}</h3>
  </div>

  {/* Content */}
  <div className="px-4 py-3 space-y-2.5">
    {items}
  </div>

  {/* Actions */}
  <div className="px-4 pb-4 flex gap-2">
    <div className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg font-semibold text-sm">
      {action}
    </div>
  </div>
</div>
```

---

## 모달 디자인

### 기본 구조 (Fixed Header/Footer + Scrollable Content)

```tsx
<Dialog open={open} onOpenChange={onClose}>
  <DialogContent className="w-[95vw] !max-w-[1024px] h-[90vh] bg-white flex flex-col p-0">
    {/* Fixed Header */}
    <DialogHeader className="border-b pb-4 px-6 pt-6 flex-shrink-0">
      <DialogTitle className="text-2xl font-semibold text-slate-800">
        {title}
      </DialogTitle>
      <DialogDescription className="text-slate-500">
        {description} <span className="text-red-500">*</span>
      </DialogDescription>
    </DialogHeader>

    {/* Scrollable Content */}
    <div 
      className="flex-1 overflow-y-auto px-6 py-4 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {content}
    </div>

    {/* Fixed Footer */}
    <DialogFooter className="border-t pt-4 px-6 pb-6 flex-shrink-0 bg-white">
      <Button variant="outline" onClick={onClose}>취소</Button>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">등록</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### 스크롤바 숨김 CSS

```css
.scrollbar-hide::-webkit-scrollbar { 
  display: none; 
}
```

### 모달 크기

- **너비**: `w-[95vw] !max-w-[1024px]`
- **높이**: `h-[90vh]`

---

## 버튼 스타일

### Primary 버튼 (등록/저장)

```tsx
<Button className="bg-blue-600 hover:bg-blue-700 text-white">
  {text}
</Button>
```

### Secondary 버튼 (취소)

```tsx
<Button variant="outline">
  {text}
</Button>
```

### 아이콘 버튼 (수정/삭제)

```tsx
<Button
  size="icon"
  variant="ghost"
  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 hover:bg-white shadow-md rounded-full"
>
  <Edit className="w-4 h-4 text-gray-600" />
</Button>
```

### 필터 버튼

```tsx
// 활성 상태
<Button className="border hover:scale-105 shadow-sm hover:shadow-md transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white">
  {text}
</Button>

// 비활성 상태
<Button variant="outline" className="hover:bg-blue-50">
  {text}
</Button>
```

### Pill 버튼 (CTA)

```tsx
<button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-600/30 flex items-center gap-2">
  <span>{text}</span>
  <ArrowRight className="w-5 h-5" />
</button>
```

---

## 폼 요소

### 라벨 + 입력 레이아웃

```tsx
<div className="flex items-start gap-4">
  <Label className="w-32 pt-3 text-sm font-medium text-slate-700 text-right flex-shrink-0">
    라벨명 <span className="text-red-500">*</span>
  </Label>
  <div className="flex-1">
    <Input />
  </div>
</div>
```

### 입력 필드 스타일

```tsx
<Input className="flex-1 h-11 bg-white border-slate-200 focus:border-blue-400 focus:ring-blue-400" />
```

### Textarea

```tsx
<Textarea className="flex-1 min-h-[120px] bg-white border-slate-200 focus:border-blue-400 focus:ring-blue-400 resize-none" />
```

### Select

```tsx
<Select className="h-11 bg-white border-slate-200 focus:border-blue-400">
  <SelectTrigger>
    <SelectValue placeholder="선택해주세요" />
  </SelectTrigger>
  <SelectContent>
    {options}
  </SelectContent>
</Select>
```

---

## 레이아웃 패턴

### 그리드 레이아웃 (카드)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {cards}
</div>
```

### Flex 정렬 (라벨 + 입력)

```tsx
<div className="flex items-start gap-4">
  <Label className="w-32 text-right flex-shrink-0" />
  <div className="flex-1">{input}</div>
</div>
```

### 스페이싱 규칙

| 용도 | Tailwind | 값 |
|------|----------|-----|
| 섹션 간격 | `space-y-6` | 24px |
| 항목 간격 | `space-y-2.5`, `gap-2.5` | 10px |
| 카드 패딩 | `px-4 py-3` | 16px / 12px |
| 모달 패딩 | `px-6 py-4` | 24px / 16px |

---

## 애니메이션 패턴

### 원칙

1. **viewport 진입 시 트리거** (`whileInView`) - Framer Motion
2. **한 번만 실행** (`viewport: { once: true }`)
3. **자연스러운 이징** (`ease: 'easeOut'`)
4. **짧은 duration** (200ms ~ 300ms)

### 기본 트랜지션

```tsx
className="transition-all duration-200"
```

### 호버 효과

```tsx
// 그림자 강화
className="hover:shadow-xl"

// 스케일 업
className="hover:scale-105"

// 위로 이동
className="hover:-translate-y-0.5"

// 배경 변화
className="hover:bg-blue-700"

// 불투명도 (그룹)
className="opacity-0 group-hover:opacity-100 transition-opacity"
```

### 그룹 호버

```tsx
<div className="group">
  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
    {/* 호버 시 나타남 */}
  </div>
</div>
```

### Framer Motion 컴포넌트

```tsx
// 페이드인
<FadeIn delay={0.2}>
  <Content />
</FadeIn>

// 슬라이드업
<SlideUp delay={0.4}>
  <Content />
</SlideUp>

// 순차적 등장
<StaggerContainer delay={0.2}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card />
    </StaggerItem>
  ))}
</StaggerContainer>
```

---

## 반응형 디자인

### 브레이크포인트

| 이름 | Tailwind | 용도 |
|------|----------|------|
| 모바일 | 기본 | 1 column |
| 태블릿 | `md:` | 2 columns |
| 데스크톱 | `lg:` | 3-4 columns |

### 반응형 그리드 예시

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {cards}
</div>
```

### 반응형 텍스트

```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  {title}
</h1>
```

---

## 아이콘 사용

### 크기

| 용도 | Tailwind |
|------|----------|
| 기본 | `h-4 w-4` |
| 중간 | `h-5 w-5` |
| 큰 | `h-6 w-6` |

### 색상

```tsx
// Primary
<Icon className="h-4 w-4 text-blue-600" />

// Neutral
<Icon className="h-4 w-4 text-gray-600" />

// White (on dark bg)
<Icon className="h-4 w-4 text-white" />
```

### 텍스트와 함께

```tsx
<div className="flex items-center gap-2">
  <Icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
  <span>{text}</span>
</div>
```

---

## 코드 가독성

### 매직 넘버 네이밍

```typescript
// Bad
await delay(300);

// Good
const ANIMATION_DELAY_MS = 300;
await delay(ANIMATION_DELAY_MS);
```

### 복잡한 조건 네이밍

```typescript
// Bad
const matched = products.filter(
  (p) => p.categories.some((c) => c.id === targetId) && p.price >= min,
);

// Good
const matched = products.filter((product) => {
  const isSameCategory = product.categories.some((c) => c.id === targetId);
  const isPriceInRange = product.price >= min;
  return isSameCategory && isPriceInRange;
});
```

### 복잡한 삼항 연산자 단순화

```typescript
// Bad
const status = A && B ? "BOTH" : A ? "A" : B ? "B" : "NONE";

// Good
const status = (() => {
  if (A && B) return "BOTH";
  if (A) return "A";
  if (B) return "B";
  return "NONE";
})();
```

### className 조건부 조합

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  variant === "primary" ? "primary-classes" : "secondary-classes"
)} />
```

---

## 예측 가능성

### 일관된 반환 타입

```typescript
// Bad
function useUser() {
  const query = useQuery({ queryKey: ["user"], queryFn: fetchUser });
  return query.data; // undefined 가능
}

// Good
function useUser(): UseQueryResult<UserType, Error> {
  return useQuery({ queryKey: ["user"], queryFn: fetchUser });
}
```

### Discriminated Union으로 검증 결과

```typescript
type ValidationResult = { ok: true } | { ok: false; reason: string };

function checkIsNameValid(name: string): ValidationResult {
  if (name.length === 0) return { ok: false, reason: "Name cannot be empty." };
  return { ok: true };
}
```

### 숨겨진 사이드 이펙트 제거

```typescript
// Bad
async function fetchBalance(): Promise<number> {
  const balance = await http.get<number>("...");
  logging.log("balance_fetched"); // 숨겨진 사이드 이펙트
  return balance;
}

// Good
async function fetchBalance(): Promise<number> {
  return await http.get<number>("...");
}
```

---

## 결합도 관리

### Props Drilling 대신 Composition

```typescript
// Bad
function Parent({ user, settings, handlers }) {
  return <Child user={user} settings={settings} handlers={handlers} />;
}

// Good
function Parent() {
  const user = useUser();
  return (
    <div>
      <UserSection user={user} />
      <SettingsSection />
    </div>
  );
}
```

### 상태 관리 스코프 분리

```typescript
// Bad - 하나의 큰 스토어
const useBigStore = create(() => ({
  user: null,
  posts: [],
  notifications: [],
}));

// Good - 기능별 분리
const useUserStore = create(() => ({ user: null }));
const usePostsStore = create(() => ({ posts: [] }));
```

---

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── (routes)/          # 페이지별 폴더
│   ├── globals.css        # 전역 스타일, CSS 변수
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
│
├── components/
│   ├── ui/                # 재사용 UI 컴포넌트 (Button, Input, Modal 등)
│   ├── layout/            # 레이아웃 컴포넌트 (Header, Footer)
│   └── [feature]/         # 기능별 컴포넌트
│
├── data/                  # 정적 데이터
├── hooks/                 # 커스텀 훅
├── lib/                   # 유틸리티 (cn(), api client 등)
├── stores/                # 상태 관리 (Zustand 등)
└── types/                 # TypeScript 타입 정의
```

### 네이밍 컨벤션

| 대상 | 컨벤션 | 예시 |
|------|--------|------|
| 컴포넌트 파일 | PascalCase | `HeroSection.tsx` |
| 유틸리티 파일 | camelCase | `utils.ts` |
| 상수 | SCREAMING_SNAKE | `ANIMATION_DELAY_MS` |
| 함수 | camelCase | `handleSubmit` |
| 이벤트 핸들러 | handle + 동작 | `handleChange` |
| boolean 변수 | is/has/should | `isSubmitting` |

---

## 체크리스트

### 새 컴포넌트 작성 시

- [ ] `'use client'` 필요한지 확인 (상태, 이벤트, 브라우저 API)
- [ ] `cn()` 유틸리티로 className 조합
- [ ] 반응형 고려 (`md:`, `lg:` 브레이크포인트)
- [ ] hover 인터랙션 추가

### 카드 컴포넌트

- [ ] `border-2 border-blue-200`, `rounded-2xl`, `shadow-lg` 사용
- [ ] `hover:shadow-xl transition-all duration-200`
- [ ] 그룹 호버로 편집 버튼 표시 (`group`, `group-hover:opacity-100`)

### 모달 컴포넌트

- [ ] Fixed 헤더/푸터, Scrollable 콘텐츠
- [ ] `w-[95vw] !max-w-[1024px] h-[90vh]`
- [ ] 스크롤바 숨김 처리

### 폼 컴포넌트

- [ ] 라벨은 `w-32 text-right text-slate-700`
- [ ] 필수 입력은 `text-red-500` 별표 (*)
- [ ] 입력 필드 `focus:border-blue-400 focus:ring-blue-400`

### 버튼

- [ ] Primary: `bg-blue-600 hover:bg-blue-700 text-white`
- [ ] Secondary: `variant="outline"`
- [ ] 호버 효과: `hover:scale-105` (필터), `hover:shadow-xl` (카드 내)

### 스타일링 일반

- [ ] 트랜지션은 `duration-200`
- [ ] 아이콘은 `h-4 w-4 text-blue-600`
- [ ] 반응형 그리드는 `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- [ ] 간격은 `gap-6` (카드), `gap-4` (폼), `gap-2` (작은 요소)
