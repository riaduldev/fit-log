import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-auto my-6 w-full max-w-7xl px-4 sm:my-8 sm:px-6 lg:px-8">
      <div className="relative flex min-h-[220px] flex-col items-center justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#222630] px-5 py-7 sm:px-8 sm:py-8 md:min-h-[240px] md:flex-row md:gap-6 md:px-10 md:py-8 lg:px-12">
        {/* Left Content */}
        <div className="relative z-10 w-full md:w-[60%]">
          <h4 className="mb-3 text-[10px] font-bold tracking-[0.2em] text-[#C2F800] sm:text-xs">
            WORKOUT LIBRARY
          </h4>

          <h1 className="max-w-lg text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-gray-400 sm:text-sm md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Browse Workouts Button */}
          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg !bg-[#C2F800] px-4 py-3 text-sm font-medium text-white sm:mt-6 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
          >
            <span>Browse Workouts</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative mt-6 flex h-40 w-full shrink-0 items-center justify-center sm:h-48 md:mt-0 md:h-52 md:w-[38%] lg:h-56">
          <Image
            src="/assets/banner.png"
            alt="Athlete training on gym equipment"
            width={800}
            height={700}
            priority
            sizes="(max-width: 767px) 90vw, (max-width: 1024px) 38vw, 400px"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
