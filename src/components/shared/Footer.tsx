import Image from "next/image";
import Link from "next/link";
import React from "react";

const communities = [
  {
    href: "https://t.me/+XPaH4NzQVKg3YTE8",
    label: "Telegram",
  },
];

const other_links = [
  {
    href: "#",
    label: "Privacy",
  },
  {
    href: "#",
    label: "Terms",
  },
];

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="bg-shark-2 pt-[2.8125rem] lg:pt-[3.625rem] lg:pb-[3.625rem] pb-[3.0625rem] px-18 1xl:px-[5.375rem] lg:px-16">
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row space-y-[2.45875rem] lg:items-start lg:space-y-0 lg:justify-between">
          <Link href="/">
            <Image
              src="/svgs/logo-white.svg"
              alt="Voice on chain"
              width={242}
              height={32.66}
              className="xl:hidden"
            />
            <Image
              src="/svgs/logo-white.svg"
              alt="Voice on chain"
              width={356}
              height={48.04}
              className="hidden xl:block"
            />
          </Link>
          <span className="inline-block">
            <h3 className="uppercase text-base font-medium text-dim-gray mb-[1.0625rem]">
              Join our Community
            </h3>
            <ul className="flex items-center space-x-[1.5625rem] text-white font-normal text-sm lg:text-base">
              {communities.map(({ label, href }) => (
                <li key={label} className="hover:text-accent hover:underline">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </span>
        </div>
        <div className="mt-[4.3125rem] lg:mt-[3.5625rem] lg:pt-[2.0625rem] pt-8 flex flex-col lg:flex-row-reverse lg:justify-between border-t border-dim-gray-2">
          <ul className="mb-6 lg:mb-0 flex items-center space-x-[1.5625rem] text-white font-normal text-sm lg:text-base">
            {other_links.map(({ label, href }) => (
              <li key={label} className="hover:text-accent hover:underline">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <span className="text-base text-dark-gray font-light">
            &copy; {year} Voice on chain
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
