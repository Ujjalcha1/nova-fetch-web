import Image from "next/image";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import DeviceFrame from "./DeviceFrame";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ScreenshotCard({ title, description, image }: Props) {
  return (
    <SpotlightCard>
      <DeviceFrame>
        <Image
          src={image}
          alt={title}
          width={1400}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full object-cover"
        />
      </DeviceFrame>

      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>

      <p className="mt-3 text-gray-400">{description}</p>
    </SpotlightCard>
  );
}
