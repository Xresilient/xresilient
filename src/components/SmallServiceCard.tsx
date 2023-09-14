import Image from "next/image";

interface SmallServiceCardProps {
  image?: string;
  title?: string;
  description?: string;
}

const SmallServiceCard = ({
  image = "https://source.unsplash.com/300x300/?web3",
  title = "Web2 to Web3 Transformation",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptate corrupti tempora doloremque nemo ratione? Earum cumque deserunt cum dignissimos unde, dolore, excepturi non iure et, veritatis officia eveniet consequatur.",
  ...rest
}: SmallServiceCardProps) => {
  return (
    <div
      className={`flex flex-col w-full h-full bg-white/10 rounded-3xl border-primary border-2 backdrop-filter backdrop-blur-sm p-12 gap-6 pb-12`}
      {...rest}
    >
      <div className="h-32 w-32 rounded-full">
        <Image
          src={image}
          alt="web3"
          width={128}
          height={128}
          className="rounded-full border-2 border-primary"
        />
      </div>

      <h4 className="text-white text-3xl font-bold font-spGrotesk">{title}</h4>

      <span className="text-white text-xl">{description}</span>
    </div>
  );
};

export default SmallServiceCard;
