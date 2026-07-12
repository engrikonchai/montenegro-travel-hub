import Image from "next/image";
import PhotoCredit from "@/components/PhotoCredit";
import { unsplashUrl } from "@/lib/images";

export default function PageHero({ image, kicker, title, subtitle, tall = false, priority = false, children }) {
  const imageSrc = image.local ? image.src : unsplashUrl(image.id, { w: 1800 });

  return (
    <div className={`relative w-full ${tall ? "h-[78vh] min-h-[560px]" : "h-[52vh] min-h-[380px]"}`}>
      <Image
        src={imageSrc}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
          {kicker && (
            <p className="animate-fade-up text-stone/85 text-xs md:text-sm tracking-[0.25em] uppercase mb-4">
              {kicker}
            </p>
          )}
          {title && (
            <h1 className="animate-fade-up [animation-delay:100ms] font-display text-stone text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="animate-fade-up [animation-delay:200ms] mt-6 max-w-xl text-stone/80 text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="animate-fade-up [animation-delay:300ms] mt-8">{children}</div>}
          {image.credit && <PhotoCredit name={image.credit} light className="mt-6" />}
        </div>
      </div>
    </div>
  );
}
