import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";
import DesktopOneTwoStacksupport from "../../components/DesktopOneTwoStacksupport";

export default function DesktopOneTwoPage() {
  return (
    <>
      <Helmet>
        <title>Our Services - Software, Web & Mobile Development</title>
        <meta
          name="description"
          content="Explore our services in software development, web design, and mobile app creation. Learn how we build powerful applications tailored to your business needs."
        />
      </Helmet>

      {/* services section */}
      <div className="flex w-full justify-center bg-black-900 p-[41px] md:p-5">
        <div className="mb-[252px] mt-[57px] flex w-[96%] flex-col items-center gap-[152px] md:w-full md:gap-[114px] sm:gap-[76px]">
          {/* our services header section */}
          <div className="container-xs flex flex-col items-center px-[487px] md:p-5 md:px-5">
            <Heading size="4xl" as="h1">
              our services
            </Heading>
          </div>
          <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            {/* software development section */}
            <DesktopOneTwoStacksupport className="relative h-[431px] w-[31%] pb-[27px] md:h-auto md:w-full sm:pb-5" />

            {/* web development section */}
            <div className="flex h-[400px] w-[31%] flex-col items-start rounded-[20px] bg-[url(/public/images/img_rectangle_1.png)] bg-cover bg-no-repeat p-[13px] md:h-auto md:w-full">
              <Img
                src="images/img_react.png"
                alt="react_one"
                className="ml-[98px] mt-2.5 h-[59px] w-[33%] object-cover md:ml-0"
              />
              <Heading size="md" as="h2" className="ml-6 mt-[17px] !text-deep_purple-A200 md:ml-0">
                Web Development
              </Heading>
              <Text as="p" className="ml-[7px] mt-[27px] w-[79%] md:ml-0 md:w-full">
                Web development offers a wide range of opportunities and challenges, from building simple static
                websites to creating complex web applications with real-time features and large user bases. It&#39;s a
                dynamic and constantly evolving field, with new technologies and best practices emerging regularly
              </Text>
              <Button shape="round" className="mb-[71px] mt-[17px] min-w-[85px] font-bold">
                Read more
              </Button>
            </div>

            {/* mobile app development section */}
            <div className="flex w-[31%] flex-col items-start gap-[25px] rounded-[20px] bg-gradient1 p-[33px] md:w-full sm:p-5">
              <div className="flex w-[84%] flex-col gap-[23px] self-center md:w-full">
                <div className="flex items-center gap-[30px]">
                  <div className="relative h-[47px] flex-1">
                    <Img
                      src="images/img_ios_logo.png"
                      alt="ioslogo_one"
                      className="absolute left-[0.00px] top-[0.00px] m-auto h-[45px] w-[52%] object-cover"
                    />
                    <Img
                      src="images/img_android_os.png"
                      alt="androidos_one"
                      className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[45px] w-[56%] object-cover"
                    />
                  </div>
                  <Img src="images/img_mobile.png" alt="mobile_one" className="h-[45px] w-[36%] object-cover" />
                </div>
                <Heading size="md" as="h3" className="!text-deep_purple-A200">
                  Mobile App Development
                </Heading>
              </div>
              <div className="mb-[45px] flex w-[91%] flex-col items-start gap-[21px] md:w-full">
                <Text as="p">
                  Mobile app development involves creating software applications that run on mobile devices such as
                  smartphones and tablets. Here&#39;s an overview of the key components and steps involved in mobile app
                  development
                </Text>
                <Button shape="round" className="min-w-[85px] font-bold">
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
