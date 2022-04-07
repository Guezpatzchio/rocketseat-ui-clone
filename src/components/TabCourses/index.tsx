import { Button } from "@packages/react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import * as TabCoursesComponent from "./styles";

type TabCoursesProps = {
  title: string;
  text: string;
  rocketUrl: string;
  logo: string;
  href: string;
  colors: {
    color: string;
    background: string;
  };
  prerequisites: string;
};

export function TabCourses({
  colors,
  href,
  prerequisites,
  logo,
  rocketUrl,
  text,
  title,
}: TabCoursesProps) {
  return (
    <TabCoursesComponent.Root>
      <TabCoursesComponent.Rocket>
        <ReactSVG src={rocketUrl} />
      </TabCoursesComponent.Rocket>
      <TabCoursesComponent.Content>
        <div className={"image"}>
          <img src={logo} alt={"Imagem do curso"} />
        </div>
        <h4>{title}</h4>
        <p>{text}</p>
        <TabCoursesComponent.Footer>
          <Link href={href}>
            <a>
              <Button
                css={{
                  $$backgroundColor: `${colors.background}`,
                  $$hoverColor: `${colors.background}`,
                  $$color: `${colors.color}`,
                }}
                size={"lg"}
              >
                SAIBA MAIS
              </Button>
            </a>
          </Link>
          <span dangerouslySetInnerHTML={{ __html: prerequisites }} />
        </TabCoursesComponent.Footer>
      </TabCoursesComponent.Content>
    </TabCoursesComponent.Root>
  );
}
