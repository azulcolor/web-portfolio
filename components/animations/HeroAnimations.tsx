// HeroAnimations.tsx — sin Framer
export function HeroAnimations() {
  return (
    <>
      <div className="absolute top-[15%] right-[15%] text-6xl opacity-20 select-none animate-float-slow">
        🍃
      </div>
      <div className="absolute bottom-[25%] left-[8%] text-5xl opacity-15 select-none animate-float-medium">
        🌿
      </div>
      <div className="absolute top-[60%] right-[8%] text-4xl opacity-15 select-none animate-float-fast">
        ☕
      </div>
    </>
  );
}