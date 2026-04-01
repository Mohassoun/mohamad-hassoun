"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import { heroRoles } from "@/components/portfolio-data";
import { SocialLinks } from "@/components/social-links";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = heroRoles[roleIndex];
    let position = 0;
    const typeTimer = window.setInterval(() => {
      position += 1;
      setTyped(current.slice(0, position));
      if (position >= current.length) {
        window.clearInterval(typeTimer);
        window.setTimeout(() => {
          setRoleIndex((value) => (value + 1) % heroRoles.length);
          setTyped("");
        }, 1400);
      }
    }, 60);

    return () => window.clearInterval(typeTimer);
  }, [roleIndex]);

  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="section-shell relative min-h-[calc(100svh-5rem)]">
        <div className="hidden lg:block">
          <div className="absolute bottom-0 right-0 opacity-90">
            <Image
              src="/images/photos/black-white.png"
              alt="Mohamad Hassoun"
              width={780}
              height={960}
              priority
              className="h-auto w-[38rem]"
            />
          </div>
          <div className="ml-[3.75rem] pt-[5rem]">
            <div className="flex items-center gap-2 text-[15px]">
              <p className="font-heading">WELCOME TO MY PORTFOLIO!</p>
              <Image src="/images/misc/hi.gif" alt="Hi" width={18} height={18} />
            </div>
            <div className="mt-5">
              <h1 className="font-heading text-[60px] font-light leading-none">
                Mohamad <span className="font-bold">Hassoun</span>
              </h1>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[20px]">
              <FiPlay className="text-[var(--accent)]" />
              <p className="type-caret">{typed}</p>
            </div>
            <p className="body-copy mt-5 max-w-[34rem] text-[16px] leading-8">
              Full-stack developer based in Jeddah, Saudi Arabia with experience in React,
              Laravel, Flutter, AWS serverless, and secure web applications.
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <div className="absolute bottom-0 right-0 opacity-90">
            <Image
              src="/images/photos/black-white.png"
              alt="Mohamad Hassoun"
              width={650}
              height={860}
              className="h-auto w-[31rem]"
            />
          </div>
          <div className="ml-[2.5rem] pt-[4rem]">
            <div className="flex items-center gap-2 text-[13px]">
              <p className="font-heading">WELCOME TO MY PORTFOLIO!</p>
              <Image src="/images/misc/hi.gif" alt="Hi" width={18} height={18} />
            </div>
            <div className="mt-5">
              <h1 className="font-heading text-[50px] font-light leading-none">
                Mohamad <span className="font-bold">Hassoun</span>
              </h1>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[18px]">
              <FiPlay className="text-[var(--accent)]" />
              <p className="type-caret">{typed}</p>
            </div>
            <p className="body-copy mt-5 max-w-[28rem] text-[15px] leading-7">
              Full-stack developer based in Jeddah, Saudi Arabia with experience in React,
              Laravel, Flutter, AWS serverless, and secure web applications.
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="relative min-h-[calc(100svh-6rem)] md:hidden">
          <div className="absolute bottom-0 -right-16 opacity-90">
            <Image
              src="/images/photos/black-white.png"
              alt="Mohamad Hassoun"
              width={440}
              height={660}
              className="h-auto w-[18rem]"
            />
          </div>
          <div className="pt-[2.5rem]">
            <div className="flex items-center gap-2 text-[13px]">
              <p className="font-heading">HEY THERE!</p>
              <Image src="/images/misc/hi.gif" alt="Hi" width={18} height={18} />
            </div>
            <div className="mt-3">
              <h1 className="font-heading text-[42px] font-light leading-none">
                Mohamad <span className="font-bold">Hassoun</span>
              </h1>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[16px]">
              <FiPlay className="text-[var(--accent)]" />
              <p className="type-caret">{typed}</p>
            </div>
            <p className="body-copy mt-4 max-w-[14rem] text-[14px] leading-7">
              Full-stack developer in Saudi Arabia focused on React, Laravel, Flutter, and
              secure web applications.
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
