"use client";

import React, { useEffect, useRef, useState } from "react";
import { words } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [itemHeight, setItemHeight] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  // Measure the height of one item after mount
  useEffect(() => {
    const measure = () => {
      if (!wrapperRef.current) return;
      const first = wrapperRef.current.querySelector("span");
      if (first) {
        const h = Math.ceil(first.getBoundingClientRect().height );
        setItemHeight(h);
        if (slideRef.current) slideRef.current.style.height = `${h}px`;
      }
    };

    // measure once (and also on window resize)
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Interval to advance the index (only when we know itemHeight)
  useEffect(() => {
    if (words.length <= 1 || itemHeight === 0) return;

    const visibleMs = 3000; // how long each item stays visible
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, visibleMs);

    return () => clearInterval(interval);
  }, [itemHeight]);

  // Apply transform when index changes
  useEffect(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.transition =
      "transform 600ms cubic-bezier(0.9, 0.01, 0.3, 0.99)";
    wrapperRef.current.style.transform = `translateY(-${index * itemHeight}px)`;
  }, [index, itemHeight]);

  return (
    <div className="max-w-2xl">
      <div>
        <header className="flex flex-col justify-center md:w-full w-screen font-fira-code md:px-2 px-5">
          <div className="flex flex-col gap-7">
            <div >
              <h1 className="flex gap-2 items-start font-bold text-[32px] md:text-[48px] ">
                Shaping
                {/* slide container: overflow hidden, height set from JS */}
                <div
                  ref={slideRef}
                  className="slide inline-block ml-2"
                  style={{ overflow: "hidden", verticalAlign: "top"}}
                >
                  {/* wrapper that is translated up */}
                  <div ref={wrapperRef} className="wrapper flex flex-col">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <Image
                          src={word.icon}
                          alt={`${word.text} icon`}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span className="font-bold">{word.text}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </h1>

              <h1 className="text-[28px] md:text-[40px]">into Real Projects</h1>
              <h1 className="text-[28px] md:text-[40px]">that Deliver Results</h1>
            </div>
          </div>

          <p className="dark:text-[#90A1B9] md:text-xl mt-9">Hi all, I am Samuel Adebayo</p>
          <h2 className="text-[#615FFF] text-[16px] mb-6">
            {" "}
            {'>'} QA engineer and Front-end developer
          </h2>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-[16px]">{'//'} find my profile on Github:</p>
            <p className="text-[16px]">
              <span className="text-[#615FFF]">const</span>
              <span className="text-[#00D5BE]">{' '}githubLink{' '}</span>
              <span className="dark:text-white"> = {' '}</span>
              <Link href="https://github.com/PAMMY100">
                <span className="text-[#FFA1AD]">
                  "https://github.com/PAMMY100"
                </span>
              </Link>
            </p>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeroText;
