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
  const [myAge, setMyAge] = useState(getAge(1999, 5, 10));


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
      <SeoHead />
      <div className="min-h-screen bg-[#C6D4B6] flex items-center justify-center p-4 md:p-8">
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
                  About Me
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
                    {t.skillsTitle}
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                  {/* Frontend Development */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-[#2D3D22] mb-3 leading-none">
                      Frontend Development
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* HTML, CSS & JavaScript */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e85d2a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_29_675)">
                              <path
                                d="M3.73311 14.9334V13.0667H1.86644V14.9334H0.933105V10.2667H1.86644V12.1334H3.73311V10.2667H4.66644V14.9334H3.73311ZM6.5331 14.9334V11.2H5.22644V10.2667H8.67977V11.2H7.46644V14.9334H6.5331ZM9.33311 14.9334V10.2667H10.2664L11.5731 13.44H11.6664L13.0664 10.2667H13.9998V14.9334H13.0664V12.04H12.9731L11.9464 14.3734H11.3864L10.3598 12.04H10.2664V14.9334H9.33311ZM17.7331 14.9334H14.9331V10.2667H15.8664V14H17.7331V14.9334ZM8.7731 3.92005L6.62644 6.06672L8.7731 8.21338L8.21311 9.33338L4.94644 6.06672L8.21311 2.80005L8.7731 3.92005ZM9.89311 8.21338L12.0398 6.06672L9.89311 3.92005L10.4531 2.80005L13.7198 6.06672L10.4531 9.33338L9.89311 8.21338Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_29_675">
                                <rect
                                  width="18.6667"
                                  height="18.6667"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            HTML, CSS & JavaScript
                          </p>
                        </div>
                      </div>

                      {/* UI/UX Design & Responsive Interfaces */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4fb3a8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="12"
                            height="17"
                            viewBox="0 0 12 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.17592 0C1.42191 0 0 1.42191 0 3.17592C0 4.24639 0.529604 5.19317 1.34109 5.76852C0.529604 6.34387 0 7.29066 0 8.36111C0 9.43157 0.529604 10.3784 1.3411 10.9537C0.529604 11.5291 0 12.4758 0 13.5463C0 15.3003 1.42191 16.7222 3.17592 16.7222C4.92994 16.7222 6.35188 15.3003 6.35188 13.5463V10.8208C6.8992 11.2684 7.59881 11.537 8.36111 11.537C10.1152 11.537 11.537 10.1152 11.537 8.36111C11.537 7.29066 11.0074 6.34387 10.196 5.76851C11.0074 5.19317 11.537 4.24639 11.537 3.17592C11.537 1.42191 10.1152 0 8.36111 0H3.17592ZM5.18521 10.3703H3.17592C2.06624 10.3703 1.16667 9.47077 1.16667 8.36111C1.16667 7.25146 2.06624 6.35185 3.17592 6.35185L5.18521 6.35185V8.36111V10.3703ZM3.17592 5.18519H5.18521V1.16667H3.17592C2.06624 1.16667 1.16667 2.06624 1.16667 3.17592C1.16667 4.28561 2.06624 5.18519 3.17592 5.18519ZM10.3703 3.17592C10.3703 4.28489 9.47193 5.18402 8.36329 5.18519L7.35754 5.18518H6.35188V1.16667H8.36111C9.47077 1.16667 10.3703 2.06624 10.3703 3.17592ZM6.35188 8.35862C6.3532 7.25091 7.25091 6.35318 8.35862 6.35185H8.36306C9.47186 6.3529 10.3703 7.25208 10.3703 8.36111C10.3703 9.47077 9.47077 10.3703 8.36111 10.3703C7.25223 10.3703 6.3532 9.47209 6.35188 8.3636V8.35862ZM3.17592 11.537C2.06624 11.537 1.16667 12.4366 1.16667 13.5463C1.16667 14.656 2.06624 15.5556 3.17592 15.5556C4.28563 15.5556 5.18521 14.656 5.18521 13.5463V11.537H3.17592Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            UI/UX Design & Responsive Interfaces
                          </p>
                        </div>
                      </div>

                      {/* TypeScript & Angular */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.899 4.80825C14.3956 4.92378 14.8468 5.1838 15.1958 5.5555C15.388 5.75667 15.5549 5.98058 15.6928 6.22225C15.6992 6.2485 14.7979 6.854 14.2514 7.19175C14.2315 7.20517 14.1528 7.11942 14.0635 6.98759C13.9637 6.81595 13.822 6.67243 13.6516 6.57042C13.4812 6.46841 13.2878 6.41124 13.0894 6.40425C12.4611 6.36109 12.0563 6.69009 12.0592 7.24017C12.0538 7.37531 12.0846 7.50945 12.1484 7.62867C12.2867 7.9145 12.5434 8.086 13.3495 8.43542C14.8335 9.07417 15.4705 9.49534 15.8637 10.0938C16.0859 10.472 16.2228 10.8942 16.2647 11.3308C16.3066 11.7674 16.2526 12.2079 16.1064 12.6214C15.9054 13.0749 15.5867 13.4664 15.1834 13.7551C14.78 14.0439 14.3068 14.2194 13.8127 14.2635C13.2875 14.3237 12.7569 14.3183 12.233 14.2472C11.4306 14.1153 10.6915 13.7302 10.1237 13.1482C9.90915 12.9066 9.72751 12.6377 9.58353 12.3484C9.64407 12.3034 9.70782 12.2628 9.77428 12.2271C9.86644 12.1746 10.2153 11.9739 10.5443 11.7832L11.1416 11.4332L11.2664 11.6152C11.4767 11.9158 11.7443 12.172 12.0539 12.3688C12.3666 12.5403 12.7208 12.6216 13.077 12.6036C13.4332 12.5856 13.7773 12.469 14.0711 12.2668C14.2226 12.1191 14.3174 11.9227 14.3387 11.7122C14.36 11.5017 14.3066 11.2903 14.1878 11.1153C14.0268 10.8848 13.6978 10.6912 12.7627 10.2858C12.0295 10.0385 11.3616 9.62872 10.8091 9.087C10.546 8.78715 10.3517 8.43335 10.2398 8.05042C10.157 7.61419 10.1448 7.16752 10.2036 6.72742C10.3134 6.22099 10.5762 5.76056 10.9564 5.4085C11.3366 5.05644 11.8159 4.82979 12.3293 4.75925C12.852 4.69679 13.3812 4.71331 13.899 4.80825ZM9.03228 5.67334L9.03869 6.5215H6.33786V14.1912H4.43328V6.52325H1.73244V5.69025C1.72526 5.40499 1.73305 5.11954 1.75578 4.83509C1.76569 4.82167 3.40778 4.81525 5.39869 4.81875L9.02178 4.82867L9.03228 5.67334Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            TypeScript & Angular
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Backend Development */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-[#2D3D22] mb-3 leading-none">
                      Backend Development
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* PHP (Zend Certified) */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#6b7fa8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.06665 9.19384C5.27221 9.16799 5.48086 9.18314 5.68054 9.23841C5.88022 9.29368 6.06696 9.38797 6.22998 9.51584C6.33517 9.67786 6.40223 9.86163 6.42614 10.0533C6.45004 10.245 6.43015 10.4396 6.36798 10.6225C6.31344 11.0727 6.09569 11.4874 5.75598 11.7878C5.34631 12.0517 4.86203 12.1755 4.37598 12.1405H3.44265L4.01598 9.19984L5.06665 9.19384ZM1.33331 15.1178H2.86665L3.22998 13.2512H4.54131C5.02442 13.2635 5.50653 13.2012 5.97065 13.0665C6.35182 12.9407 6.70023 12.7316 6.99065 12.4545C7.49291 12.0029 7.83143 11.3976 7.95331 10.7332C8.04952 10.4025 8.06645 10.0538 8.00275 9.71536C7.93905 9.37692 7.79649 9.05824 7.58665 8.78517C7.33365 8.53446 7.02898 8.34198 6.6939 8.22119C6.35883 8.1004 6.00142 8.05421 5.64665 8.08584H2.70465L1.33331 15.1178Z"
                              fill="white"
                            />
                            <path
                              d="M9.07799 6.21558H10.6L10.2313 8.08224H11.5853C12.2074 8.01711 12.8324 8.17518 13.3487 8.52824C13.5195 8.72244 13.6363 8.95813 13.6873 9.21169C13.7383 9.46524 13.7218 9.72776 13.6393 9.97291L13.0033 13.2456H11.4633L12.0687 10.1342C12.1108 10.0155 12.1258 9.88891 12.1127 9.76364C12.0995 9.63836 12.0585 9.51762 11.9927 9.41024C11.772 9.25191 11.4992 9.18372 11.23 9.21958H10.0147L9.23133 13.2489H7.70599L9.07799 6.21558Z"
                              fill="white"
                            />
                            <path
                              d="M17.026 9.1939C17.2316 9.16806 17.4402 9.18321 17.6399 9.23847C17.8396 9.29374 18.0263 9.38804 18.1893 9.5159C18.2945 9.67793 18.3616 9.86169 18.3855 10.0534C18.4094 10.2451 18.3895 10.4397 18.3273 10.6226C18.2728 11.0728 18.055 11.4874 17.7153 11.7879C17.3049 12.0524 16.8196 12.1761 16.3327 12.1406H15.4L15.972 9.19657L17.026 9.1939ZM13.2927 15.1179H14.826L15.1893 13.2512H16.5013C16.9853 13.2638 17.4684 13.2015 17.9333 13.0666C18.3145 12.9407 18.6629 12.7317 18.9533 12.4546C19.4544 12.0024 19.7917 11.3972 19.9127 10.7332C20.0089 10.4026 20.0258 10.0539 19.9621 9.71542C19.8984 9.37698 19.7558 9.05831 19.546 8.78524C19.2929 8.53497 18.9883 8.34292 18.6533 8.22248C18.3184 8.10204 17.9612 8.05612 17.6067 8.0879H14.66L13.2927 15.1179Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            PHP (Zend Certified)
                          </p>
                        </div>
                      </div>

                      {/* Laravel Framework & MVC Architecture */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e85d2a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="white"
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            Laravel Framework & MVC Architecture
                          </p>
                        </div>
                      </div>

                      {/* Node.js (Backend Development) */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#8ab84a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.899 4.80825C14.3956 4.92378 14.8468 5.1838 15.1958 5.5555C15.388 5.75667 15.5549 5.98058 15.6928 6.22225C15.6992 6.2485 14.7979 6.854 14.2514 7.19175C14.2315 7.20517 14.1528 7.11942 14.0635 6.98759C13.9637 6.81595 13.822 6.67243 13.6516 6.57042C13.4812 6.46841 13.2878 6.41124 13.0894 6.40425C12.4611 6.36109 12.0563 6.69009 12.0592 7.24017C12.0538 7.37531 12.0846 7.50945 12.1484 7.62867C12.2867 7.9145 12.5434 8.086 13.3495 8.43542C14.8335 9.07417 15.4705 9.49534 15.8637 10.0938C16.0859 10.472 16.2228 10.8942 16.2647 11.3308C16.3066 11.7674 16.2526 12.2079 16.1064 12.6214C15.9054 13.0749 15.5867 13.4664 15.1834 13.7551C14.78 14.0439 14.3068 14.2194 13.8127 14.2635C13.2875 14.3237 12.7569 14.3183 12.233 14.2472C11.4306 14.1153 10.6915 13.7302 10.1237 13.1482C9.90915 12.9066 9.72751 12.6377 9.58353 12.3484C9.64407 12.3034 9.70782 12.2628 9.77428 12.2271C9.86644 12.1746 10.2153 11.9739 10.5443 11.7832L11.1416 11.4332L11.2664 11.6152C11.4767 11.9158 11.7443 12.172 12.0539 12.3688C12.3666 12.5403 12.7208 12.6216 13.077 12.6036C13.4332 12.5856 13.7773 12.469 14.0711 12.2668C14.2226 12.1191 14.3174 11.9227 14.3387 11.7122C14.36 11.5017 14.3066 11.2903 14.1878 11.1153C14.0268 10.8848 13.6978 10.6912 12.7627 10.2858C12.0295 10.0385 11.3616 9.62872 10.8091 9.087C10.546 8.78715 10.3517 8.43335 10.2398 8.05042C10.157 7.61419 10.1448 7.16752 10.2036 6.72742C10.3134 6.22099 10.5762 5.76056 10.9564 5.4085C11.3366 5.05644 11.8159 4.82979 12.3293 4.75925C12.852 4.69679 13.3812 4.71331 13.899 4.80825ZM9.03228 5.67334L9.03869 6.5215H6.33786V14.1912H4.43328V6.52325H1.73244V5.69025C1.72526 5.40499 1.73305 5.11954 1.75578 4.83509C1.76569 4.82167 3.40778 4.81525 5.39869 4.81875L9.02178 4.82867L9.03228 5.67334Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            Node.js (Backend Development)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Databases & Storage */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-[#2D3D22] mb-3 leading-none">
                      Databases & Storage
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* MySQL, MongoDB & Database Optimization */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.33333 13.3333C9.33333 14.0697 8.7364 14.6666 8 14.6666C7.2636 14.6666 6.66667 14.0697 6.66667 13.3333M9.33333 13.3333C9.33333 12.5969 8.7364 11.9999 8 11.9999M9.33333 13.3333H14M6.66667 13.3333C6.66667 12.5969 7.2636 11.9999 8 11.9999M6.66667 13.3333H2M8 11.9999V9.33325M8 9.33325C11.3333 9.33325 14 8.43992 14 7.33325V3.33325M8 9.33325C4.66667 9.33325 2 8.43992 2 7.33325V3.33325M14 3.33325C14 4.43782 11.3137 5.33325 8 5.33325C4.68629 5.33325 2 4.43782 2 3.33325M14 3.33325C14 2.22869 11.3137 1.33325 8 1.33325C4.68629 1.33325 2 2.22869 2 3.33325"
                              stroke="white"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            MySQL, MongoDB & Database Optimization
                          </p>
                        </div>
                      </div>

                      {/* Amazon DynamoDB & Redshift */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e8a02a] flex items-center justify-center flex-shrink-0">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white"
                          >
                            <g clipPath="url(#clip0_29_723)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.101 13.735C16.4678 13.6398 17.3181 13.4874 17.6793 13.5668C18.188 13.6121 18.4941 13.6964 18.5958 13.8193C18.8114 14.139 18.4885 15.2595 18.341 15.6245C18.2113 15.946 17.6037 16.9775 17.2892 16.9775C17.193 16.9775 17.1202 16.9073 17.1697 16.7761C18.3242 14.0882 17.8081 14.1591 16.101 14.306C15.8808 14.3328 15.0725 14.4945 15.1677 14.306C15.1677 14.0833 15.878 13.7923 16.101 13.735ZM8.05756 8.84639C8.05756 9.28344 8.16769 9.63352 8.38796 9.89594C9.01889 10.6481 10.1706 10.2453 10.6541 9.35089C10.9201 8.89444 11.1964 8.00257 11.1964 6.84665C10.263 6.84665 9.96623 6.89192 9.62743 6.98155C8.63156 7.26152 8.05756 7.88359 8.05756 8.84639ZM5.13902 9.18272C5.13902 7.60823 5.9865 6.505 7.2941 5.95707C8.44863 5.47013 10.0418 5.33685 11.1964 5.26755C11.1964 3.88341 11.0069 2.78109 9.5509 2.78109C9.0833 2.78109 8.24796 3.29939 8.05756 4.16332C8.01182 4.38693 7.89889 4.54796 7.71782 4.58122L5.76622 4.36202C5.53009 4.30658 5.43862 4.17729 5.49462 3.95368C5.88849 1.91352 7.6021 1.04214 9.5509 0.933112C10.4842 0.933112 11.8954 0.921324 12.9958 1.92478C14.1849 3.10286 13.9964 4.58657 13.9964 8.42667C13.9964 9.34881 14.0104 9.4373 14.6413 10.2569C14.7682 10.4454 14.7794 10.6251 14.5946 10.7618C13.6557 11.5685 13.1452 12.0046 13.0658 12.072C12.9296 12.1728 12.7644 12.1834 12.5721 12.1049C11.7368 11.3962 11.9374 11.4391 11.4176 10.7951C10.3638 11.9316 9.53596 12.2402 8.12569 12.2402C6.44942 12.2402 5.13902 11.2044 5.13902 9.18272ZM0.302499 13.9528C3.1305 15.5772 6.20769 16.3896 9.53409 16.3896C11.7508 16.3896 13.9404 15.9805 16.101 15.1628C16.4286 15.0334 16.774 14.7812 16.9746 15.0621C17.0708 15.197 17.04 15.3199 16.8813 15.4317C14.7878 16.9285 11.8702 17.7331 9.3297 17.7331C5.73543 17.7331 2.53783 16.4127 0.0990304 14.2386C-0.118436 14.0602 0.055166 13.7976 0.302499 13.9528Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_29_723">
                                <rect
                                  width="18.6667"
                                  height="18.6667"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            Amazon DynamoDB & Redshift
                          </p>
                        </div>
                      </div>

                      {/* Google Firebase */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e85d2a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_29_733)">
                              <path
                                d="M3.45773 13.9308L5.55995 0.409911C5.57503 0.309615 5.62138 0.216637 5.69239 0.144221C5.7634 0.0718054 5.85545 0.0236465 5.95543 0.0066055C6.05541 -0.0104355 6.15822 0.00451074 6.24921 0.0493148C6.3402 0.0941189 6.41473 0.166495 6.46218 0.256133L8.72262 4.49702L3.45773 13.9308ZM18.3857 17.2126L16.3857 4.76813C16.372 4.68019 16.3341 4.59779 16.2763 4.53014C16.2184 4.46249 16.1429 4.41226 16.0582 4.38505C15.9734 4.35785 15.8828 4.35474 15.7964 4.37609C15.71 4.39743 15.6312 4.44238 15.5688 4.50591L2.94751 17.2135L9.93062 21.1486C10.1461 21.2697 10.3892 21.3333 10.6364 21.3333C10.8836 21.3333 11.1267 21.2697 11.3422 21.1486L18.3857 17.2126ZM12.7111 6.35302L11.0933 3.25791C11.0525 3.18008 10.9911 3.11489 10.9159 3.06941C10.8407 3.02393 10.7545 2.99989 10.6666 2.99989C10.5787 2.99989 10.4925 3.02393 10.4173 3.06941C10.3421 3.11489 10.2808 3.18008 10.24 3.25791L3.13773 15.9859L12.7111 6.35302Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_29_733">
                                <rect
                                  width="21.3333"
                                  height="21.3333"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            Google Firebase
                          </p>
                        </div>
                      </div>

                      {/* Redis (ElastiCache) & SOLR */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#d84a4a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.69973 3.6927C9.69973 3.69846 9.78442 3.85879 9.89048 4.0553C9.99408 4.24853 10.0705 4.41461 10.059 4.42284C10.0475 4.43106 9.75399 4.54288 9.40784 4.66539C9.05922 4.79037 8.77884 4.89726 8.78377 4.90219C8.78871 4.90713 9.1842 4.94824 9.66108 4.99181C10.2358 5.04608 10.5384 5.08473 10.5598 5.1061C10.5787 5.12501 10.7094 5.33797 10.8541 5.57477L11.1131 6.01055L11.1592 5.90119C11.1838 5.84364 11.2628 5.65288 11.3359 5.48186L11.4642 5.16859L12.1557 5.09541C12.5339 5.0543 12.8719 5.02224 12.9072 5.02224C12.9401 5.01977 12.9672 5.01155 12.9672 4.99757C12.9672 4.98688 12.7115 4.88081 12.395 4.76324C12.0817 4.64648 11.8227 4.54535 11.8227 4.54288C11.8227 4.54041 11.891 4.37432 11.9724 4.17535C12.0538 3.97637 12.1162 3.80781 12.1113 3.80206C12.1056 3.79384 11.8392 3.87524 11.5234 3.97884L10.9462 4.16713L10.3337 3.92457C9.73179 3.68777 9.69973 3.67708 9.69973 3.6927ZM13.505 5.7647C12.7724 6.05577 12.1705 6.29833 12.1648 6.30408C12.159 6.30984 12.7041 6.53019 13.3767 6.79741L14.5969 7.27924L14.7276 7.22744C16.0868 6.69875 17.3234 6.20624 17.3176 6.20048C17.2987 6.17828 14.8937 5.23684 14.8666 5.23684C14.8477 5.2393 14.2351 5.47528 13.505 5.7647ZM6.47251 5.48186C5.76951 5.55504 5.17915 5.75977 4.92837 6.01877C4.75653 6.19555 4.72939 6.34601 4.83546 6.52772C4.99333 6.79988 5.51133 7.02928 6.22748 7.14604C6.54897 7.2003 7.49371 7.19208 7.82095 7.13535C8.58644 7.00215 9.08224 6.75712 9.199 6.44879C9.24257 6.3345 9.24257 6.31806 9.199 6.20624C9.08471 5.90695 8.59713 5.65864 7.87522 5.53366C7.51015 5.47117 6.82935 5.4465 6.47251 5.48186ZM19.5623 6.32875C19.5269 6.37479 19.3962 6.47839 19.2712 6.56308C18.9004 6.80235 18.421 7.02024 15.4471 8.30044C13.3553 9.19912 12.8217 9.43593 12.0973 9.78455C11.294 10.1685 10.9618 10.2746 10.5581 10.2746C10.1955 10.2746 9.98093 10.2121 9.30506 9.91199C9.03537 9.79195 7.93195 9.32904 6.85402 8.8801C2.13939 6.9191 2.05224 6.87799 1.799 6.60584L1.69293 6.48908V8.34401L1.81297 8.4583C1.92726 8.57013 2.317 8.80446 2.45595 8.84475C2.49377 8.85544 2.75031 8.9615 3.02822 9.08155C3.30613 9.20159 4.65951 9.7681 6.03755 10.3428C8.31757 11.2933 8.83722 11.5112 9.6134 11.8516C10.0245 12.0341 10.2531 12.0802 10.6404 12.067C10.924 12.0563 11.0079 12.0399 11.2562 11.9552C11.4165 11.9009 11.6944 11.7834 11.8745 11.6937C12.4657 11.3969 13.1818 11.0812 16.0333 9.85279C18.7162 8.6951 19.0648 8.53477 19.3559 8.33332C19.6552 8.12119 19.642 8.17299 19.642 7.14028C19.642 6.64695 19.6396 6.24406 19.6338 6.24406C19.6281 6.24406 19.5976 6.28188 19.5623 6.32875ZM10.1709 7.53824C9.07319 7.70679 8.16382 7.8515 8.14737 7.85726C8.12271 7.86548 10.8821 9.02564 10.9988 9.05524C11.026 9.06346 12.2601 7.28746 12.2601 7.24141C12.2601 7.21675 12.2626 7.21428 10.1709 7.53824ZM19.5779 9.37426C19.5532 9.41537 19.439 9.51568 19.3271 9.59461C18.9703 9.83964 18.4342 10.0847 15.1733 11.4874C13.297 12.2964 12.7082 12.5554 12.15 12.8276C11.2455 13.2658 11.0276 13.3365 10.5433 13.3341C10.1676 13.3316 9.93571 13.2716 9.43744 13.0455C8.95808 12.8251 8.42117 12.599 6.26695 11.7053C2.51926 10.1504 2.08595 9.95639 1.82202 9.70068L1.69128 9.57817V11.4027L1.83846 11.5416C2.07855 11.7653 2.05388 11.7538 6.07619 13.4295C7.55208 14.042 8.94411 14.6274 9.16775 14.7286C9.7614 14.9958 9.93324 15.0583 10.1676 15.1068C10.7152 15.2186 11.1205 15.1282 12.0085 14.6957C12.5857 14.4153 13.2912 14.102 14.999 13.367C18.2451 11.9667 19.0459 11.6074 19.2827 11.4495C19.3674 11.3895 19.4817 11.2941 19.5384 11.2317L19.6396 11.1198V10.2072C19.6396 9.70561 19.6371 9.2945 19.6313 9.2945C19.6289 9.2945 19.6042 9.32986 19.5771 9.37344L19.5779 9.37426ZM19.5483 12.3614C19.3329 12.6311 18.9029 12.8383 15.5556 14.2788C13.3709 15.2211 12.7066 15.5154 11.988 15.8583C11.2332 16.2176 10.9857 16.2941 10.5499 16.2941C10.2531 16.2941 9.95051 16.2234 9.61586 16.0762C8.83393 15.7333 8.31922 15.5154 6.03673 14.5649C3.44097 13.4837 2.61053 13.1326 2.33262 12.9937C2.07362 12.8629 1.80968 12.6779 1.74966 12.5826L1.69211 12.4954V13.4245C1.69211 14.4893 1.6732 14.4104 1.95933 14.6036C2.27506 14.8157 2.74373 15.0229 5.85995 16.3163C8.03884 17.2207 8.82324 17.5504 9.20968 17.7247C9.99984 18.0791 10.2095 18.1359 10.6502 18.1112C11.0531 18.0923 11.3179 18.0051 12.0151 17.6729C12.742 17.3243 13.2789 17.0851 15.651 16.063C18.9464 14.6439 19.3033 14.4729 19.5541 14.1834L19.6412 14.0856V13.1762C19.6412 12.6747 19.6388 12.2635 19.6355 12.2635C19.6297 12.2635 19.5919 12.3071 19.5483 12.3614Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            Redis (ElastiCache) & SOLR
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DevOps & Infrastructure */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-[#2D3D22] mb-3 leading-none">
                      DevOps & Infrastructure
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* Docker & Containerization */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                          >
                            <path
                              fill="white"
                              d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            Docker & Containerization
                          </p>
                        </div>
                      </div>

                      {/* LAMP Stack */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e8a02a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="white"
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.923 8.080c-0.025 0.072-0.141 0.061-0.207 0.082-0.059 0.031-0.107 0.085-0.175 0.085-0.062 0-0.162-0.025-0.17-0.085-0.012-0.082 0.11-0.166 0.187-0.166 0.050-0.024 0.108-0.037 0.169-0.037 0.056 0 0.109 0.011 0.157 0.032l-0.003-0.001c0.022 0.009 0.038 0.030 0.038 0.055 0 0.003-0 0.005-0.001 0.008l0-0v0.025h0.004zM15.611 8.080v-0.027c-0.008-0.025 0.016-0.052 0.036-0.062 0.046-0.020 0.1-0.032 0.157-0.032 0.061 0 0.119 0.014 0.17 0.038l-0.002-0.001c0.079 0 0.2 0.084 0.187 0.169-0.007 0.061-0.106 0.082-0.169 0.082-0.069 0-0.115-0.054-0.176-0.085-0.065-0.023-0.182-0.010-0.204-0.081zM16.963 10.058c-0.532 0.337-1.161 0.574-1.835 0.666l-0.024 0.003c-0.606-0.035-1.157-0.248-1.607-0.588l0.007 0.005c-0.192-0.167-0.35-0.335-0.466-0.419-0.205-0.167-0.18-0.416-0.092-0.416 0.136 0.020 0.161 0.167 0.249 0.25 0.12 0.082 0.269 0.25 0.45 0.416 0.397 0.328 0.899 0.541 1.45 0.583l0.009 0.001c0.654-0.057 1.249-0.267 1.763-0.592l-0.016 0.010c0.244-0.169 0.556-0.417 0.81-0.584 0.195-0.17 0.186-0.334 0.349-0.334 0.16 0.020 0.043 0.167-0.184 0.415-0.246 0.188-0.527 0.381-0.818 0.56l-0.044 0.025zM8.017 21.397h0.012c0.069 0 0.137 0.007 0.203 0.019l-0.007-0.001c0.544 0.14 0.992 0.478 1.273 0.931l0.005 0.009 1.137 2.079 0.004 0.004c0.457 0.773 0.948 1.442 1.497 2.059l-0.011-0.013c0.49 0.52 0.82 1.196 0.909 1.946l0.002 0.016v0.008c-0.012 0.817-0.613 1.491-1.396 1.616l-0.009 0.001c-0.2 0.031-0.432 0.048-0.667 0.048-0.857 0-1.659-0.233-2.347-0.64l0.021 0.012c-1.053-0.441-2.275-0.714-3.555-0.752l-0.015-0c-0.372-0.025-0.696-0.215-0.901-0.496l-0.002-0.003c-0.054-0.174-0.085-0.374-0.085-0.582 0-0.35 0.088-0.679 0.244-0.966l-0.005 0.011v-0.005l0.003-0.004c0.041-0.188 0.065-0.405 0.065-0.627 0-0.274-0.036-0.539-0.104-0.791l0.005 0.021c-0.041-0.15-0.065-0.323-0.065-0.502 0-0.242 0.043-0.473 0.123-0.687l-0.004 0.014c0.2-0.417 0.495-0.5 0.862-0.666 0.438-0.133 0.819-0.334 1.151-0.593l-0.008 0.006h0.002v-0.003c0.32-0.335 0.556-0.751 0.835-1.047 0.195-0.249 0.492-0.41 0.827-0.42l0.002-0zM21.531 21.336c-0.001 0.017-0.001 0.038-0.001 0.059 0 0.743 0.449 1.381 1.091 1.658l0.012 0.005c0.048 0.003 0.104 0.005 0.16 0.005 0.831 0 1.575-0.371 2.075-0.957l0.003-0.004 0.264-0.012c0.053-0.008 0.114-0.012 0.176-0.012 0.341 0 0.652 0.132 0.883 0.348l-0.001-0.001 0.004 0.004c0.249 0.301 0.422 0.673 0.487 1.082l0.002 0.013c0.055 0.505 0.238 0.96 0.517 1.34l-0.005-0.008c0.416 0.356 0.705 0.85 0.793 1.411l0.002 0.013 0.004-0.009v0.022l-0.004-0.015c-0.019 0.327-0.231 0.495-0.622 0.744-1.184 0.497-2.201 1.158-3.077 1.968l0.007-0.006c-0.608 0.792-1.501 1.339-2.523 1.486l-0.021 0.002c-0.074 0.010-0.16 0.016-0.247 0.016-0.768 0-1.428-0.464-1.716-1.126l-0.005-0.012-0.006-0.004c-0.093-0.286-0.146-0.615-0.146-0.956 0-0.416 0.079-0.813 0.224-1.178l-0.008 0.022c0.234-0.668 0.435-1.466 0.568-2.288l0.011-0.083c0.016-0.812 0.104-1.593 0.258-2.35l-0.014 0.083c0.085-0.518 0.381-0.954 0.794-1.225l0.007-0.004 0.056-0.027zM18.8 10.142c0.6 2.147 1.339 4.002 2.247 5.757l-0.079-0.167c0.613 1.090 1.090 2.355 1.363 3.695l0.014 0.084c0.009-0 0.020-0 0.031-0 0.217 0 0.427 0.029 0.627 0.084l-0.017-0.004c0.11-0.395 0.173-0.848 0.173-1.316 0-1.426-0.587-2.716-1.533-3.639l-0.001-0.001c-0.275-0.25-0.29-0.419-0.154-0.419 0.971 0.91 1.689 2.078 2.045 3.394l0.012 0.051c0.089 0.329 0.14 0.707 0.14 1.097 0 0.351-0.041 0.693-0.119 1.020l0.006-0.030c0.074 0.038 0.16 0.067 0.251 0.083l0.006 0.001c1.29 0.667 1.766 1.172 1.537 1.921v-0.054c-0.075-0.004-0.15 0-0.225 0h-0.020c0.189-0.584-0.227-1.031-1.331-1.53-1.143-0.5-2.057-0.42-2.212 0.581-0.011 0.049-0.019 0.106-0.022 0.165l-0 0.003c-0.073 0.030-0.16 0.058-0.25 0.078l-0.011 0.002c-0.508 0.336-0.87 0.859-0.989 1.469l-0.002 0.014c-0.148 0.695-0.241 1.5-0.256 2.323l-0 0.012v0.004c-0.091 0.637-0.23 1.207-0.418 1.753l0.020-0.066c-0.983 0.804-2.251 1.29-3.634 1.29-1.13 0-2.184-0.325-3.073-0.887l0.024 0.014c-0.146-0.253-0.313-0.472-0.503-0.667l0.001 0.001c-0.097-0.16-0.211-0.297-0.342-0.415l-0.002-0.001c0.207-0 0.407-0.031 0.596-0.088l-0.015 0.004c0.18-0.085 0.318-0.232 0.391-0.412l0.002-0.005c0.018-0.093 0.029-0.199 0.029-0.308 0-0.445-0.175-0.848-0.461-1.146l0.001 0.001c-0.619-0.761-1.359-1.395-2.196-1.88l-0.038-0.020c-0.671-0.388-1.179-0.995-1.43-1.722l-0.007-0.022c-0.093-0.318-0.147-0.684-0.147-1.062 0-0.353 0.047-0.695 0.134-1.021l-0.006 0.027c0.377-1.314 0.921-2.461 1.62-3.496l-0.028 0.043c0.134-0.081 0.046 0.169-0.51 1.217-0.474 0.713-0.757 1.59-0.757 2.533 0 0.84 0.224 1.627 0.616 2.306l-0.012-0.022c0.052-1.309 0.345-2.537 0.834-3.659l-0.025 0.065c1.055-1.902 1.854-4.111 2.275-6.452l0.020-0.131c0.060 0.045 0.271 0.169 0.361 0.252 0.272 0.166 0.475 0.416 0.737 0.581 0.267 0.26 0.633 0.42 1.035 0.42 0.021 0 0.042-0 0.063-0.001l-0.003 0c0.049 0.004 0.094 0.008 0.137 0.008 0.459-0.009 0.887-0.132 1.259-0.342l-0.013 0.007c0.362-0.167 0.65-0.417 0.925-0.5h0.006c0.535-0.145 0.983-0.454 1.3-0.869l0.004-0.006zM15.301 7.465c0.003 0 0.006-0 0.009-0 0.569 0 1.094 0.187 1.517 0.503l-0.007-0.005c0.378 0.234 0.814 0.433 1.275 0.574l0.040 0.010h0.004c0.246 0.11 0.449 0.281 0.594 0.494l0.003 0.005v-0.164c0.046 0.092 0.074 0.201 0.074 0.316 0 0.098-0.020 0.191-0.055 0.276l0.002-0.005c-0.288 0.507-0.755 0.884-1.313 1.048l-0.016 0.004v0.002c-0.335 0.169-0.626 0.416-0.968 0.581-0.35 0.21-0.771 0.334-1.222 0.334-0.015 0-0.030-0-0.045-0l0.002 0c-0.022 0.001-0.048 0.002-0.074 0.002-0.174 0-0.342-0.031-0.496-0.089l0.010 0.003c-0.159-0.087-0.29-0.169-0.417-0.257l0.014 0.010c-0.227-0.199-0.477-0.39-0.739-0.565l-0.026-0.016v-0.006h-0.006c-0.375-0.199-0.67-0.504-0.852-0.876l-0.005-0.012c-0.027-0.067-0.042-0.145-0.042-0.226 0-0.218 0.112-0.41 0.281-0.522l0.002-0.001c0.28-0.169 0.475-0.339 0.604-0.42 0.13-0.092 0.179-0.127 0.22-0.164h0.002v-0.004c0.268-0.339 0.623-0.599 1.032-0.746l0.016-0.005c0.174-0.050 0.374-0.079 0.581-0.081h0.001zM13.589 5.333h0.045c0.188 0.004 0.361 0.067 0.501 0.17l-0.002-0.002c0.179 0.159 0.325 0.352 0.425 0.57l0.004 0.011c0.113 0.245 0.183 0.53 0.191 0.83l0 0.003v0.005c0.004 0.046 0.006 0.099 0.006 0.152 0 0.063-0.003 0.126-0.009 0.188l0.001-0.008v0.1c-0.037 0.009-0.070 0.022-0.104 0.030-0.191 0.079-0.352 0.163-0.505 0.258l0.014-0.008c0.008-0.055 0.012-0.118 0.012-0.182 0-0.053-0.003-0.106-0.009-0.158l0.001 0.006v-0.019c-0.018-0.154-0.054-0.295-0.107-0.428l0.004 0.011c-0.041-0.132-0.113-0.244-0.207-0.333l-0-0c-0.055-0.050-0.128-0.081-0.209-0.081-0.007 0-0.014 0-0.021 0.001l0.001-0h-0.026c-0.103 0.011-0.189 0.075-0.232 0.163l-0.001 0.002c-0.077 0.093-0.13 0.208-0.15 0.334l-0 0.004c-0.023 0.086-0.035 0.185-0.035 0.287 0 0.044 0.002 0.088 0.007 0.131l-0-0.005v0.019c0.016 0.154 0.052 0.296 0.104 0.428l-0.004-0.011c0.042 0.132 0.113 0.245 0.207 0.335l0 0c0.012 0.012 0.026 0.022 0.042 0.030l0.001 0c-0.083 0.053-0.155 0.109-0.221 0.171l0.001-0.001c-0.045 0.040-0.1 0.070-0.161 0.084l-0.003 0.001c-0.123-0.147-0.237-0.312-0.335-0.486l-0.008-0.016c-0.113-0.245-0.183-0.529-0.194-0.83l-0-0.004c-0.004-0.048-0.006-0.104-0.006-0.161 0-0.241 0.039-0.473 0.11-0.69l-0.004 0.016c0.074-0.258 0.195-0.481 0.356-0.671l-0.002 0.003c0.127-0.15 0.313-0.245 0.522-0.25h0.001zM17.291 5.259h0.016c0.001 0 0.002 0 0.004 0 0.275 0 0.527 0.093 0.729 0.249l-0.003-0.002c0.229 0.177 0.413 0.4 0.542 0.655l0.005 0.011c0.121 0.266 0.196 0.575 0.207 0.901l0 0.004c0-0.025 0.007-0.050 0.007-0.075v0.131l-0.005-0.026-0.005-0.030c-0.003 0.32-0.071 0.622-0.193 0.897l0.006-0.014c-0.062 0.163-0.152 0.303-0.266 0.419l0-0c-0.030-0.018-0.067-0.035-0.104-0.050l-0.006-0.002c-0.135-0.042-0.253-0.099-0.36-0.169l0.005 0.003c-0.077-0.032-0.169-0.060-0.264-0.081l-0.011-0.002c0.081-0.076 0.156-0.157 0.225-0.243l0.004-0.005c0.063-0.148 0.102-0.319 0.11-0.499l0-0.003v-0.025c0-0.008 0-0.016 0-0.025 0-0.17-0.028-0.333-0.080-0.485l0.003 0.011c-0.063-0.159-0.14-0.296-0.232-0.421l0.004 0.005c-0.087-0.088-0.202-0.148-0.331-0.165l-0.003-0h-0.020c-0.001 0-0.003-0-0.004-0-0.132 0-0.25 0.065-0.322 0.164l-0.001 0.001c-0.116 0.113-0.204 0.253-0.254 0.41l-0.002 0.007c-0.063 0.147-0.104 0.318-0.112 0.496l-0 0.003v0.024c0.002 0.12 0.011 0.236 0.027 0.349l-0.002-0.015c-0.241-0.084-0.547-0.169-0.759-0.252-0.012-0.073-0.020-0.159-0.022-0.247l-0-0.003v-0.025c-0.001-0.020-0.001-0.043-0.001-0.066 0-0.324 0.069-0.631 0.194-0.908l-0.006 0.014c0.106-0.279 0.293-0.508 0.532-0.663l0.005-0.003c0.204-0.156 0.462-0.25 0.742-0.25h0zM16.63 1.004c-0.194 0-0.394 0.010-0.6 0.026-5.281 0.416-3.88 6.007-3.961 7.87-0.050 1.426-0.534 2.729-1.325 3.792l0.013-0.018c-1.407 1.602-2.555 3.474-3.351 5.523l-0.043 0.127c-0.258 0.685-0.408 1.476-0.408 2.302 0 0.285 0.018 0.566 0.052 0.841l-0.003-0.033c-0.056 0.046-0.103 0.102-0.136 0.166l-0.001 0.003c-0.325 0.335-0.562 0.75-0.829 1.048-0.283 0.217-0.615 0.388-0.975 0.494l-0.021 0.005c-0.464 0.139-0.842 0.442-1.075 0.841l-0.005 0.009c-0.104 0.212-0.165 0.461-0.165 0.725 0 0.010 0 0.019 0 0.029l-0-0.001c0.002 0.238 0.026 0.469 0.073 0.693l-0.004-0.023c0.056 0.219 0.088 0.471 0.088 0.73 0 0.17-0.014 0.337-0.041 0.5l0.002-0.018c-0.167 0.313-0.264 0.685-0.264 1.080 0 0.278 0.048 0.544 0.137 0.791l-0.005-0.016c0.273 0.388 0.686 0.662 1.164 0.749l0.011 0.002c1.274 0.107 2.451 0.373 3.561 0.78l-0.094-0.030c0.698 0.415 1.539 0.66 2.436 0.66 0.294 0 0.582-0.026 0.862-0.077l-0.029 0.004c0.667-0.151 1.211-0.586 1.504-1.169l0.006-0.013c0.734-0.004 1.537-0.336 2.824-0.417 0.873-0.072 1.967 0.334 3.22 0.25 0.037 0.159 0.086 0.298 0.148 0.429l-0.006-0.013 0.004 0.004c0.384 0.804 1.19 1.35 2.124 1.35 0.081 0 0.161-0.004 0.24-0.012l-0.010 0.001c1.151-0.17 2.139-0.768 2.813-1.623l0.007-0.009c0.843-0.768 1.827-1.401 2.905-1.853l0.067-0.025c0.432-0.191 0.742-0.585 0.81-1.059l0.001-0.007c-0.059-0.694-0.392-1.299-0.888-1.716l-0.004-0.003v-0.121l-0.004-0.004c-0.214-0.33-0.364-0.722-0.421-1.142l-0.002-0.015c-0.053-0.513-0.278-0.966-0.615-1.307l0 0h-0.004c-0.074-0.067-0.154-0.084-0.235-0.169-0.066-0.047-0.148-0.076-0.237-0.080l-0.001-0c0.195-0.602 0.308-1.294 0.308-2.013 0-0.94-0.193-1.835-0.541-2.647l0.017 0.044c-0.704-1.672-1.619-3.111-2.732-4.369l0.014 0.017c-1.105-1.082-1.828-2.551-1.948-4.187l-0.001-0.021c0.033-2.689 0.295-7.664-4.429-7.671z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D3D22]">
                            LAMP Stack (Linux, Apache, MySQL, PHP)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Management */}
                  <div>
                    <h3 className="text-base font-bold text-[#2D3D22] mb-3 leading-none whitespace-nowrap">
                      Project Management & Workflow
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          width="20"
                          height="20"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="invisible_box" data-name="invisible box">
                              <rect width="48" height="48" fill="none" />
                            </g>
                            <g id="Q3_icons" data-name="Q3 icons">
                              <g>
                                <path
                                  d="M44.2,2H23a9.6,9.6,0,0,0,9.5,9.6h3.9v3.7A9.6,9.6,0,0,0,46,24.9V3.8A1.8,1.8,0,0,0,44.2,2Z"
                                  fill="white"
                                />
                                <path
                                  d="M33.7,12.6H12.5A9.6,9.6,0,0,0,22,22.1h4v3.8a9.4,9.4,0,0,0,9.5,9.5v-21A1.8,1.8,0,0,0,33.7,12.6Z"
                                  fill="white"
                                />
                                <path
                                  d="M23.2,23.1H2a9.6,9.6,0,0,0,9.6,9.6h3.9v3.7A9.6,9.6,0,0,0,25,46V24.9A1.8,1.8,0,0,0,23.2,23.1Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2D3D22]">
                          JIRA & Agile Workflow
                        </p>
                      </div>
                    </div>
                  </div>
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
                    {t.skillsTitle}
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                  {/* Frontend Development */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-white mb-3">
                      Frontend Development
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* HTML, CSS & JavaScript */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e85d2a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_29_675)">
                              <path
                                d="M3.73311 14.9334V13.0667H1.86644V14.9334H0.933105V10.2667H1.86644V12.1334H3.73311V10.2667H4.66644V14.9334H3.73311ZM6.5331 14.9334V11.2H5.22644V10.2667H8.67977V11.2H7.46644V14.9334H6.5331ZM9.33311 14.9334V10.2667H10.2664L11.5731 13.44H11.6664L13.0664 10.2667H13.9998V14.9334H13.0664V12.04H12.9731L11.9464 14.3734H11.3864L10.3598 12.04H10.2664V14.9334H9.33311ZM17.7331 14.9334H14.9331V10.2667H15.8664V14H17.7331V14.9334ZM8.7731 3.92005L6.62644 6.06672L8.7731 8.21338L8.21311 9.33338L4.94644 6.06672L8.21311 2.80005L8.7731 3.92005ZM9.89311 8.21338L12.0398 6.06672L9.89311 3.92005L10.4531 2.80005L13.7198 6.06672L10.4531 9.33338L9.89311 8.21338Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_29_675">
                                <rect
                                  width="18.6667"
                                  height="18.6667"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            HTML, CSS & JavaScript
                          </p>
                        </div>
                      </div>

                      {/* UI/UX Design & Responsive Interfaces */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4fb3a8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="12"
                            height="17"
                            viewBox="0 0 12 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.17592 0C1.42191 0 0 1.42191 0 3.17592C0 4.24639 0.529604 5.19317 1.34109 5.76852C0.529604 6.34387 0 7.29066 0 8.36111C0 9.43157 0.529604 10.3784 1.3411 10.9537C0.529604 11.5291 0 12.4758 0 13.5463C0 15.3003 1.42191 16.7222 3.17592 16.7222C4.92994 16.7222 6.35188 15.3003 6.35188 13.5463V10.8208C6.8992 11.2684 7.59881 11.537 8.36111 11.537C10.1152 11.537 11.537 10.1152 11.537 8.36111C11.537 7.29066 11.0074 6.34387 10.196 5.76851C11.0074 5.19317 11.537 4.24639 11.537 3.17592C11.537 1.42191 10.1152 0 8.36111 0H3.17592ZM5.18521 10.3703H3.17592C2.06624 10.3703 1.16667 9.47077 1.16667 8.36111C1.16667 7.25146 2.06624 6.35185 3.17592 6.35185L5.18521 6.35185V8.36111V10.3703ZM3.17592 5.18519H5.18521V1.16667H3.17592C2.06624 1.16667 1.16667 2.06624 1.16667 3.17592C1.16667 4.28561 2.06624 5.18519 3.17592 5.18519ZM10.3703 3.17592C10.3703 4.28489 9.47193 5.18402 8.36329 5.18519L7.35754 5.18518H6.35188V1.16667H8.36111C9.47077 1.16667 10.3703 2.06624 10.3703 3.17592ZM6.35188 8.35862C6.3532 7.25091 7.25091 6.35318 8.35862 6.35185H8.36306C9.47186 6.3529 10.3703 7.25208 10.3703 8.36111C10.3703 9.47077 9.47077 10.3703 8.36111 10.3703C7.25223 10.3703 6.3532 9.47209 6.35188 8.3636V8.35862ZM3.17592 11.537C2.06624 11.537 1.16667 12.4366 1.16667 13.5463C1.16667 14.656 2.06624 15.5556 3.17592 15.5556C4.28563 15.5556 5.18521 14.656 5.18521 13.5463V11.537H3.17592Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            UI/UX Design & Responsive Interfaces
                          </p>
                        </div>
                      </div>

                      {/* TypeScript & Angular */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.899 4.80825C14.3956 4.92378 14.8468 5.1838 15.1958 5.5555C15.388 5.75667 15.5549 5.98058 15.6928 6.22225C15.6992 6.2485 14.7979 6.854 14.2514 7.19175C14.2315 7.20517 14.1528 7.11942 14.0635 6.98759C13.9637 6.81595 13.822 6.67243 13.6516 6.57042C13.4812 6.46841 13.2878 6.41124 13.0894 6.40425C12.4611 6.36109 12.0563 6.69009 12.0592 7.24017C12.0538 7.37531 12.0846 7.50945 12.1484 7.62867C12.2867 7.9145 12.5434 8.086 13.3495 8.43542C14.8335 9.07417 15.4705 9.49534 15.8637 10.0938C16.0859 10.472 16.2228 10.8942 16.2647 11.3308C16.3066 11.7674 16.2526 12.2079 16.1064 12.6214C15.9054 13.0749 15.5867 13.4664 15.1834 13.7551C14.78 14.0439 14.3068 14.2194 13.8127 14.2635C13.2875 14.3237 12.7569 14.3183 12.233 14.2472C11.4306 14.1153 10.6915 13.7302 10.1237 13.1482C9.90915 12.9066 9.72751 12.6377 9.58353 12.3484C9.64407 12.3034 9.70782 12.2628 9.77428 12.2271C9.86644 12.1746 10.2153 11.9739 10.5443 11.7832L11.1416 11.4332L11.2664 11.6152C11.4767 11.9158 11.7443 12.172 12.0539 12.3688C12.3666 12.5403 12.7208 12.6216 13.077 12.6036C13.4332 12.5856 13.7773 12.469 14.0711 12.2668C14.2226 12.1191 14.3174 11.9227 14.3387 11.7122C14.36 11.5017 14.3066 11.2903 14.1878 11.1153C14.0268 10.8848 13.6978 10.6912 12.7627 10.2858C12.0295 10.0385 11.3616 9.62872 10.8091 9.087C10.546 8.78715 10.3517 8.43335 10.2398 8.05042C10.157 7.61419 10.1448 7.16752 10.2036 6.72742C10.3134 6.22099 10.5762 5.76056 10.9564 5.4085C11.3366 5.05644 11.8159 4.82979 12.3293 4.75925C12.852 4.69679 13.3812 4.71331 13.899 4.80825ZM9.03228 5.67334L9.03869 6.5215H6.33786V14.1912H4.43328V6.52325H1.73244V5.69025C1.72526 5.40499 1.73305 5.11954 1.75578 4.83509C1.76569 4.82167 3.40778 4.81525 5.39869 4.81875L9.02178 4.82867L9.03228 5.67334Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            TypeScript & Angular
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Backend Development */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-white mb-3">
                      Backend Development
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* PHP (Zend Certified) */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#6b7fa8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.06665 9.19384C5.27221 9.16799 5.48086 9.18314 5.68054 9.23841C5.88022 9.29368 6.06696 9.38797 6.22998 9.51584C6.33517 9.67786 6.40223 9.86163 6.42614 10.0533C6.45004 10.245 6.43015 10.4396 6.36798 10.6225C6.31344 11.0727 6.09569 11.4874 5.75598 11.7878C5.34631 12.0517 4.86203 12.1755 4.37598 12.1405H3.44265L4.01598 9.19984L5.06665 9.19384ZM1.33331 15.1178H2.86665L3.22998 13.2512H4.54131C5.02442 13.2635 5.50653 13.2012 5.97065 13.0665C6.35182 12.9407 6.70023 12.7316 6.99065 12.4545C7.49291 12.0029 7.83143 11.3976 7.95331 10.7332C8.04952 10.4025 8.06645 10.0538 8.00275 9.71536C7.93905 9.37692 7.79649 9.05824 7.58665 8.78517C7.33365 8.53446 7.02898 8.34198 6.6939 8.22119C6.35883 8.1004 6.00142 8.05421 5.64665 8.08584H2.70465L1.33331 15.1178Z"
                              fill="white"
                            />
                            <path
                              d="M9.07799 6.21558H10.6L10.2313 8.08224H11.5853C12.2074 8.01711 12.8324 8.17518 13.3487 8.52824C13.5195 8.72244 13.6363 8.95813 13.6873 9.21169C13.7383 9.46524 13.7218 9.72776 13.6393 9.97291L13.0033 13.2456H11.4633L12.0687 10.1342C12.1108 10.0155 12.1258 9.88891 12.1127 9.76364C12.0995 9.63836 12.0585 9.51762 11.9927 9.41024C11.772 9.25191 11.4992 9.18372 11.23 9.21958H10.0147L9.23133 13.2489H7.70599L9.07799 6.21558Z"
                              fill="white"
                            />
                            <path
                              d="M17.026 9.1939C17.2316 9.16806 17.4402 9.18321 17.6399 9.23847C17.8396 9.29374 18.0263 9.38804 18.1893 9.5159C18.2945 9.67793 18.3616 9.86169 18.3855 10.0534C18.4094 10.2451 18.3895 10.4397 18.3273 10.6226C18.2728 11.0728 18.055 11.4874 17.7153 11.7879C17.3049 12.0524 16.8196 12.1761 16.3327 12.1406H15.4L15.972 9.19657L17.026 9.1939ZM13.2927 15.1179H14.826L15.1893 13.2512H16.5013C16.9853 13.2638 17.4684 13.2015 17.9333 13.0666C18.3145 12.9407 18.6629 12.7317 18.9533 12.4546C19.4544 12.0024 19.7917 11.3972 19.9127 10.7332C20.0089 10.4026 20.0258 10.0539 19.9621 9.71542C19.8984 9.37698 19.7558 9.05831 19.546 8.78524C19.2929 8.53497 18.9883 8.34292 18.6533 8.22248C18.3184 8.10204 17.9612 8.05612 17.6067 8.0879H14.66L13.2927 15.1179Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            PHP (Zend Certified)
                          </p>
                        </div>
                      </div>

                      {/* Laravel Framework & MVC Architecture */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e85d2a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="white"
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            Laravel Framework & MVC Architecture
                          </p>
                        </div>
                      </div>

                      {/* Node.js (Backend Development) */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#8ab84a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.899 4.80825C14.3956 4.92378 14.8468 5.1838 15.1958 5.5555C15.388 5.75667 15.5549 5.98058 15.6928 6.22225C15.6992 6.2485 14.7979 6.854 14.2514 7.19175C14.2315 7.20517 14.1528 7.11942 14.0635 6.98759C13.9637 6.81595 13.822 6.67243 13.6516 6.57042C13.4812 6.46841 13.2878 6.41124 13.0894 6.40425C12.4611 6.36109 12.0563 6.69009 12.0592 7.24017C12.0538 7.37531 12.0846 7.50945 12.1484 7.62867C12.2867 7.9145 12.5434 8.086 13.3495 8.43542C14.8335 9.07417 15.4705 9.49534 15.8637 10.0938C16.0859 10.472 16.2228 10.8942 16.2647 11.3308C16.3066 11.7674 16.2526 12.2079 16.1064 12.6214C15.9054 13.0749 15.5867 13.4664 15.1834 13.7551C14.78 14.0439 14.3068 14.2194 13.8127 14.2635C13.2875 14.3237 12.7569 14.3183 12.233 14.2472C11.4306 14.1153 10.6915 13.7302 10.1237 13.1482C9.90915 12.9066 9.72751 12.6377 9.58353 12.3484C9.64407 12.3034 9.70782 12.2628 9.77428 12.2271C9.86644 12.1746 10.2153 11.9739 10.5443 11.7832L11.1416 11.4332L11.2664 11.6152C11.4767 11.9158 11.7443 12.172 12.0539 12.3688C12.3666 12.5403 12.7208 12.6216 13.077 12.6036C13.4332 12.5856 13.7773 12.469 14.0711 12.2668C14.2226 12.1191 14.3174 11.9227 14.3387 11.7122C14.36 11.5017 14.3066 11.2903 14.1878 11.1153C14.0268 10.8848 13.6978 10.6912 12.7627 10.2858C12.0295 10.0385 11.3616 9.62872 10.8091 9.087C10.546 8.78715 10.3517 8.43335 10.2398 8.05042C10.157 7.61419 10.1448 7.16752 10.2036 6.72742C10.3134 6.22099 10.5762 5.76056 10.9564 5.4085C11.3366 5.05644 11.8159 4.82979 12.3293 4.75925C12.852 4.69679 13.3812 4.71331 13.899 4.80825ZM9.03228 5.67334L9.03869 6.5215H6.33786V14.1912H4.43328V6.52325H1.73244V5.69025C1.72526 5.40499 1.73305 5.11954 1.75578 4.83509C1.76569 4.82167 3.40778 4.81525 5.39869 4.81875L9.02178 4.82867L9.03228 5.67334Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            Node.js (Backend Development)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Databases & Storage */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-white mb-3">
                      Databases & Storage
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* MySQL, MongoDB & Database Optimization */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.33333 13.3333C9.33333 14.0697 8.7364 14.6666 8 14.6666C7.2636 14.6666 6.66667 14.0697 6.66667 13.3333M9.33333 13.3333C9.33333 12.5969 8.7364 11.9999 8 11.9999M9.33333 13.3333H14M6.66667 13.3333C6.66667 12.5969 7.2636 11.9999 8 11.9999M6.66667 13.3333H2M8 11.9999V9.33325M8 9.33325C11.3333 9.33325 14 8.43992 14 7.33325V3.33325M8 9.33325C4.66667 9.33325 2 8.43992 2 7.33325V3.33325M14 3.33325C14 4.43782 11.3137 5.33325 8 5.33325C4.68629 5.33325 2 4.43782 2 3.33325M14 3.33325C14 2.22869 11.3137 1.33325 8 1.33325C4.68629 1.33325 2 2.22869 2 3.33325"
                              stroke="white"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            MySQL, MongoDB & Database Optimization
                          </p>
                        </div>
                      </div>

                      {/* Amazon DynamoDB & Redshift */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e8a02a] flex items-center justify-center flex-shrink-0">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white"
                          >
                            <g clipPath="url(#clip0_29_723)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.101 13.735C16.4678 13.6398 17.3181 13.4874 17.6793 13.5668C18.188 13.6121 18.4941 13.6964 18.5958 13.8193C18.8114 14.139 18.4885 15.2595 18.341 15.6245C18.2113 15.946 17.6037 16.9775 17.2892 16.9775C17.193 16.9775 17.1202 16.9073 17.1697 16.7761C18.3242 14.0882 17.8081 14.1591 16.101 14.306C15.8808 14.3328 15.0725 14.4945 15.1677 14.306C15.1677 14.0833 15.878 13.7923 16.101 13.735ZM8.05756 8.84639C8.05756 9.28344 8.16769 9.63352 8.38796 9.89594C9.01889 10.6481 10.1706 10.2453 10.6541 9.35089C10.9201 8.89444 11.1964 8.00257 11.1964 6.84665C10.263 6.84665 9.96623 6.89192 9.62743 6.98155C8.63156 7.26152 8.05756 7.88359 8.05756 8.84639ZM5.13902 9.18272C5.13902 7.60823 5.9865 6.505 7.2941 5.95707C8.44863 5.47013 10.0418 5.33685 11.1964 5.26755C11.1964 3.88341 11.0069 2.78109 9.5509 2.78109C9.0833 2.78109 8.24796 3.29939 8.05756 4.16332C8.01182 4.38693 7.89889 4.54796 7.71782 4.58122L5.76622 4.36202C5.53009 4.30658 5.43862 4.17729 5.49462 3.95368C5.88849 1.91352 7.6021 1.04214 9.5509 0.933112C10.4842 0.933112 11.8954 0.921324 12.9958 1.92478C14.1849 3.10286 13.9964 4.58657 13.9964 8.42667C13.9964 9.34881 14.0104 9.4373 14.6413 10.2569C14.7682 10.4454 14.7794 10.6251 14.5946 10.7618C13.6557 11.5685 13.1452 12.0046 13.0658 12.072C12.9296 12.1728 12.7644 12.1834 12.5721 12.1049C11.7368 11.3962 11.9374 11.4391 11.4176 10.7951C10.3638 11.9316 9.53596 12.2402 8.12569 12.2402C6.44942 12.2402 5.13902 11.2044 5.13902 9.18272ZM0.302499 13.9528C3.1305 15.5772 6.20769 16.3896 9.53409 16.3896C11.7508 16.3896 13.9404 15.9805 16.101 15.1628C16.4286 15.0334 16.774 14.7812 16.9746 15.0621C17.0708 15.197 17.04 15.3199 16.8813 15.4317C14.7878 16.9285 11.8702 17.7331 9.3297 17.7331C5.73543 17.7331 2.53783 16.4127 0.0990304 14.2386C-0.118436 14.0602 0.055166 13.7976 0.302499 13.9528Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_29_723">
                                <rect
                                  width="18.6667"
                                  height="18.6667"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            Amazon DynamoDB & Redshift
                          </p>
                        </div>
                      </div>

                      {/* Google Firebase */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e85d2a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_29_733)">
                              <path
                                d="M3.45773 13.9308L5.55995 0.409911C5.57503 0.309615 5.62138 0.216637 5.69239 0.144221C5.7634 0.0718054 5.85545 0.0236465 5.95543 0.0066055C6.05541 -0.0104355 6.15822 0.00451074 6.24921 0.0493148C6.3402 0.0941189 6.41473 0.166495 6.46218 0.256133L8.72262 4.49702L3.45773 13.9308ZM18.3857 17.2126L16.3857 4.76813C16.372 4.68019 16.3341 4.59779 16.2763 4.53014C16.2184 4.46249 16.1429 4.41226 16.0582 4.38505C15.9734 4.35785 15.8828 4.35474 15.7964 4.37609C15.71 4.39743 15.6312 4.44238 15.5688 4.50591L2.94751 17.2135L9.93062 21.1486C10.1461 21.2697 10.3892 21.3333 10.6364 21.3333C10.8836 21.3333 11.1267 21.2697 11.3422 21.1486L18.3857 17.2126ZM12.7111 6.35302L11.0933 3.25791C11.0525 3.18008 10.9911 3.11489 10.9159 3.06941C10.8407 3.02393 10.7545 2.99989 10.6666 2.99989C10.5787 2.99989 10.4925 3.02393 10.4173 3.06941C10.3421 3.11489 10.2808 3.18008 10.24 3.25791L3.13773 15.9859L12.7111 6.35302Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_29_733">
                                <rect
                                  width="21.3333"
                                  height="21.3333"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            Google Firebase
                          </p>
                        </div>
                      </div>

                      {/* Redis (ElastiCache) & SOLR */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#d84a4a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.69973 3.6927C9.69973 3.69846 9.78442 3.85879 9.89048 4.0553C9.99408 4.24853 10.0705 4.41461 10.059 4.42284C10.0475 4.43106 9.75399 4.54288 9.40784 4.66539C9.05922 4.79037 8.77884 4.89726 8.78377 4.90219C8.78871 4.90713 9.1842 4.94824 9.66108 4.99181C10.2358 5.04608 10.5384 5.08473 10.5598 5.1061C10.5787 5.12501 10.7094 5.33797 10.8541 5.57477L11.1131 6.01055L11.1592 5.90119C11.1838 5.84364 11.2628 5.65288 11.3359 5.48186L11.4642 5.16859L12.1557 5.09541C12.5339 5.0543 12.8719 5.02224 12.9072 5.02224C12.9401 5.01977 12.9672 5.01155 12.9672 4.99757C12.9672 4.98688 12.7115 4.88081 12.395 4.76324C12.0817 4.64648 11.8227 4.54535 11.8227 4.54288C11.8227 4.54041 11.891 4.37432 11.9724 4.17535C12.0538 3.97637 12.1162 3.80781 12.1113 3.80206C12.1056 3.79384 11.8392 3.87524 11.5234 3.97884L10.9462 4.16713L10.3337 3.92457C9.73179 3.68777 9.69973 3.67708 9.69973 3.6927ZM13.505 5.7647C12.7724 6.05577 12.1705 6.29833 12.1648 6.30408C12.159 6.30984 12.7041 6.53019 13.3767 6.79741L14.5969 7.27924L14.7276 7.22744C16.0868 6.69875 17.3234 6.20624 17.3176 6.20048C17.2987 6.17828 14.8937 5.23684 14.8666 5.23684C14.8477 5.2393 14.2351 5.47528 13.505 5.7647ZM6.47251 5.48186C5.76951 5.55504 5.17915 5.75977 4.92837 6.01877C4.75653 6.19555 4.72939 6.34601 4.83546 6.52772C4.99333 6.79988 5.51133 7.02928 6.22748 7.14604C6.54897 7.2003 7.49371 7.19208 7.82095 7.13535C8.58644 7.00215 9.08224 6.75712 9.199 6.44879C9.24257 6.3345 9.24257 6.31806 9.199 6.20624C9.08471 5.90695 8.59713 5.65864 7.87522 5.53366C7.51015 5.47117 6.82935 5.4465 6.47251 5.48186ZM19.5623 6.32875C19.5269 6.37479 19.3962 6.47839 19.2712 6.56308C18.9004 6.80235 18.421 7.02024 15.4471 8.30044C13.3553 9.19912 12.8217 9.43593 12.0973 9.78455C11.294 10.1685 10.9618 10.2746 10.5581 10.2746C10.1955 10.2746 9.98093 10.2121 9.30506 9.91199C9.03537 9.79195 7.93195 9.32904 6.85402 8.8801C2.13939 6.9191 2.05224 6.87799 1.799 6.60584L1.69293 6.48908V8.34401L1.81297 8.4583C1.92726 8.57013 2.317 8.80446 2.45595 8.84475C2.49377 8.85544 2.75031 8.9615 3.02822 9.08155C3.30613 9.20159 4.65951 9.7681 6.03755 10.3428C8.31757 11.2933 8.83722 11.5112 9.6134 11.8516C10.0245 12.0341 10.2531 12.0802 10.6404 12.067C10.924 12.0563 11.0079 12.0399 11.2562 11.9552C11.4165 11.9009 11.6944 11.7834 11.8745 11.6937C12.4657 11.3969 13.1818 11.0812 16.0333 9.85279C18.7162 8.6951 19.0648 8.53477 19.3559 8.33332C19.6552 8.12119 19.642 8.17299 19.642 7.14028C19.642 6.64695 19.6396 6.24406 19.6338 6.24406C19.6281 6.24406 19.5976 6.28188 19.5623 6.32875ZM10.1709 7.53824C9.07319 7.70679 8.16382 7.8515 8.14737 7.85726C8.12271 7.86548 10.8821 9.02564 10.9988 9.05524C11.026 9.06346 12.2601 7.28746 12.2601 7.24141C12.2601 7.21675 12.2626 7.21428 10.1709 7.53824ZM19.5779 9.37426C19.5532 9.41537 19.439 9.51568 19.3271 9.59461C18.9703 9.83964 18.4342 10.0847 15.1733 11.4874C13.297 12.2964 12.7082 12.5554 12.15 12.8276C11.2455 13.2658 11.0276 13.3365 10.5433 13.3341C10.1676 13.3316 9.93571 13.2716 9.43744 13.0455C8.95808 12.8251 8.42117 12.599 6.26695 11.7053C2.51926 10.1504 2.08595 9.95639 1.82202 9.70068L1.69128 9.57817V11.4027L1.83846 11.5416C2.07855 11.7653 2.05388 11.7538 6.07619 13.4295C7.55208 14.042 8.94411 14.6274 9.16775 14.7286C9.7614 14.9958 9.93324 15.0583 10.1676 15.1068C10.7152 15.2186 11.1205 15.1282 12.0085 14.6957C12.5857 14.4153 13.2912 14.102 14.999 13.367C18.2451 11.9667 19.0459 11.6074 19.2827 11.4495C19.3674 11.3895 19.4817 11.2941 19.5384 11.2317L19.6396 11.1198V10.2072C19.6396 9.70561 19.6371 9.2945 19.6313 9.2945C19.6289 9.2945 19.6042 9.32986 19.5771 9.37344L19.5779 9.37426ZM19.5483 12.3614C19.3329 12.6311 18.9029 12.8383 15.5556 14.2788C13.3709 15.2211 12.7066 15.5154 11.988 15.8583C11.2332 16.2176 10.9857 16.2941 10.5499 16.2941C10.2531 16.2941 9.95051 16.2234 9.61586 16.0762C8.83393 15.7333 8.31922 15.5154 6.03673 14.5649C3.44097 13.4837 2.61053 13.1326 2.33262 12.9937C2.07362 12.8629 1.80968 12.6779 1.74966 12.5826L1.69211 12.4954V13.4245C1.69211 14.4893 1.6732 14.4104 1.95933 14.6036C2.27506 14.8157 2.74373 15.0229 5.85995 16.3163C8.03884 17.2207 8.82324 17.5504 9.20968 17.7247C9.99984 18.0791 10.2095 18.1359 10.6502 18.1112C11.0531 18.0923 11.3179 18.0051 12.0151 17.6729C12.742 17.3243 13.2789 17.0851 15.651 16.063C18.9464 14.6439 19.3033 14.4729 19.5541 14.1834L19.6412 14.0856V13.1762C19.6412 12.6747 19.6388 12.2635 19.6355 12.2635C19.6297 12.2635 19.5919 12.3071 19.5483 12.3614Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            Redis (ElastiCache) & SOLR
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DevOps & Infrastructure */}
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-white mb-3">
                      DevOps & Infrastructure
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {/* Docker & Containerization */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                          >
                            <path
                              fill="white"
                              d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            Docker & Containerization
                          </p>
                        </div>
                      </div>

                      {/* LAMP Stack */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-2xl bg-[#e8a02a] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="white"
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.923 8.080c-0.025 0.072-0.141 0.061-0.207 0.082-0.059 0.031-0.107 0.085-0.175 0.085-0.062 0-0.162-0.025-0.17-0.085-0.012-0.082 0.11-0.166 0.187-0.166 0.050-0.024 0.108-0.037 0.169-0.037 0.056 0 0.109 0.011 0.157 0.032l-0.003-0.001c0.022 0.009 0.038 0.030 0.038 0.055 0 0.003-0 0.005-0.001 0.008l0-0v0.025h0.004zM15.611 8.080v-0.027c-0.008-0.025 0.016-0.052 0.036-0.062 0.046-0.020 0.1-0.032 0.157-0.032 0.061 0 0.119 0.014 0.17 0.038l-0.002-0.001c0.079 0 0.2 0.084 0.187 0.169-0.007 0.061-0.106 0.082-0.169 0.082-0.069 0-0.115-0.054-0.176-0.085-0.065-0.023-0.182-0.010-0.204-0.081zM16.963 10.058c-0.532 0.337-1.161 0.574-1.835 0.666l-0.024 0.003c-0.606-0.035-1.157-0.248-1.607-0.588l0.007 0.005c-0.192-0.167-0.35-0.335-0.466-0.419-0.205-0.167-0.18-0.416-0.092-0.416 0.136 0.020 0.161 0.167 0.249 0.25 0.12 0.082 0.269 0.25 0.45 0.416 0.397 0.328 0.899 0.541 1.45 0.583l0.009 0.001c0.654-0.057 1.249-0.267 1.763-0.592l-0.016 0.010c0.244-0.169 0.556-0.417 0.81-0.584 0.195-0.17 0.186-0.334 0.349-0.334 0.16 0.020 0.043 0.167-0.184 0.415-0.246 0.188-0.527 0.381-0.818 0.56l-0.044 0.025zM8.017 21.397h0.012c0.069 0 0.137 0.007 0.203 0.019l-0.007-0.001c0.544 0.14 0.992 0.478 1.273 0.931l0.005 0.009 1.137 2.079 0.004 0.004c0.457 0.773 0.948 1.442 1.497 2.059l-0.011-0.013c0.49 0.52 0.82 1.196 0.909 1.946l0.002 0.016v0.008c-0.012 0.817-0.613 1.491-1.396 1.616l-0.009 0.001c-0.2 0.031-0.432 0.048-0.667 0.048-0.857 0-1.659-0.233-2.347-0.64l0.021 0.012c-1.053-0.441-2.275-0.714-3.555-0.752l-0.015-0c-0.372-0.025-0.696-0.215-0.901-0.496l-0.002-0.003c-0.054-0.174-0.085-0.374-0.085-0.582 0-0.35 0.088-0.679 0.244-0.966l-0.005 0.011v-0.005l0.003-0.004c0.041-0.188 0.065-0.405 0.065-0.627 0-0.274-0.036-0.539-0.104-0.791l0.005 0.021c-0.041-0.15-0.065-0.323-0.065-0.502 0-0.242 0.043-0.473 0.123-0.687l-0.004 0.014c0.2-0.417 0.495-0.5 0.862-0.666 0.438-0.133 0.819-0.334 1.151-0.593l-0.008 0.006h0.002v-0.003c0.32-0.335 0.556-0.751 0.835-1.047 0.195-0.249 0.492-0.41 0.827-0.42l0.002-0zM21.531 21.336c-0.001 0.017-0.001 0.038-0.001 0.059 0 0.743 0.449 1.381 1.091 1.658l0.012 0.005c0.048 0.003 0.104 0.005 0.16 0.005 0.831 0 1.575-0.371 2.075-0.957l0.003-0.004 0.264-0.012c0.053-0.008 0.114-0.012 0.176-0.012 0.341 0 0.652 0.132 0.883 0.348l-0.001-0.001 0.004 0.004c0.249 0.301 0.422 0.673 0.487 1.082l0.002 0.013c0.055 0.505 0.238 0.96 0.517 1.34l-0.005-0.008c0.416 0.356 0.705 0.85 0.793 1.411l0.002 0.013 0.004-0.009v0.022l-0.004-0.015c-0.019 0.327-0.231 0.495-0.622 0.744-1.184 0.497-2.201 1.158-3.077 1.968l0.007-0.006c-0.608 0.792-1.501 1.339-2.523 1.486l-0.021 0.002c-0.074 0.010-0.16 0.016-0.247 0.016-0.768 0-1.428-0.464-1.716-1.126l-0.005-0.012-0.006-0.004c-0.093-0.286-0.146-0.615-0.146-0.956 0-0.416 0.079-0.813 0.224-1.178l-0.008 0.022c0.234-0.668 0.435-1.466 0.568-2.288l0.011-0.083c0.016-0.812 0.104-1.593 0.258-2.35l-0.014 0.083c0.085-0.518 0.381-0.954 0.794-1.225l0.007-0.004 0.056-0.027zM18.8 10.142c0.6 2.147 1.339 4.002 2.247 5.757l-0.079-0.167c0.613 1.090 1.090 2.355 1.363 3.695l0.014 0.084c0.009-0 0.020-0 0.031-0 0.217 0 0.427 0.029 0.627 0.084l-0.017-0.004c0.11-0.395 0.173-0.848 0.173-1.316 0-1.426-0.587-2.716-1.533-3.639l-0.001-0.001c-0.275-0.25-0.29-0.419-0.154-0.419 0.971 0.91 1.689 2.078 2.045 3.394l0.012 0.051c0.089 0.329 0.14 0.707 0.14 1.097 0 0.351-0.041 0.693-0.119 1.020l0.006-0.030c0.074 0.038 0.16 0.067 0.251 0.083l0.006 0.001c1.29 0.667 1.766 1.172 1.537 1.921v-0.054c-0.075-0.004-0.15 0-0.225 0h-0.020c0.189-0.584-0.227-1.031-1.331-1.53-1.143-0.5-2.057-0.42-2.212 0.581-0.011 0.049-0.019 0.106-0.022 0.165l-0 0.003c-0.073 0.030-0.16 0.058-0.25 0.078l-0.011 0.002c-0.508 0.336-0.87 0.859-0.989 1.469l-0.002 0.014c-0.148 0.695-0.241 1.5-0.256 2.323l-0 0.012v0.004c-0.091 0.637-0.23 1.207-0.418 1.753l0.020-0.066c-0.983 0.804-2.251 1.29-3.634 1.29-1.13 0-2.184-0.325-3.073-0.887l0.024 0.014c-0.146-0.253-0.313-0.472-0.503-0.667l0.001 0.001c-0.097-0.16-0.211-0.297-0.342-0.415l-0.002-0.001c0.207-0 0.407-0.031 0.596-0.088l-0.015 0.004c0.18-0.085 0.318-0.232 0.391-0.412l0.002-0.005c0.018-0.093 0.029-0.199 0.029-0.308 0-0.445-0.175-0.848-0.461-1.146l0.001 0.001c-0.619-0.761-1.359-1.395-2.196-1.88l-0.038-0.020c-0.671-0.388-1.179-0.995-1.43-1.722l-0.007-0.022c-0.093-0.318-0.147-0.684-0.147-1.062 0-0.353 0.047-0.695 0.134-1.021l-0.006 0.027c0.377-1.314 0.921-2.461 1.62-3.496l-0.028 0.043c0.134-0.081 0.046 0.169-0.51 1.217-0.474 0.713-0.757 1.59-0.757 2.533 0 0.84 0.224 1.627 0.616 2.306l-0.012-0.022c0.052-1.309 0.345-2.537 0.834-3.659l-0.025 0.065c1.055-1.902 1.854-4.111 2.275-6.452l0.020-0.131c0.060 0.045 0.271 0.169 0.361 0.252 0.272 0.166 0.475 0.416 0.737 0.581 0.267 0.26 0.633 0.42 1.035 0.42 0.021 0 0.042-0 0.063-0.001l-0.003 0c0.049 0.004 0.094 0.008 0.137 0.008 0.459-0.009 0.887-0.132 1.259-0.342l-0.013 0.007c0.362-0.167 0.65-0.417 0.925-0.5h0.006c0.535-0.145 0.983-0.454 1.3-0.869l0.004-0.006zM15.301 7.465c0.003 0 0.006-0 0.009-0 0.569 0 1.094 0.187 1.517 0.503l-0.007-0.005c0.378 0.234 0.814 0.433 1.275 0.574l0.040 0.010h0.004c0.246 0.11 0.449 0.281 0.594 0.494l0.003 0.005v-0.164c0.046 0.092 0.074 0.201 0.074 0.316 0 0.098-0.020 0.191-0.055 0.276l0.002-0.005c-0.288 0.507-0.755 0.884-1.313 1.048l-0.016 0.004v0.002c-0.335 0.169-0.626 0.416-0.968 0.581-0.35 0.21-0.771 0.334-1.222 0.334-0.015 0-0.030-0-0.045-0l0.002 0c-0.022 0.001-0.048 0.002-0.074 0.002-0.174 0-0.342-0.031-0.496-0.089l0.010 0.003c-0.159-0.087-0.29-0.169-0.417-0.257l0.014 0.010c-0.227-0.199-0.477-0.39-0.739-0.565l-0.026-0.016v-0.006h-0.006c-0.375-0.199-0.67-0.504-0.852-0.876l-0.005-0.012c-0.027-0.067-0.042-0.145-0.042-0.226 0-0.218 0.112-0.41 0.281-0.522l0.002-0.001c0.28-0.169 0.475-0.339 0.604-0.42 0.13-0.092 0.179-0.127 0.22-0.164h0.002v-0.004c0.268-0.339 0.623-0.599 1.032-0.746l0.016-0.005c0.174-0.050 0.374-0.079 0.581-0.081h0.001zM13.589 5.333h0.045c0.188 0.004 0.361 0.067 0.501 0.17l-0.002-0.002c0.179 0.159 0.325 0.352 0.425 0.57l0.004 0.011c0.113 0.245 0.183 0.53 0.191 0.83l0 0.003v0.005c0.004 0.046 0.006 0.099 0.006 0.152 0 0.063-0.003 0.126-0.009 0.188l0.001-0.008v0.1c-0.037 0.009-0.070 0.022-0.104 0.030-0.191 0.079-0.352 0.163-0.505 0.258l0.014-0.008c0.008-0.055 0.012-0.118 0.012-0.182 0-0.053-0.003-0.106-0.009-0.158l0.001 0.006v-0.019c-0.018-0.154-0.054-0.295-0.107-0.428l0.004 0.011c-0.041-0.132-0.113-0.244-0.207-0.333l-0-0c-0.055-0.050-0.128-0.081-0.209-0.081-0.007 0-0.014 0-0.021 0.001l0.001-0h-0.026c-0.103 0.011-0.189 0.075-0.232 0.163l-0.001 0.002c-0.077 0.093-0.13 0.208-0.15 0.334l-0 0.004c-0.023 0.086-0.035 0.185-0.035 0.287 0 0.044 0.002 0.088 0.007 0.131l-0-0.005v0.019c0.016 0.154 0.052 0.296 0.104 0.428l-0.004-0.011c0.042 0.132 0.113 0.245 0.207 0.335l0 0c0.012 0.012 0.026 0.022 0.042 0.030l0.001 0c-0.083 0.053-0.155 0.109-0.221 0.171l0.001-0.001c-0.045 0.040-0.1 0.070-0.161 0.084l-0.003 0.001c-0.123-0.147-0.237-0.312-0.335-0.486l-0.008-0.016c-0.113-0.245-0.183-0.529-0.194-0.83l-0-0.004c-0.004-0.048-0.006-0.104-0.006-0.161 0-0.241 0.039-0.473 0.11-0.69l-0.004 0.016c0.074-0.258 0.195-0.481 0.356-0.671l-0.002 0.003c0.127-0.15 0.313-0.245 0.522-0.25h0.001zM17.291 5.259h0.016c0.001 0 0.002 0 0.004 0 0.275 0 0.527 0.093 0.729 0.249l-0.003-0.002c0.229 0.177 0.413 0.4 0.542 0.655l0.005 0.011c0.121 0.266 0.196 0.575 0.207 0.901l0 0.004c0-0.025 0.007-0.050 0.007-0.075v0.131l-0.005-0.026-0.005-0.030c-0.003 0.32-0.071 0.622-0.193 0.897l0.006-0.014c-0.062 0.163-0.152 0.303-0.266 0.419l0-0c-0.030-0.018-0.067-0.035-0.104-0.050l-0.006-0.002c-0.135-0.042-0.253-0.099-0.36-0.169l0.005 0.003c-0.077-0.032-0.169-0.060-0.264-0.081l-0.011-0.002c0.081-0.076 0.156-0.157 0.225-0.243l0.004-0.005c0.063-0.148 0.102-0.319 0.11-0.499l0-0.003v-0.025c0-0.008 0-0.016 0-0.025 0-0.17-0.028-0.333-0.080-0.485l0.003 0.011c-0.063-0.159-0.14-0.296-0.232-0.421l0.004 0.005c-0.087-0.088-0.202-0.148-0.331-0.165l-0.003-0h-0.020c-0.001 0-0.003-0-0.004-0-0.132 0-0.25 0.065-0.322 0.164l-0.001 0.001c-0.116 0.113-0.204 0.253-0.254 0.41l-0.002 0.007c-0.063 0.147-0.104 0.318-0.112 0.496l-0 0.003v0.024c0.002 0.12 0.011 0.236 0.027 0.349l-0.002-0.015c-0.241-0.084-0.547-0.169-0.759-0.252-0.012-0.073-0.020-0.159-0.022-0.247l-0-0.003v-0.025c-0.001-0.020-0.001-0.043-0.001-0.066 0-0.324 0.069-0.631 0.194-0.908l-0.006 0.014c0.106-0.279 0.293-0.508 0.532-0.663l0.005-0.003c0.204-0.156 0.462-0.25 0.742-0.25h0zM16.63 1.004c-0.194 0-0.394 0.010-0.6 0.026-5.281 0.416-3.88 6.007-3.961 7.87-0.050 1.426-0.534 2.729-1.325 3.792l0.013-0.018c-1.407 1.602-2.555 3.474-3.351 5.523l-0.043 0.127c-0.258 0.685-0.408 1.476-0.408 2.302 0 0.285 0.018 0.566 0.052 0.841l-0.003-0.033c-0.056 0.046-0.103 0.102-0.136 0.166l-0.001 0.003c-0.325 0.335-0.562 0.75-0.829 1.048-0.283 0.217-0.615 0.388-0.975 0.494l-0.021 0.005c-0.464 0.139-0.842 0.442-1.075 0.841l-0.005 0.009c-0.104 0.212-0.165 0.461-0.165 0.725 0 0.010 0 0.019 0 0.029l-0-0.001c0.002 0.238 0.026 0.469 0.073 0.693l-0.004-0.023c0.056 0.219 0.088 0.471 0.088 0.73 0 0.17-0.014 0.337-0.041 0.5l0.002-0.018c-0.167 0.313-0.264 0.685-0.264 1.080 0 0.278 0.048 0.544 0.137 0.791l-0.005-0.016c0.273 0.388 0.686 0.662 1.164 0.749l0.011 0.002c1.274 0.107 2.451 0.373 3.561 0.78l-0.094-0.030c0.698 0.415 1.539 0.66 2.436 0.66 0.294 0 0.582-0.026 0.862-0.077l-0.029 0.004c0.667-0.151 1.211-0.586 1.504-1.169l0.006-0.013c0.734-0.004 1.537-0.336 2.824-0.417 0.873-0.072 1.967 0.334 3.22 0.25 0.037 0.159 0.086 0.298 0.148 0.429l-0.006-0.013 0.004 0.004c0.384 0.804 1.19 1.35 2.124 1.35 0.081 0 0.161-0.004 0.24-0.012l-0.010 0.001c1.151-0.17 2.139-0.768 2.813-1.623l0.007-0.009c0.843-0.768 1.827-1.401 2.905-1.853l0.067-0.025c0.432-0.191 0.742-0.585 0.81-1.059l0.001-0.007c-0.059-0.694-0.392-1.299-0.888-1.716l-0.004-0.003v-0.121l-0.004-0.004c-0.214-0.33-0.364-0.722-0.421-1.142l-0.002-0.015c-0.053-0.513-0.278-0.966-0.615-1.307l0 0h-0.004c-0.074-0.067-0.154-0.084-0.235-0.169-0.066-0.047-0.148-0.076-0.237-0.080l-0.001-0c0.195-0.602 0.308-1.294 0.308-2.013 0-0.94-0.193-1.835-0.541-2.647l0.017 0.044c-0.704-1.672-1.619-3.111-2.732-4.369l0.014 0.017c-1.105-1.082-1.828-2.551-1.948-4.187l-0.001-0.021c0.033-2.689 0.295-7.664-4.429-7.671z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs ipadpro:text-sm font-semibold text-white">
                            LAMP Stack (Linux, Apache, MySQL, PHP)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Management */}
                  <div>
                    <h3 className="text-base font-bold text-white mb-3 lg:whitespace-nowrap">
                      Project Management & Workflow
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-2xl bg-[#4a7fb8] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          width="20"
                          height="20"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="invisible_box" data-name="invisible box">
                              <rect width="48" height="48" fill="none" />
                            </g>
                            <g id="Q3_icons" data-name="Q3 icons">
                              <g>
                                <path
                                  d="M44.2,2H23a9.6,9.6,0,0,0,9.5,9.6h3.9v3.7A9.6,9.6,0,0,0,46,24.9V3.8A1.8,1.8,0,0,0,44.2,2Z"
                                  fill="white"
                                />
                                <path
                                  d="M33.7,12.6H12.5A9.6,9.6,0,0,0,22,22.1h4v3.8a9.4,9.4,0,0,0,9.5,9.5v-21A1.8,1.8,0,0,0,33.7,12.6Z"
                                  fill="white"
                                />
                                <path
                                  d="M23.2,23.1H2a9.6,9.6,0,0,0,9.6,9.6h3.9v3.7A9.6,9.6,0,0,0,25,46V24.9A1.8,1.8,0,0,0,23.2,23.1Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs ipadpro:text-sm font-semibold text-white">
                          JIRA & Agile Workflow
                        </p>
                      </div>
                    </div>
                  </div>
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
                  {t.work.history.map(({ title, subTitle, points }, wIndex) => (
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
