import { Button } from "@packages/react";
import { ReactSVG } from "react-svg";
import * as HeroSectionComponent from "./styles";

export function HeroSectionContent() {
  return (
    <>
      <HeroSectionComponent.Root>
        <HeroSectionComponent.Content>
          <HeroSectionComponent.Span>
            <div className={"icon"}>
              <ReactSVG src={"/icons/emoji.svg"} />
            </div>
            Hello World
          </HeroSectionComponent.Span>
          <HeroSectionComponent.Title>
            Acelere cada etapa da sua carreira em programação
          </HeroSectionComponent.Title>
          <HeroSectionComponent.Subtitle>
            O mapa completo para você impulsionar sua evolução e acessar as
            melhores oportunidades da sua carreira como dev.
          </HeroSectionComponent.Subtitle>
          <Button
            size={"lg"}
            rightIcon={
              <ReactSVG
                src={"/icons/arrow-right.svg"}
                className={"buttonIcon"}
              />
            }
          >
            EMBARCAR NO FOGUETE
          </Button>
        </HeroSectionComponent.Content>
      </HeroSectionComponent.Root>
      <HeroSectionComponent.Video
        src={
          "https://storage.googleapis.com/golden-wind/site/hero-home-video.mp4"
        }
        muted
        loop
        autoPlay
      />
    </>
  );
}
