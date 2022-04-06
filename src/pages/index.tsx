import {
  ModalComponent,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
} from "@packages/react";
import { Button } from "@packages/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@packages/react";
import { HeroSectionContent } from "components/HeroSectionContent";
import { NavigationMenuCard } from "components/NavigationMenuCard";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";

import { Header, HeroSection, Main } from "styles/pages/home";

export default function Home() {
  return (
    <>
      <Header>
        <div className="wrapper">
          <Link href={"/"}>
            <a>
              <ReactSVG className={"logo"} src={"/rocketseat.svg"} />
            </a>
          </Link>

          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Planos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Programas <span></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={"submenu"}>
                  <NavigationMenuCard
                    href={"#"}
                    icon={"/icons/discover-reduced.svg"}
                    text={"Para você que está começando do zero."}
                  />
                  <NavigationMenuCard
                    href={"#"}
                    icon={"/icons/ignite-reduced.svg"}
                    text={"Para você se aperfeiçoar e acelerar."}
                  />
                  <NavigationMenuCard
                    href={"#"}
                    icon={"/icons/expertsclub-reduced.svg"}
                    text={"Para você continuar avançando."}
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Conteúdo</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>A Rocketseat</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
          <div className={"buttons"}>
            <Button
              className={"enterButton"}
              leftIcon={
                <ReactSVG className={"buttonIcon"} src="/icons/user.svg" />
              }
              variant={"tertiary"}
            >
              ENTRAR
            </Button>
            <Button outlined>CONHECER PLANOS</Button>
          </div>
        </div>
      </Header>
      <Main>
        <HeroSection>
          <Image src={"/images/hero.webp"} layout={"fill"} objectFit={"cover"} />
          <HeroSectionContent />
        </HeroSection>
      </Main>

      {/* <ModalComponent>
        <ModalTrigger asChild>
          <Button>Click</Button>
        </ModalTrigger>

        <ModalWrapper>
          <ModalContent>Olá Mundo</ModalContent>
        </ModalWrapper>
      </ModalComponent> */}
      {/* <div style={{ height: "200vh" }} /> */}
    </>
  );
}
