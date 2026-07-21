import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import en from "../locales/en.json";
import de from "../locales/de.json";
import fr from "../locales/fr.json";
import ar from "../locales/ar.json";
import ProfileImage from "../images/mahmudremal.png";
import SeoHead from "./SeoHead";
import { sprintf } from "sprintf";
import Icons from "./icons";
import AnalyticsTracker from "./analytics";

const translations = { en, de, fr, ar };

function getAge(year, month, day) {
  const today = new Date();
  let age = today.getFullYear() - year;
  const monthDifference = today.getMonth() - (month - 1);
  const dayDifference = today.getDate() - day;
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}


export default function Home() {
  const { locale } = useRouter();
  const t = translations[locale || "en"];
  const [mounted, setMounted] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const [myAge, setMyAge] = useState(getAge(2000, 5, 10));


  const langRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* <AnalyticsTracker /> */}
      <SeoHead />
      <div className="min-h-screen bg-[#C6D4B6] flex items-center justify-center p-4 md:p-8 print:p-0 print:shadow-none">
        {/* Hidden SVG sprite */}
        <Icons />

        {/* Language Switcher - Top Right */}
        <div
          className={`fixed hidden top-4 right-4 z-50 no-print ${mounted ? "animate-fade-in" : "opacity-0"
            }`}
        >
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
            <svg
              className="w-5 h-5 text-[#4a5240]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
            <div className="flex gap-1">
              <Link
                href="/"
                locale="en"
                className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-300 ${locale === "en"
                  ? "bg-[#4a5240] text-white"
                  : "text-[#4a5240] hover:bg-gray-100"
                  }`}
              >
                EN
              </Link>
              <Link
                href="/"
                locale="de"
                className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-300 ${locale === "de"
                  ? "bg-[#4a5240] text-white"
                  : "text-[#4a5240] hover:bg-gray-100"
                  }`}
              >
                DE
              </Link>
              <Link
                href="/"
                locale="fr"
                className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-300 ${locale === "fr"
                  ? "bg-[#4a5240] text-white"
                  : "text-[#4a5240] hover:bg-gray-100"
                  }`}
              >
                FR
              </Link>
              <Link
                href="/"
                locale="ar"
                className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-300 ${locale === "ar"
                  ? "bg-[#4a5240] text-white"
                  : "text-[#4a5240] hover:bg-gray-100"
                  }`}
              >
                AR
              </Link>
            </div>
          </div>
        </div>

        {/* Main Container */}
        <div
          className={`w-full max-w-6xl bg-white rounded-3xl shadow-[1px_-1px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden ${mounted ? "animate-scale-in" : "opacity-0"
            }`}
        >
          <div className="bg-[#C6D4B6] rounded-[20px] grid grid-cols-1 lg:grid-cols-7">
            {/* Left Sidebar - Light Olive/Sage Green */}
            <aside className="lg:col-span-3 p-8 pb-0 ipadpro:p-8 lg:p-10 lg:h-fit lg:sticky lg:top-8">
              {/* Action Bar - Fixed Position */}
              <div
                className={`relative no-print flex justify-between gap-3 mb-6 ${mounted ? "animate-fade-in" : "opacity-0"
                  }`}
              >
                {/* Back Button */}
                {/* <button
                  onClick={() => window.history.back?.()}
                  className="bg-[#4a5240] hover:bg-[#3a4230] text-white rounded-xl p-2.5 shadow-lg transition-all duration-300"
                  title="Go Back"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        d="M15.8333 10.0001H4.16663M4.16663 10.0001L9.99996 15.8334M4.16663 10.0001L9.99996 4.16675"
                        stroke="#FCFD88"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button> */}
                <span className="text-md ipadpro:text-lg font-bold text-[#2D3D22] w-full">
                  {t.aboutme}
                </span>

                {/* Language dropdown */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setLangMenu((prev) => !prev);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                  >
                    <svg className="w-5 h-5" width="32" height="24">
                      <use href={`#flag-${locale}`} />
                    </svg>

                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.25 9.375L12.5 15.625L18.75 9.375"
                        stroke="#2D3D22"
                        strokeWidth="2.08333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    ref={langRef}
                    className={`${langMenu ? "" : "hidden"
                      } absolute mt-2 w-40 bg-white border rounded-lg shadow-lg py-1 z-20`}
                  >
                    <Link
                      href="/"
                      locale="en"
                      onClick={() => setLangMenu(false)}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2"
                    >
                      <svg className="w-5 h-5" width="20" height="15">
                        <use href="#flag-en" />
                      </svg>
                      {t.english}
                    </Link>

                    <Link
                      href="/de"
                      locale="de"
                      onClick={() => setLangMenu(false)}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2"
                    >
                      <svg className="w-5 h-5" width="20" height="15">
                        <use href="#flag-de" />
                      </svg>
                      {t.german}
                    </Link>

                    <Link
                      href="/fr"
                      locale="fr"
                      onClick={() => setLangMenu(false)}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2"
                    >
                      <svg className="w-5 h-5" width="20" height="15">
                        <use href="#flag-fr" />
                      </svg>
                      {t.french}
                    </Link>
                    <Link
                      href="/ar"
                      locale="ar"
                      onClick={() => setLangMenu(false)}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2"
                    >
                      <svg className="w-5 h-5" width="20" height="15">
                        <use href="#flag-ar" />
                      </svg>
                      {t.arabic}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Profile Section */}
              <div className="flex flex-col sm:flex-row mobileLandscape:flex-row ipadpro:flex-col items-center mb-8 gap-4">
                <div className="w-36 sm:w-[200px] h-auto aspect-square rounded-full overflow-hidden shadow-xl mb-4 ipadpro:self-start">
                  <Image
                    alt="Profile Picture"
                    src={ProfileImage}
                    className="w-full h-full object-cover bg-[#EAF0E1]"
                    priority
                  />
                </div>
                <div className="flex flex-col items-center lg:items-start w-full">
                  <h1 className="text-lg ipadpro:text-[34px] web:text-[44px] font-bold text-[#2D3D22] w-full lg:text-left tracking-wide leading-none">
                    {t.name}
                  </h1>
                  <div className="mt-2 lg:mt-4 space-y-2 w-full">
                    <div className="flex items-start gap-2 text-sm text-[#3a4230]">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99998 10.8334C11.3807 10.8334 12.5 9.71413 12.5 8.33342C12.5 6.9527 11.3807 5.83341 9.99998 5.83341C8.61927 5.83341 7.49998 6.9527 7.49998 8.33342C7.49998 9.71413 8.61927 10.8334 9.99998 10.8334Z"
                          stroke="#2D3D22"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.99998 18.3334C13.3333 15.0001 16.6666 12.0153 16.6666 8.33342C16.6666 4.65152 13.6819 1.66675 9.99998 1.66675C6.31808 1.66675 3.33331 4.65152 3.33331 8.33342C3.33331 12.0153 6.66665 15.0001 9.99998 18.3334Z"
                          stroke="#2D3D22"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{t.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#3a4230]">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_29_658)">
                          <path
                            d="M11.7081 5.00008C12.522 5.15889 13.2701 5.55696 13.8565 6.14336C14.4429 6.72976 14.8409 7.4778 14.9997 8.29175M11.7081 1.66675C13.3991 1.85461 14.9761 2.61189 16.1799 3.81425C17.3838 5.01662 18.1431 6.59259 18.3331 8.28341M8.52222 11.5526C7.52091 10.5513 6.73025 9.41912 6.15025 8.21111C6.10036 8.1072 6.07542 8.05524 6.05625 7.9895C5.98815 7.75587 6.03707 7.46899 6.17874 7.27113C6.21861 7.21546 6.26624 7.16783 6.3615 7.07257C6.65284 6.78123 6.79851 6.63556 6.89375 6.48908C7.25291 5.93667 7.25291 5.22452 6.89375 4.67211C6.79851 4.52563 6.65284 4.37996 6.3615 4.08862L6.19911 3.92623C5.75624 3.48336 5.53481 3.26192 5.29699 3.14164C4.82402 2.90241 4.26547 2.90241 3.7925 3.14164C3.55468 3.26192 3.33325 3.48336 2.89038 3.92623L2.75902 4.05759C2.31767 4.49894 2.09699 4.71962 1.92845 5.01964C1.74143 5.35257 1.60696 5.86964 1.6081 6.25149C1.60912 6.59562 1.67588 6.8308 1.80938 7.30117C2.52686 9.82901 3.88059 12.2143 5.87057 14.2043C7.86055 16.1943 10.2459 17.548 12.7737 18.2655C13.2441 18.399 13.4792 18.4657 13.8234 18.4668C14.2052 18.4679 14.7223 18.3334 15.0552 18.1464C15.3552 17.9779 15.5759 17.7572 16.0173 17.3158L16.1486 17.1845C16.5915 16.7416 16.8129 16.5202 16.9332 16.2824C17.1724 15.8094 17.1724 15.2508 16.9332 14.7779C16.8129 14.5401 16.5915 14.3186 16.1486 13.8758L15.9862 13.7134C15.6949 13.422 15.5492 13.2764 15.4028 13.1811C14.8503 12.8219 14.1382 12.822 13.5858 13.1811C13.4393 13.2764 13.2936 13.422 13.0023 13.7134C12.907 13.8086 12.8594 13.8562 12.8037 13.8961C12.6059 14.0378 12.319 14.0867 12.0854 14.0186C12.0196 13.9994 11.9677 13.9745 11.8638 13.9246C10.6557 13.3446 9.52354 12.554 8.52222 11.5526Z"
                            stroke="#2D3D22"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_29_658">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Link
                        className="cursor-pointer"
                        href="http://wa.me/8801814118328"
                        target="_blank"
                      >
                        {t.phone}
                      </Link>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-[#3a4230]">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_29_661)">
                          <path
                            d="M1.66669 10.0001H18.3334M1.66669 10.0001C1.66669 14.6025 5.39765 18.3334 10 18.3334M1.66669 10.0001C1.66669 5.39771 5.39765 1.66675 10 1.66675M18.3334 10.0001C18.3334 14.6025 14.6024 18.3334 10 18.3334M18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675M10 1.66675C12.0844 3.94871 13.269 6.91011 13.3334 10.0001C13.269 13.0901 12.0844 16.0515 10 18.3334M10 1.66675C7.91562 3.94871 6.73106 6.91011 6.66669 10.0001C6.73106 13.0901 7.91562 16.0515 10 18.3334"
                            stroke="#2D3D22"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_29_661">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Link
                        className="cursor-pointer"
                        href="https://linkedin.com/in/mahmud-remal/"
                        target="_blank"
                      >
                        linkedin.com/in/mahmud-remal/
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="hidden lg:block mb-8">
                <h2 className="text-xl font-bold text-[#2D3D22] mb-3 uppercase tracking-wide">
                  {t.summaryTitle}
                </h2>
                <p className="text-sm text-[#3a4230] leading-relaxed">
                  {t.summaryText}
                </p>
              </div>

              {/* Skills Section */}
              <div className="hidden web:block mb-8">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#2D3D22] mb-4 uppercase tracking-wide">
                    {t.skills.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                  {t.skills.list.map(({ title, list: skillset = [] }, skillCatIndex) => (
                    <div key={skillCatIndex} className="mb-6">
                      <h3 className="text-base font-bold text-[#2D3D22] mb-3 leading-none">
                        {title}
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {skillset.map(([icon, bgColor, itemTitle], itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: bgColor }}>
                              <svg className="w-5 h-5 text-white" fill="none">
                                <use href={`#stack-${icon}`}></use>
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#2D3D22]">
                                {itemTitle}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* Personal Information */}
              <div className="hidden ipadpro:block web:hidden mb-8 pb-6 border-b border-white/20">
                <h2 className="text-xl font-bold mb-4 uppercase tracking-wide pb-2">
                  {t.personalTitle}
                </h2>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">{t.age.split("–")[0]}</span>
                    – {sprintf(t.age.split("–")[1], myAge)}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {t.birthdate.split("–")[0]}
                    </span>
                    – {t.birthdate.split("–")[1]}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {t.nationality.split("–")[0]}
                    </span>
                    – {t.nationality.split("–")[1]}
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Content - Dark Olive/Forest Green */}
            <main className="lg:col-span-4 bg-[#2D3D22] p-8 lg:p-10 text-white rounded-[20px] gap-8">
              {/* w-[95%] m-auto mb-6 shadow-lg ipadpro:w-full */}
              {/* Summary Section */}
              <div className="block mobileLandscape:block ipadpro:hidden mb-8">
                <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {t.summaryTitle}
                </h2>
                <p className="text-sm text-white leading-relaxed">
                  {t.summaryText?.length >= 100 ? (
                    <span className="block">
                      {t.summaryText.slice(0, 100)}
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.target.parentElement.innerHTML = t.summaryText;
                        }}
                        className="cursor-pointer mx-2 text-[#FEFD7F] font-semibold"
                      >
                        Read More
                      </span>
                    </span>
                  ) : (
                    t.summaryText
                  )}
                </p>
              </div>
              {/* Skills Section */}
              <div className="block web:hidden mb-8 pb-6 border-b border-white/20">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                    {t.skills.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                  {t.skills.list.map(({ title, list: skillset = [] }, skillCatIndex) => (
                    <div key={skillCatIndex} className="mb-6">
                      <h3 className="text-base font-bold text-white mb-3">
                        {title}
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {skillset.map(([icon, bgColor, itemTitle], itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: bgColor }}>
                              <svg className="w-5 h-5 text-white" fill="none">
                                <use href={`#stack-${icon}`}></use>
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs ipadpro:text-sm font-semibold text-white">
                                {itemTitle}
                              </p>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  ))}


                </div>
              </div>
              {/* Personal Information */}
              <div className="hidden web:block mb-8 pb-6 border-b border-white/20">
                <h2 className="text-xl font-bold mb-4 uppercase tracking-wide pb-2">
                  {t.personalTitle}
                </h2>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">{t.age.split("–")[0]}</span>
                    – {sprintf(t.age.split("–")[1], myAge)}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {t.birthdate.split("–")[0]}
                    </span>
                    – {t.birthdate.split("–")[1]}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {t.nationality.split("–")[0]}
                    </span>
                    – {t.nationality.split("–")[1]}
                  </p>
                </div>
              </div>
              {/* Work Experience */}
              <div className="">
                <h2 className="text-xl font-bold mb-6 uppercase tracking-wide pb-2">
                  {t.work.title}
                </h2>

                <div className="space-y-6">

                  {/* Work Experience Item */}
                  {[...t.work.history].reverse().map(({ title, subTitle, points }, wIndex) => (
                    <div key={wIndex} className="relative pl-6 border-l-2 border-[#FFFFFF29]">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#FEFD7F]"></div>
                      <h3 className="text-base font-bold mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#c8db5e] hidden"></span>
                        {title}
                      </h3>
                      <p className="text-sm text-white mb-2 font-semibold">
                        {subTitle}
                      </p>
                      <ul className="space-y-2 text-sm text-white/90 mt-5">
                        {points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#c8db5e]"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.33332 7.33317L6.66666 8.6665L9.66666 5.6665M4.2225 1.87897C4.75839 1.8362 5.26713 1.62548 5.6763 1.27678C6.63114 0.463077 8.03551 0.463077 8.99034 1.27678C9.39951 1.62548 9.90826 1.8362 10.4441 1.87897C11.6947 1.97876 12.6877 2.9718 12.7875 4.22235C12.8303 4.75824 13.041 5.26698 13.3897 5.67615C14.2034 6.63099 14.2034 8.03535 13.3897 8.99019C13.041 9.39936 12.8303 9.9081 12.7875 10.444C12.6877 11.6945 11.6947 12.6876 10.4441 12.7874C9.90826 12.8301 9.39951 13.0409 8.99034 13.3896C8.03551 14.2033 6.63114 14.2033 5.6763 13.3896C5.26713 13.0409 4.75839 12.8301 4.2225 12.7874C2.97195 12.6876 1.97891 11.6945 1.87912 10.444C1.83636 9.9081 1.62563 9.39936 1.27694 8.99019C0.46323 8.03535 0.46323 6.63099 1.27694 5.67615C1.62563 5.26698 1.83636 4.75824 1.87912 4.22235C1.97891 2.9718 2.97195 1.97876 4.2225 1.87897Z"
                                stroke="white"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}


                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
