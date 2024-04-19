import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Software Engineer Portfolio - Chavindu Sachintha</title>
        <meta
          name="description"
          content="Discover the digital journey with Chavindu Sachintha's software solutions. Explore innovative projects that enhance business efficiency and growth. Download the CV now."
        />
      </Helmet>

      {/* main layout section */}
      <div className="flex w-full flex-col items-center gap-[172px] bg-black-900 py-[49px] md:gap-[129px] md:py-5 sm:gap-[86px]">
        {/* header section */}
        <header className="flex w-[87%] items-center justify-center md:w-full md:p-5">
          <div className="container-xs flex items-center justify-between gap-5 md:flex-col">
            <ul className="flex self-end">
              <li>
                <a href="#">
                  <Heading size="lg" as="h4">
                    Portfolio
                  </Heading>
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-[65px] sm:flex-col">
              <li>
                <a href="#">
                  <div className="flex rotate-[-1deg]">
                    <Heading size="xl" as="h4" className="!text-[25.29px]">
                      <span className="text-white-A700">Home</span>
                      <span className="text-[21.07px] text-white-A700">&nbsp;&nbsp;</span>
                    </Heading>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex self-start">
                    <Heading size="lg" as="h4">
                      <span className="text-white-A700">About</span>
                      <span className="text-xl text-white-A700">&nbsp;&nbsp;</span>
                    </Heading>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex self-start pr-[9px]">
                    <Heading size="lg" as="h4">
                      <span className="text-white-A700">Services</span>
                      <span className="text-xl text-white-A700">&nbsp;</span>
                    </Heading>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="self-end">
                  <Heading size="lg" as="h4">
                    Project
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="self-end">
                  <Heading as="h5">Contact</Heading>
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* hero section */}
        <div className="mx-auto mb-[5px] flex w-full max-w-[1218px] md:p-5">
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            {/* introduction section */}
            <div className="mt-[53px] flex w-[54%] flex-col items-start md:w-full">
              <div className="flex flex-col items-start">
                <Heading size="2xl" as="h1" className="ml-[7px] md:ml-0">
                  Hello It’s Me{" "}
                </Heading>
                <Text size="s" as="p" className="!font-imprintmtshadow">
                  Chavindu Sachintha{" "}
                </Text>
                <div className="mt-[7px] flex items-center gap-[5px]">
                  <Heading size="2xl" as="h2">
                    And I’m a{" "}
                  </Heading>
                  <div className="flex flex-col self-start pt-px">
                    <Heading size="2xl" as="h3">
                      <span className="text-white-A700">&nbsp;</span>
                      <span className="text-deep_purple-A200">Software Engineer&nbsp;</span>
                    </Heading>
                  </div>
                </div>
              </div>
              <Heading as="h4" className="mt-[52px]">
                Embark on a digital journey with our cutting-edge software solution, meticulously crafted to elevate
                your business to new heights. Seamlessly blending innovation and functionality, our project promises to
                streamline operations, boost efficiency, and unlock unparalleled growth opportunities. Join us and
                revolutionize the way you do business
              </Heading>

              {/* social links section */}
              <div className="mt-[99px] flex w-[66%] justify-between gap-5 md:w-full">
                <Img src="images/img_twitter.png" alt="twitter_one" className="h-[40px] w-[17%] object-cover" />
                <Img src="images/img_whatsapp.png" alt="whatsapp_one" className="h-[40px] w-[17%] object-cover" />
                <Img src="images/img_facebook.png" alt="facebook_one" className="h-[40px] w-[17%] object-cover" />
                <Img src="images/img_linkedin.png" alt="linkedin_one" className="h-[40px] w-[17%] object-cover" />
              </div>
              <Heading
                as="h5"
                className="mt-[78px] flex h-[44px] items-center justify-center rounded-[15px] bg-deep_purple-A200 py-[9px] pl-px pr-[11px] !font-bold !text-gray-100"
              >
                Download CV
              </Heading>
            </div>

            {/* profile image section */}
            <div className="relative h-[489px] w-[39%] md:w-full">
              <Img
                src="images/img_whatsapp_image.png"
                alt="whatsappimage"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[489px] w-[92%] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[488px] w-full rounded-[10px] border-[5px] border-solid border-deep_purple-A200 blur-[20.00px] backdrop-opacity-[0.5]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
