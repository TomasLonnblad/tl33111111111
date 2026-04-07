"use client";
import { ImagesBadge } from "@/components/ui/images-badge";

export default function ImagesBadgeDemo() {
  return (
    <div className="flex h-[10rem] w-full items-center justify-center">
      <ImagesBadge
        text="Introducing Agenforce Marketing Template"
        images={[
          "https://tomaslonnblad.github.io/jagx.jpg",
          "https://tomaslonnblad.github.io/6.jpg",
          "https://tomaslonnblad.github.io/7.jpg",
        ]}
      />
    </div>
  );
}
