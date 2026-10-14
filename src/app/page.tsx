
import { Suspense } from "react";
import Banner from "@/components/Banner";
import Library from "@/components/Library";

export default function Home() {
  return (
    <div>
      <Banner />

      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-10 text-center text-white">
            Loading exercises...
          </div>
        }
      >
        <Library />
      </Suspense>
    </div>
  );
}
