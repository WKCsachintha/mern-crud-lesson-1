import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";

const data = [
  { unsplashone: "images/img_unsplash_lj9ky8pih3e.png" },
  { unsplashone: "images/img_unsplash_ikuygcfmfw4.png" },
  { unsplashone: "images/img_unsplash_6sal6aq4owi.png" },
  { unsplashone: "images/img_unsplash_fx34keqiew.png" },
  { unsplashone: "images/img_unsplash_srewpufo2c0.png" },
  { unsplashone: "images/img_unsplash_8qeb0fte9vw.png" },
];

export default function DesktopOneThreePage() {
  return (
    <>
      <Helmet>
        <title>Explore Our Projects - Innovative Creations</title>
        <meta
          name="description"
          content="Discover our projects and explore the innovative creations that set us apart. Dive into our portfolio to see our work in action."
        />
      </Helmet>

      {/* projects section */}
      <div className="flex w-full flex-col items-center justify-center gap-[125px] bg-black-900_ba px-14 py-[61px] md:gap-[93px] md:p-5 sm:gap-[62px]">
        {/* project title section */}
        <div className="container-sm">
          <div className="mt-[30px] flex flex-col items-center px-[484px] md:px-5">
            <Heading size="4xl" as="h1">
              our projects
            </Heading>
          </div>
        </div>

        {/* image gallery section */}
        <div className="container-sm flex flex-col items-end justify-end">
          <div className="mb-9 mt-[125px] grid w-[97%] grid-cols-3 gap-[54px] md:grid-cols-2 sm:grid-cols-1">
            {data.map((d, index) => (
              <Img
                key={"desktopone" + index}
                src="images/img_unsplash_lj9ky8pih3e.png"
                alt="unsplash_one"
                className="h-[261px] w-full rounded-[15px] object-cover md:h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
