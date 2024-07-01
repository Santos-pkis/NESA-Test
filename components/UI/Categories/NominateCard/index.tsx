import Button from "@/components/Common/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NominateCard = ({ key, data }: { key: any; data: any }) => {
  return (
    <div
      key={key}
      className={`min-h-[20rem] rounded-[2.3rem] bg-[#191307] overflow-hidden text-white relative`}
    >
      <div className="px-6 py-6 w-full h-full">
        <div className="flex flex-col justify-between gap-5 h-full">
          <div className="overflow-hidden rounded-xl h-[auto]">
            <Image
              src={"/images/nesa-card.png"}
              alt="card cover"
              className="w-[100%] h-[auto]"
              width={360}
              height={180}
            />
          </div>

          <p className="text-[1.5rem] leading-[1.9rem] font-[500]">
            {data.title}
          </p>
          <p className="text-[1.125rem] leading-[1.5rem] font-[400] line-clamp-4">
            {data.description}
          </p>

          <div>
            <Link href={`/nominate/details`}>
              <Button
                text="See Nominees"
                fullWidth
                variant="filled"
                rounded="lg"
                size="medium"
                onClick={() => ""}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NominateCard;
