import Image from "next/image";
import PhotoCredit from "@/components/PhotoCredit";
import { unsplashUrl } from "@/lib/images";

export default function PageHero({ image }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-10">
      <div className="relative aspect-[21/9] rounded-sm overflow-hidden">
        <Image
          src={unsplashUrl(image.id, { w: 1600 })}
          alt={image.alt}
          fill
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
      </div>
      <PhotoCredit name={image.credit} className="mt-2" />
    </div>
  );
}
