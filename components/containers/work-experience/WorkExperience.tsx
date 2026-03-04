import { Button } from "@/components/ui/button";
import WorkCard from "./work-card/WorkCard";

/* images */
import AdobeBackdrop from "@/assets/img/work-experience/Image.png";
import AdobeLogo from "@/assets/svg/adobe.svg";
import DribbbleBackdrop from "@/assets/img/work-experience/image1.png";
import DribbbleLogo from "@/assets/svg/dribbble.svg";
import DropBoxBackdrop from "@/assets/img/work-experience/image2.png";
import DropboxLogo from "@/assets/svg/dropbox.svg";
import PaypalBackdrop from "@/assets/img/work-experience/image3.png";
import PaypalLogo from "@/assets/svg/paypal.svg";

import { Timeline } from "@/components/ui/timeline";

const dataTimeLine = [
  {
    content: (
      <WorkCard
        jobTitle="Frontend Engineer"
        backdrop={AdobeBackdrop}
        logo={AdobeLogo}
        description="Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences"
        duration="2025 - Present"
      />
    ),
  },
  {
    content: (
      <WorkCard
        jobTitle="Frontend Engineer"
        backdrop={DribbbleBackdrop}
        logo={DribbbleLogo}
        description="Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences"
        duration="2025 - Present"
      />
    ),
  },
  {
    content: (
      <WorkCard
        jobTitle="Frontend Engineer"
        backdrop={DropBoxBackdrop}
        logo={DropboxLogo}
        description="Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences"
        duration="2025 - Present"
      />
    ),
  },
  {
    content: (
      <WorkCard
        jobTitle="Frontend Engineer"
        backdrop={PaypalBackdrop}
        logo={PaypalLogo}
        description="Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences"
        duration="2025 - Present"
      />
    ),
  },
];

export default function WorkExperience() {
  return (
    <main className="mt-8">
      <div className="flex flex-col items-center main-spacing">
        <Button
          variant={"outline"}
          size={"sm"}
          className="bg-white rounded-full px-4 mb-2"
        >
          <p className="text-black font-bold">Work Experience</p>
        </Button>

        <div>
          <h1 className="font-extrabold text-3xl text-center">
            A timeline of companies and roles that helped shape my skills.
          </h1>
        </div>
      </div>

      <Timeline data={dataTimeLine} />
    </main>
  );
}
