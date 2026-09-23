"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import { heroContent } from "@/components/portfolio-data";
import { SocialLinks } from "@/components/social-links";
import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { lang } = useLanguage();
  const content = heroContent[lang];
  const heroRoles = content.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setRoleIndex(0);
    setTyped("");
  }, [lang]);

  useEffect(() => {
    const current = heroRoles[roleIndex % heroRoles.length];
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
  }, [roleIndex, heroRoles]);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-24 lg:pt-20">
      <div className="section-shell relative isolate min-h-[calc(100svh-7rem)] sm:min-h-[calc(100svh-6rem)] lg:min-h-[calc(100svh-5rem)]">
        <div className="hidden lg:block">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex select-none items-end justify-end overflow-hidden opacity-90">
            <Image
              src="/images/photos/black-white.png"
              alt="Mohamad Hassoun"
              width={780}
              height={960}
              priority
              className="h-full max-h-[calc(100svh-5rem)] w-auto max-w-[38rem] object-contain object-bottom"
            />
          </div>
          <div className="relative z-10 ml-[3.75rem] pt-[5rem]">
            <div className="flex items-center gap-2 text-[15px]">
              <p className="font-heading">{content.welcome}</p>
              <Image src="/images/misc/hi.gif" alt="Hi" width={18} height={18} />
            </div>
            <div className="mt-5">
              <h1 className="font-heading text-[60px] font-light leading-none tracking-tight">
                Mohamad <span className="font-bold">Hassoun</span>
              </h1>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[20px]">
              <FiPlay className="text-[var(--accent)]" />
              <p className="type-caret">{typed}</p>
            </div>
            <p className="body-copy mt-5 max-w-[34rem] text-[16px] leading-8">
              {content.description}
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex select-none items-end justify-end overflow-hidden opacity-90">
            <Image
              src="/images/photos/black-white.png"
              alt="Mohamad Hassoun"
              width={650}
              height={860}
              className="h-full max-h-[calc(100svh-5rem)] w-auto max-w-[31rem] object-contain object-bottom"
            />
          </div>
          <div className="relative z-10 ml-[2.5rem] pt-[4rem]">
            <div className="flex items-center gap-2 text-[13px]">
              <p className="font-heading">{content.welcome}</p>
              <Image src="/images/misc/hi.gif" alt="Hi" width={18} height={18} />
            </div>
            <div className="mt-5">
              <h1 className="font-heading text-[50px] font-light leading-none tracking-tight">
                Mohamad <span className="font-bold">Hassoun</span>
              </h1>
            </div>
            <div className="mt-4 flex items-center gap-1 text-[18px]">
              <FiPlay className="text-[var(--accent)]" />
              <p className="type-caret">{typed}</p>
            </div>
            <p className="body-copy mt-5 max-w-[28rem] text-[15px] leading-7">
              {content.description}
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:hidden">
          <div className="relative z-10 pt-2">
            <div className="flex items-center gap-2 text-[13px]">
              <p className="font-heading">{content.welcomeMobile}</p>
              <Image src="/images/misc/hi.gif" alt="Hi" width={18} height={18} />
            </div>
            <div className="mt-3">
              <h1 className="font-heading text-[42px] font-light leading-none tracking-tight">
                Mohamad <span className="font-bold">Hassoun</span>
              </h1>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[16px]">
              <FiPlay className="text-[var(--accent)]" />
              <p className="type-caret">{typed}</p>
            </div>
            <p className="body-copy mt-4 max-w-md text-[14px] leading-7">
              {content.descriptionMobile}
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>
          <div className="relative z-0 mx-auto mt-6 w-full max-w-xs">
            <Image
              src="/images/photos/black-white.png"
              alt="Mohamad Hassoun"
              width={440}
              height={660}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
