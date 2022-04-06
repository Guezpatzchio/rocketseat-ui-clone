import { Button } from "@packages/react";
import { ReactSVG } from "react-svg";
import {
  HeroSectionRoot,
  HeroSectionSpan,
  HeroSectionSubtitle,
  HeroSectionTitle,
  HeroSectionVideo,
  HeroSectionWrapper,
} from "./styles";

export function HeroSectionContent() {
  return (
    <HeroSectionRoot>
      <HeroSectionWrapper>
        <HeroSectionSpan>
          <div className={"icon"}>
            <ReactSVG src={"/icons/emoji.svg"} />
          </div>
          Hello World
        </HeroSectionSpan>
        <HeroSectionTitle>
          Acelere cada etapa da sua carreira em programação
        </HeroSectionTitle>
        <HeroSectionSubtitle>
          O mapa completo para você impulsionar sua evolução e acessar as
          melhores oportunidades da sua carreira como dev.
        </HeroSectionSubtitle>
        <Button
          size={"lg"}
          rightIcon={
            <ReactSVG src={"/icons/arrow-right.svg"} className={"buttonIcon"} />
          }
        >
          EMBARCAR NO FOGUETE
        </Button>
      </HeroSectionWrapper>
      <HeroSectionVideo
        src={
          "https://storage.googleapis.com/golden-wind/site/hero-home-video.mp4"
        }
        muted
        loop
        autoPlay
      />
    </HeroSectionRoot>
  );
}
