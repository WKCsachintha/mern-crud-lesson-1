import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";

export default function DesktopOneOnePage() {
  return (
    <>
      <Helmet>
        <title>About Chavindu Sachintha - Software Engineer & Innovator</title>
        <meta
          name="description"
          content="Meet Chavindu Sachintha, a software engineer with a passion for innovation. Dive into a portfolio showcasing mobile apps and web platforms that redefine user experience."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full justify-center bg-black-900_ba px-14 py-[77px] md:p-5">
        {/* profile section */}
        <div className="mx-auto mb-[142px] mt-[65px] flex w-full max-w-[1263px] items-center justify-between gap-5 md:flex-col">
          {/* contact info section */}
          <div className="relative h-[626px] w-[36%] md:w-full">
            <Img
              src="images/img_whatsapp_image_625x460.png"
              alt="whatsappimage"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[625px] w-full rounded-[30px] object-cover"
            />
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto h-[563px] w-[97%] rounded-[30px] border-[20px] border-solid border-deep_purple-A200 blur-[20.00px] backdrop-opacity-[0.5]" />
          </div>

          {/* about section */}
          <div className="flex w-[50%] flex-col gap-[51px] md:w-full sm:gap-[25px]">
            {/* personal info section */}
            <div className="flex flex-col items-start gap-[3px]">
              <Heading size="4xl" as="h1">
                About Me
              </Heading>
              <Heading size="3xl" as="h2" className="!text-deep_purple-A200">
                Software Engineer
              </Heading>
            </div>

            {/* introduction text section */}
            <Heading as="h3" className="!font-bold">
              <>
                Welcome to the world of software innovation! I&#39;m Chavindu Sachintha, a passionate software engineer
                with a knack for turning ideas into reality. With a blend of creativity and technical expertise, I
                specialize in crafting intuitive solutions that delight users and drive results.
                <br />
                <br />
                In my portfolio, you&#39;ll find a showcase of my proudest achievements, from sleek mobile apps to
                robust web platforms. Each project is a testament to my commitment to excellence and my dedication to
                delivering software that exceeds expectations.
                <br />
                <br />
                Whether you&#39;re a startup looking to disrupt the market or an established business seeking to enhance
                your digital presence, I&#39;m here to bring your vision to life. Let&#39;s collaborate to create
                something extraordinary together!
                <br />
                <br />
                Explore my portfolio and let&#39;s embark on a journey of innovation and success. Your next great
                software solution starts here.
              </>
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
