import React from "react";
import { Heading, Text, Img } from "./..";

export default function DesktopOneTwoStacksupport({
  softwaretext = "Software Development",
  descriptiontext = "Desktop software development offers several advantages, including greater control over hardware resources, access to native APIs and system functionalities, and the ability to create powerful and feature-rich applications.",
  readmorelink = "Read more",
  readmoreonelink = "Read more",
  ...props
}) {
  return (
    <div {...props}>
      <Img src="images/img_rectangle_1.png" alt="image" className="h-[403px] w-full rounded-[20px] object-cover" />
      <div className="absolute left-0 right-0 top-[10%] m-auto flex w-[72%] flex-col gap-[23px]">
        <Img src="images/img_support.png" alt="support_one" className="ml-20 h-[44px] w-[38%] object-cover md:ml-0" />
        <div className="flex flex-col items-start">
          <Heading size="md" as="h1" className="!text-deep_purple-A200">
            {softwaretext}
          </Heading>
          <Text as="p" className="mt-[22px]">
            {descriptiontext}
          </Text>
          <div className="mt-2 flex rounded-[11px] bg-deep_purple-A200 blur-[20.00px] backdrop-opacity-[0.5]">
            <div className="flex flex-col">
              <a href="#">
                <Heading size="xs" as="h2">
                  {readmorelink}
                </Heading>
              </a>
              <a href="#" className="relative mt-[-15px]">
                <Heading size="xs" as="h3">
                  {readmoreonelink}
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
