import { Button } from "@packages/react";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import * as TabCoursesComponent from "./styles";

type TabCoursesProps = {
  title: string;
  text: string;
  imageUrl: string;
  href: string;
  btnText: string;
  colors: {
    background: string;
    color?: string;
  };
  prerequisites: string;
};

export function TabCourses({
  colors,
  href,
  prerequisites,
  imageUrl,
  text,
  title,
  btnText,
}: TabCoursesProps) {
  return (
    <TabCoursesComponent.Root>
      <TabCoursesComponent.Content>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className={"buttonWrapper"}>
          <Button
            css={{
              $$backgroundColor: `${colors.background}`,
              $$hoverColor: `${colors.background}`,
              $$color: colors.color ? `${colors.color}` : `$colors$white`,
            }}
            size={"lg"}
            rightIcon={
              <div className={"buttonIcon"}>
                <ReactSVG src={"/icons/arrow-up-right.svg"} />
              </div>
            }
          >
            {btnText}
          </Button>
        </div>
        <TabCoursesComponent.Testimonial>
          
        </TabCoursesComponent.Testimonial>
      </TabCoursesComponent.Content>
      <TabCoursesComponent.Image>
        <Image src={imageUrl} height={466} width={516} />
      </TabCoursesComponent.Image>
    </TabCoursesComponent.Root>
  );
}
