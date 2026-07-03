import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div>
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectFit: 'cover' }}
        />
        <div className=" absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center ">
        <h1 className="text-6xl text-white">{props.title}</h1>
      </div>
    </section>
  );
}
