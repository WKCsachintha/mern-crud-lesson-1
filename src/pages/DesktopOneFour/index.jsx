import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Heading } from "../../components";

export default function DesktopOneFourPage() {
  return (
    <>
      <Helmet>
        <title>Get in Touch - Contact Our Team Today</title>
        <meta
          name="description"
          content="Reach out to us with your inquiries. Fill in your contact details and message, and our team will get back to you promptly."
        />
      </Helmet>

      {/* contact section */}
      <div className="flex w-full flex-col items-center justify-center gap-[75px] bg-black-900 py-[65px] md:gap-14 md:py-5 sm:gap-[37px]">
        {/* contact heading section */}
        <div className="container-xs mt-[11px] flex flex-col items-end pl-14 pr-[482px] md:p-5 md:px-5">
          <Heading size="4xl" as="h1">
            Contact Me
          </Heading>
        </div>

        {/* contact form section */}
        <div className="container-xs flex flex-col md:p-5">
          {/* name input group section */}
          <div className="flex flex-col gap-[49px]">
            <div className="flex gap-8 md:flex-col">
              <Input
                shape="round"
                color="black_900_ba_blue_gray_700_ba"
                type="text"
                name="firstName"
                placeholder={`First Name`}
                className="w-full sm:px-5"
              />
              <Input
                shape="round"
                color="black_900_ba_blue_gray_700_ba"
                type="text"
                name="lastName"
                placeholder={`Last Name`}
                className="w-full sm:px-5"
              />
            </div>

            {/* contact details group section */}
            <div className="flex gap-10 md:flex-col">
              <Input
                shape="round"
                color="black_900_ba_blue_gray_700_ba"
                type="number"
                name="mobileNumber"
                placeholder={`Mobile Number`}
                className="w-full sm:px-5"
              />
              <Input
                shape="round"
                color="black_900_ba_blue_gray_700_ba"
                type="email"
                name="email"
                placeholder={`Emaile Address`}
                className="w-full sm:px-5"
              />
            </div>
          </div>
          <TextArea
            shape="round"
            name="your_massage"
            placeholder={`Your Massage`}
            className="mt-[33px] font-medium text-gray-600 sm:p-5"
          />

          {/* submit button container section */}
          <div className="mt-[55px] flex flex-col items-start px-4">
            <Button size="sm" className="min-w-[178px] rounded-[15px] font-medium sm:px-5">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
