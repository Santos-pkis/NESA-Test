"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
  {
    question: "What are the different award categories?",
    answer: `Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.`,
  },
  {
    question: "How can I nominate someone for an award?",
    answer: `Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.`,
  },
  {
    question: "How do I cast my vote for a nominee?",
    answer: `Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.`,
  },
  {
    question: "Is Voting Free and how many times can i vote?",
    answer: `Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.`,
  },
];

const HomeFaq = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
      return;
    }

    setSelectedId(id);
  };

  return (
    <div className="bg-[#fbf4e6] my-8 py-20 select-none px-12 rounded-lg">
      <div>
        <AnimatePresence mode="wait">
          {faqData.map((data, id) => (
            <div key={id} className="py-3 border-b border-zinc-300 space-y-2">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq(id)}>
                <p className="font-bold text-xl">{data.question}</p>
                <div className="w-8 h-8 flex-shrink-0 rounded-full border border-black/20 grid place-content-center">
                  <ChevronDown className={`text-zinc-700 ${selectedId === id && "rotate-180"} duration-300`} />
                </div>
              </div>

              {selectedId === id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-semiGrey"
                  key={id}
                >
                  {data.answer}
                </motion.p>
              )}
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeFaq;
