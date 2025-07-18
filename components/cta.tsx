"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="showcase-gradient-light relative mx-auto flex min-h-[80vh] w-full max-w-full items-center justify-center sm:min-h-[100vh]">
      <div className="mt-12 flex max-w-3xl flex-col items-center px-6 text-center lg:max-w-[1049px]">
        <p className="text-4xl font-semibold text-black lg:text-6xl">
          Meet Ralli,
          <br />
          Assistant to the Group Leader.
        </p>

        <p className="mt-1 text-base font-normal text-black/50 lg:mt-4 lg:text-lg">
          Ralli takes care of making fun hangouts happen.
        </p>

        <div className="mt-6 flex flex-col p-4 lg:mt-10">
          <Button className="bg-black px-20 py-[22px] text-sm font-semibold hover:bg-black sm:text-base">
            <Link
              href="https://tryralli.notion.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Waitlist
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
