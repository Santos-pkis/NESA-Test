import { ChevronRight } from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="container text-center bg-darkBrown text-white rounded-2xl space-y-4 px-12 py-16">
      <p className="text-lg uppercase">How to get Involved</p>
      <p className="text-5xl text-center mx-auto max-w-2xl font-semibold">
        Etiam nulla lectus amet nunc molestie at vulputate.
      </p>
      <div className="pt-6">
        <div className="flex items-center gap-6 justify-center">
          <button
            className="flex-shrink-0 self-start w-fit px-5 text-sm font-semibold py-3 rounded-md text-black"
            style={{ background: `linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)` }}
          >
            Partner With Us
          </button>
          <button className="flex group items-center px-5 text-sm font-semibold py-3 gap-3 rounded-md border border-white">
            <span>Donate to Projects</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
