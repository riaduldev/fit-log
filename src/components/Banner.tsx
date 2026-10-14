
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="mx-auto my-6 w-full max-w-7xl px-4 sm:my-8 sm:px-6 lg:px-8">
      <div className="flex min-h-[200px] flex-col items-center justify-between overflow-hidden rounded-xl border border-white/5 bg-[#222630] px-5 py-7 sm:px-8 sm:py-8 md:min-h-[220px] md:flex-row md:px-10 md:py-6 lg:px-12">
        
        {/* Left Content */}
        <div className="z-10 w-full text-center md:w-[60%] md:text-left">
          <h4 className="mb-3 text-[9px] font-bold tracking-wider text-[#C2F800]">
            WORKOUT LIBRARY
          </h4>

          <h1 className="max-w-md text-2xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-3xl md:text-3xl lg:text-4xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-[11px] leading-relaxed text-gray-400 md:mx-0 md:text-xs">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
  type="button"
  className="relative z-20 mt-4 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black opacity-100 transition-colors hover:bg-[#A6D600] sm:mt-5 sm:text-base md:mt-6"
>
  Browse Workouts
</button>
        </div>

        {/* Right Image */}
        <div className="relative mt-5 flex h-36 w-full shrink-0 items-center justify-center sm:h-40 md:mt-0 md:h-44 md:w-[38%] lg:h-48">
          <Image
            src="/assets/banner.png"
            alt="Athlete training on a gym exercise machine"
            width={800}
            height={700}
            priority
            sizes="(max-width: 767px) 80vw, 38vw"
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
