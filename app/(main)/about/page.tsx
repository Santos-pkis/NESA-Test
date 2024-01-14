import { panel } from "@/lib/data/about";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <header>
        <div className={`min-h-[44rem] bg-zinc-200 text-white relative py-10`}>
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={"/images/bg/about_.png"}
              alt="hero image"
              width={1240}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#15110999] absolute top-0 left-0 w-full h-full"></div>

          <div className="w-full h-full flex items-center absolute top-0 left-0 overflow-hidden pt-20">
            <div className="container grid md:grid-cols-2 gap-16 items-center -mt-6">
              <div className="flex items-center justify-center">
                <div className="w-4/5 grid place-content-center aspect-square h-auto border-4 border-primaryGold rounded-xl relative overflow-hidden">
                  <Image src={"/images/logos/big_logo.png"} alt="logo" width={500} height={500} />

                  <div className="absolute top-0 left-0 w-full h-full bg-black/30 grid place-content-center">
                    <Image src={"/images/video-play.png"} className="mt-5" alt="play" width={60} height={60} />
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <h1 className="text-5xl font-bold text-midGold">About NESA</h1>
                  <p className="font-semibold text-2xl">The Founding Story</p>
                </div>
                <p className="mt-8 text-white/90">
                  In 2013, NESA was born out of a commitment to address the pressing challenges facing Nigeria&apos;s
                  educational sector. The visionaries at Santos Creations saw an opportunity to uplift educational
                  standards by acknowledging and rewarding those making significant contributions.
                </p>
                <div className="mt-10 flex items-center gap-3 cursor-pointer w-fit">
                  <Image src={"/images/about/play.svg"} className="mt-5" alt="play button" width={80} height={80} />
                  <p className="text-midGold font-semibold">
                    Watch Our <br /> Short Story
                    <div className="w-[6px] inline-block ml-[2px] h-[6px] rounded-full bg-[#18A0FB]"></div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container grid md:grid-cols-2 items-center py-16">
          <div className="space-y-4">
            <h3 className="_under_border font-bold text-sm uppercase">WHY NESA AFRICA</h3>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-2xl">Mission</p>
                <p className="md:pr-8 font-medium leading-7">
                  To ignite transforming change in Nigeria&apos;s EDucation sector, fostering an ecosystem where
                  education, excellence is recognized and celebrated
                </p>
              </div>
              <div>
                <p className="font-bold text-2xl">Vision</p>
                <p className="md:pr-8 font-medium leading-7">
                  To acknowledge and encourage significant contributions that enhances the quality of education in
                  Nigeria, motivating stakeholders to invest, innovate and engage in uplifting the country&apos;s
                  educational standards.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-fit ml-auto">
              <Image src={"/images/about/mission.png"} className="mt-5" alt="mission" width={500} height={500} />
            </div>
          </div>
        </div>

        <section className="py-[10rem] mb-[5rem] text-white relative">
          <Image
            src={"/images/bg/back_.jpeg"}
            alt="dark background"
            className="w-full h-full object-cover -z-[2] absolute top-0 left-0"
            width={1024}
            height={600}
          />

          <div className="bg-[#15110999] absolute top-0 left-0 w-full -z-[1] h-full"></div>

          <div className="space-y-5 container">
            <h3 className="_under_border font-bold max-h-[23rem] text-sm uppercase">WHAT WE DO</h3>
            <p className="font-bold text-4xl text-midGold">LEARN ABOUT OUR WORK</p>
            <p className="text-lg font-medium md:pr-10">
              Addressing Educational Challenges In a country facing infrastructural deficits, outdated curricula, and
              educator motivation issues, NESA Nigeria strives to encourage government bodies, NGOs, UN agencies, CSR
              initiatives, and private entities to play pivotal roles in improving education.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="p-10 rounded-lg bg-lightGold text-darkGold space-y-5">
                <h4 className="font-bold text-2xl">Quarterly Crowdfunding Programme</h4>
                <p>
                  The New Nigeria Education Standard Award, stands at the forefront of educational transformation in
                  Nigeria recognizing and celebrating remarkable contributions in the educational sector
                </p>
              </div>
              {Array.from({ length: 2 }).map((_, id) => (
                <div key={id} className="rounded-lg max-h-[23rem] overflow-hidden relative">
                  <Image
                    src={"/images/about/we_do.png"}
                    alt="what we do"
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-lightGold/30 p-10 text-center">
                    <p className="text-xl font-semibold absolute bottom-10 left-0">
                      Annual Recognition of Educational Champions
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="py-10">
          <h3 className="font-bold text-center text-midGold text-2xl pb-4">
            Meet the passionate individuals leading NESA
          </h3>
          <div className="mt-5">
            <div className="container px-10">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4">
                  {panel.map((judge, id) => (
                    <div key={id}>
                      <div className="h-[20rem] aspect-[5.5/7] w-auto p-4 relative">
                        <Image
                          src={judge.image}
                          alt={"judge - " + judge.name}
                          className="w-full h-full object-cover"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">{judge.name}</p>
                        <p className="text-sm text-zinc-500">{judge.position}</p>
                        <div className="grid place-content-center mt-2">
                          <Linkedin className="text-zinc-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="container flex items-center justify-between mt-12">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, id) => (
                  <div
                    key={id}
                    className={`w-3 h-3 cursor-pointer rounded-full ${id === 0 ? "bg-darkGold" : "bg-zinc-300"}`}
                  ></div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-black">
                <button className="p-3 rounded-lg bg-xlGold">
                  <ArrowLeft size={20} />
                </button>
                <button className="p-3 rounded-lg bg-deepGold">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="container grid md:grid-cols-2 gap-10 py-24">
              <div className="p-10 flex flex-col space-y-10 bg-[#1e1e1e] text-white min-h-[24rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.8589 7.03137H18.1401C17.8637 8.38222 17.1965 9.62211 16.2215 10.5971C15.2465 11.5721 14.0066 12.2393 12.6558 12.5157C12.6552 12.922 12.6552 13.3282 12.6558 13.7345C14.0066 14.011 15.2465 14.6781 16.2215 15.6531C17.1965 16.6281 17.8637 17.868 18.1401 19.2189H26.8589C27.1354 17.868 27.8025 16.6281 28.7775 15.6531C29.7525 14.6781 30.9924 14.011 32.3433 13.7345C32.3437 13.3282 32.3437 12.922 32.3433 12.5157C30.9924 12.2393 29.7525 11.5721 28.7775 10.5971C27.8025 9.62211 27.1354 8.38222 26.8589 7.03137ZM27.9933 4.2245C27.4776 4.21887 26.9301 4.21887 26.347 4.21887H18.652C18.0708 4.21887 17.5214 4.21887 17.0076 4.2245C16.9052 4.21527 16.8021 4.21716 16.7001 4.23012C15.8526 4.24512 15.1008 4.28075 14.4483 4.36887C13.2708 4.52637 12.2076 4.87512 11.3545 5.72825C10.4995 6.58325 10.1508 7.64637 9.99327 8.822C9.90515 9.47637 9.86952 10.2282 9.85452 11.0757C9.84168 11.1771 9.8398 11.2796 9.8489 11.3814C9.84327 11.897 9.84327 12.4464 9.84327 13.0276V13.2226C9.84327 13.8039 9.84327 14.3532 9.8489 14.8689C9.83981 14.9707 9.8417 15.0731 9.85452 15.1745C9.86952 16.0239 9.90515 16.7739 9.99327 17.4264C10.1508 18.6039 10.4995 19.667 11.3545 20.5201C12.2076 21.3751 13.2708 21.7239 14.4483 21.8814C15.1008 21.9695 15.8526 22.0051 16.7001 22.0201C16.8021 22.0333 16.9053 22.0352 17.0076 22.0257C17.5214 22.0314 18.0708 22.0314 18.652 22.0314H26.347C26.9283 22.0314 27.4776 22.0314 27.9933 22.0257C28.095 22.035 28.1975 22.0332 28.2989 22.0201C29.1483 22.0051 29.9002 21.9695 30.5508 21.8814C31.7283 21.7239 32.7914 21.3751 33.6445 20.5201C34.4995 19.667 34.8483 18.6039 35.0058 17.4264C35.0946 16.679 35.1409 15.9271 35.1445 15.1745C35.1573 15.0731 35.1591 14.9707 35.1501 14.8689C35.1558 14.3532 35.1558 13.8039 35.1558 13.2226V13.0276C35.1558 12.4464 35.1558 11.897 35.1501 11.3814C35.1594 11.2796 35.1576 11.1771 35.1445 11.0757C35.1406 10.3231 35.0943 9.57129 35.0058 8.82387C34.8483 7.64637 34.4995 6.58325 33.6464 5.73012C32.7914 4.87512 31.7283 4.52637 30.5526 4.36887C29.8046 4.28023 29.0522 4.23391 28.2989 4.23012C28.1975 4.21723 28.0951 4.21535 27.9933 4.2245ZM29.8008 7.11387C30.0131 7.67482 30.3422 8.18424 30.7663 8.60835C31.1904 9.03246 31.6998 9.36157 32.2608 9.57387C32.249 9.44859 32.2346 9.32356 32.2176 9.19887C32.1033 8.33262 31.9008 7.96137 31.6551 7.71762C31.4114 7.47387 31.042 7.27325 30.1776 7.15512C30.0529 7.13884 29.9279 7.12508 29.8027 7.11387M32.2626 16.6764C31.7017 16.8887 31.1923 17.2178 30.7682 17.6419C30.3441 18.066 30.0149 18.5754 29.8027 19.1364C29.9339 19.1251 30.0595 19.1101 30.1776 19.0951C31.0439 18.977 31.4151 18.7764 31.6589 18.5326C31.9026 18.2889 32.1051 17.9176 32.2214 17.0514C32.2364 16.9332 32.2514 16.8076 32.2626 16.6764ZM15.2001 19.1364C14.9879 18.5754 14.6587 18.066 14.2346 17.6419C13.8105 17.2178 13.3011 16.8887 12.7401 16.6764C12.7533 16.8076 12.7664 16.9332 12.7833 17.0514C12.8995 17.9176 13.1001 18.2889 13.3458 18.5326C13.5895 18.7764 13.9589 18.977 14.8233 19.0951C14.9433 19.1101 15.0689 19.1251 15.2001 19.1364ZM12.7401 9.57387C13.3011 9.36157 13.8105 9.03246 14.2346 8.60835C14.6587 8.18424 14.9879 7.67482 15.2001 7.11387C15.0689 7.12512 14.9433 7.14012 14.8251 7.157C13.9589 7.27325 13.5876 7.47387 13.3439 7.7195C13.1001 7.96325 12.8995 8.33262 12.7814 9.197L12.7401 9.57387ZM22.4995 12.6564C22.3752 12.6564 22.256 12.7058 22.1681 12.7937C22.0802 12.8816 22.0308 13.0008 22.0308 13.1251C22.0308 13.2494 22.0802 13.3687 22.1681 13.4566C22.256 13.5445 22.3752 13.5939 22.4995 13.5939C22.6238 13.5939 22.7431 13.5445 22.831 13.4566C22.9189 13.3687 22.9683 13.2494 22.9683 13.1251C22.9683 13.0008 22.9189 12.8816 22.831 12.7937C22.7431 12.7058 22.6238 12.6564 22.4995 12.6564ZM19.2183 13.1251C19.2183 12.2549 19.564 11.4203 20.1793 10.8049C20.7947 10.1896 21.6293 9.84387 22.4995 9.84387C23.3698 9.84387 24.2044 10.1896 24.8197 10.8049C25.4351 11.4203 25.7808 12.2549 25.7808 13.1251C25.7808 13.9954 25.4351 14.83 24.8197 15.4453C24.2044 16.0607 23.3698 16.4064 22.4995 16.4064C21.6293 16.4064 20.7947 16.0607 20.1793 15.4453C19.564 14.83 19.2183 13.9954 19.2183 13.1251ZM16.282 27.0901C19.7808 26.4132 23.5251 26.5651 26.557 28.3726C26.9808 28.6257 27.382 28.9426 27.7289 29.3326C28.4339 30.1257 28.7976 31.1082 28.8145 32.0945C29.1726 31.8639 29.5326 31.607 29.8964 31.3314L33.2864 28.772C34.1353 28.1479 35.1615 27.8112 36.2152 27.8112C37.2688 27.8112 38.295 28.1479 39.1439 28.772C40.7095 29.9532 41.3358 32.0776 40.2127 33.8776C39.4158 35.1545 38.2158 36.9226 36.9933 38.0551C35.7558 39.1989 33.9989 40.1626 32.6695 40.8039C31.0533 41.5839 29.3095 42.0151 27.6126 42.2889C24.1439 42.8514 20.5364 42.7651 17.1089 42.0582C15.3414 41.6945 13.5416 41.5104 11.737 41.5089H7.49952C7.12656 41.5089 6.76888 41.3607 6.50515 41.097C6.24143 40.8333 6.09327 40.4756 6.09327 40.1026C6.09327 39.7297 6.24143 39.372 6.50515 39.1083C6.76888 38.8445 7.12656 38.6964 7.49952 38.6964H11.737C13.7283 38.6964 15.7401 38.9045 17.677 39.3039C20.8011 39.9449 24.0154 40.0154 27.1645 39.512C28.717 39.2607 30.1683 38.8876 31.447 38.2707C32.7276 37.652 34.1676 36.8382 35.0808 35.9926C36.0051 35.1357 37.0383 33.6526 37.8276 32.3889C38.0658 32.0064 38.032 31.457 37.4489 31.0164C36.7551 30.4914 35.6733 30.4914 34.9814 31.0164L31.5933 33.5757C30.2395 34.5976 28.5745 35.6907 26.5101 36.0207C26.2939 36.055 26.077 36.085 25.8595 36.1107C24.5458 36.2623 23.2197 36.2749 21.9033 36.1482C21.7161 36.1353 21.5335 36.0851 21.3661 36.0005C21.1987 35.9159 21.0499 35.7987 20.9284 35.6557C20.807 35.5128 20.7154 35.347 20.659 35.1681C20.6026 34.9892 20.5826 34.8008 20.6001 34.6141C20.6176 34.4273 20.6723 34.2459 20.761 34.0806C20.8496 33.9153 20.9705 33.7695 21.1164 33.6516C21.2623 33.5337 21.4303 33.4462 21.6105 33.3942C21.7907 33.3422 21.9795 33.3268 22.1658 33.3489C23.2059 33.4499 24.2535 33.448 25.2933 33.3432L25.3495 33.3376C25.5245 33.2291 25.6731 33.083 25.7848 32.91C25.8964 32.7371 25.9683 32.5414 25.9952 32.3373C26.0221 32.1332 26.0034 31.9256 25.9404 31.7296C25.8773 31.5336 25.7716 31.3541 25.6308 31.2039C25.4814 31.0394 25.3074 30.899 25.1152 30.7876C22.9008 29.4657 19.942 29.2464 16.8164 29.8501C13.7634 30.4643 10.8692 31.6992 8.31327 33.4782C8.16258 33.5851 7.99232 33.6612 7.8122 33.7023C7.63209 33.7434 7.44565 33.7486 7.26353 33.7176C7.08141 33.6866 6.90718 33.62 6.75078 33.5217C6.59438 33.4234 6.45889 33.2952 6.35202 33.1445C6.24516 32.9938 6.16902 32.8235 6.12796 32.6434C6.0869 32.4633 6.08172 32.2769 6.11271 32.0947C6.1437 31.9126 6.21026 31.7384 6.30859 31.582C6.40691 31.4256 6.53508 31.2901 6.68577 31.1832C9.56886 29.1732 12.8357 27.7798 16.282 27.0901Z"
                    fill="#E0AA3E"
                  />
                </svg>

                <div className="space-y-4 max-w-[20rem]">
                  <p className="font-bold text-midGold">GIVE MONEY</p>

                  <p className="font-semibold text-xl">Will you change the life of an African Child today?</p>

                  <p className="text-sm font-medium">
                    Invest in people, invest in their growth <br />
                    Invest in a stronger educational standard
                  </p>
                </div>

                <p className="_under_border font-bold max-h-[23rem] text-sm uppercase">DONATE</p>
              </div>
              <div className="p-10 flex flex-col space-y-10 bg-[#1e1e1e] text-white min-h-[26rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                  <path
                    d="M5.625 20.625C3.5625 20.625 1.875 22.3125 1.875 24.375V37.5C1.875 39.5625 3.5625 41.25 5.625 41.25C7.6875 41.25 9.375 39.5625 9.375 37.5V24.375C9.375 22.3125 7.6875 20.625 5.625 20.625ZM18.75 9.9375C18.75 6.46875 21.4688 3.75 24.9375 3.75C26.8875 3.75 28.7812 4.66875 30 6.09375C31.2188 4.66875 33.1125 3.75 35.0625 3.75C38.5312 3.75 41.25 6.46875 41.25 9.9375C41.25 13.875 36.5625 18.3938 31.2563 23.2313C30.9106 23.5475 30.4591 23.7228 29.9906 23.7228C29.5222 23.7228 29.0706 23.5475 28.725 23.2313C23.4375 18.3938 18.75 13.875 18.75 9.9375ZM37.4813 31.875H24.675C24.4637 31.8741 24.2543 31.836 24.0562 31.7625L21.3 30.8063C21.185 30.7663 21.0791 30.704 20.9884 30.6228C20.8977 30.5416 20.824 30.4432 20.7717 30.3333C20.7194 30.2234 20.6894 30.1042 20.6835 29.9826C20.6776 29.861 20.696 29.7394 20.7375 29.625C20.9062 29.1375 21.45 28.875 21.9375 29.0625L24.0375 29.8688C24.2437 29.9438 24.4875 30 24.7125 30H29.6438C30.8625 30 31.8562 29.0062 31.8562 27.7875C31.8562 26.8687 31.275 26.0438 30.4125 25.7062L17.4375 20.8687C17.025 20.7 16.575 20.625 16.125 20.625H13.125V37.5375L25.0688 40.9313C25.8375 41.1562 26.6625 41.1188 27.4125 40.8375L41.25 35.625C41.25 33.5438 39.5625 31.875 37.4813 31.875Z"
                    fill="#E0AA3E"
                  />
                </svg>

                <div className="space-y-4 max-w-[20rem]">
                  <p className="font-bold text-midGold">GIVE TIME</p>

                  <p className="font-semibold text-xl">
                    Do you know any organization contributing to the Education Sector?
                  </p>

                  <p className="text-sm font-medium">
                    Nominate your educational Champions <br />
                    Share to your friends to spotlight your <br /> champions
                  </p>
                </div>

                <p className="_under_border font-bold max-h-[23rem] text-sm uppercase">NOMINATE</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
