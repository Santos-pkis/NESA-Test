import Image from "next/image";


interface SlideImageProps {
  src: string;
  alt?: string;
}

const SlideImage2: React.FC<SlideImageProps> = ({ src, alt = "" }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover" 
          priority
        />
      </div>
            {/* Text overlay in center */}
            <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-5xl px-4">
          <h1 className="text-4xl md:text-6xl leading-tight">
          Nominate your Heroes to celebrate the Excellence and Impacts of Education across East-Africa
        </h1>
      </div>
    </div>
    </div>
  );
};

export default SlideImage2;
