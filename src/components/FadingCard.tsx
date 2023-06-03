import Image from "next/image";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  image?: string;
}

const Card = ({
  title = "Card Title",
  image = "https://source.unsplash.com/100x100/?metaverse",
  ...rest
}: CardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleScreenChange = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleScreenChange();
    window.addEventListener("resize", handleScreenChange);
    return () => window.removeEventListener("resize", handleScreenChange);
  }, []);

  return (
    <div
      className="relative rounded-t-[70px] border-[3px] border-primary border-b-0 w-full bg-gradient-to-b from-white/10 to-transparent backdrop-filter backdrop-blur-sm"
      {...rest}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:h-32 h-24">
        <div className="w-24 h-24 mx-auto rounded-full bg-primary/50 overflow-hidden border-2 border-primary lg:w-32 lg:h-32">
          <Image
            src={image}
            alt="Image"
            width={ isMobile ? 96 : 128 }
            height={ isMobile ? 96 : 128 }
            className="object-cover rounded-full border-primary border-2"
          />
        </div>
      </div>
      <div className="pt-9 pb-44">
        <h2 className="text-4xl font-bold text-center font-spGrotesk">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
