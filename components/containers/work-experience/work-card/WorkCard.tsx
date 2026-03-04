import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Calenda from "@/assets/svg/calenda.svg";

interface IWorkCard {
  backdrop: StaticImageData;
  logo: StaticImageData;
  jobTitle: string;
  duration: string;
  description: string;
}

export default function WorkCard({
  backdrop,
  logo,
  jobTitle,
  duration,
  description,
}: IWorkCard) {
  return (
    <Card className="pt-0 rounded-4xl">
      <div>
        <Image src={backdrop} alt="company image" />
      </div>

      <CardContent className="flex gap-2 items-center">
        <Image src={Calenda} alt="calenda" className="h-6 w-4.5" />
        <p className="font-bold">{duration}</p>
      </CardContent>

      <CardContent>
        <Image src={logo} alt="logo company" />
      </CardContent>

      <CardContent>
        <h1 className="font-bold text-2xl mb-4">{jobTitle}</h1>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
