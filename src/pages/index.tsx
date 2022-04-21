import {
  ModalComponent,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@packages/react";
import { Button } from "@packages/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@packages/react";
import { HeroSectionContent } from "components/HeroSection";
import { NavigationMenuCard } from "components/NavigationMenuCard";
import { Slogan } from "components/Slogan";
import { TabCourses } from "components/TabCourses";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";

import { Header, HeroSection, Main } from "styles/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rocketseat · Evolua rápido como a tecnologia.</title>
      </Head>
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
          <Image
            src={"/images/hero.webp"}
            layout={"fill"}
            objectFit={"cover"}
            alt={"Hero Section Background"}
            placeholder={"blur"}
            blurDataURL={"/images/hero.webp"}
          />
          <HeroSectionContent />
        </HeroSection>
        <Slogan />
        <section>
          <Tabs defaultValue="ignite" orientation="vertical">
            <TabsList aria-label="courses">
              <TabsTrigger value="ignite">
                <ReactSVG src={"/icons/ignite-reduced.svg"} />
              </TabsTrigger>
              <TabsTrigger value="expertsclub">
                <ReactSVG src={"/icons/expertsclub-reduced.svg"} />
              </TabsTrigger>
              <TabsTrigger value="discover">
                <ReactSVG src={"/icons/discover-reduced.svg"} />
              </TabsTrigger>
              <TabsTrigger value="explorer">
                <ReactSVG src={"/icons/explorer-reduced.svg"} />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ignite">
              <TabCourses
                href={"#"}
                colors={{
                  background: "$colors$ignite-mid",
                }}
                prerequisites={
                  "<strong>Pré-requisito: </strong>ter uma base sólida no desenvolvimento web."
                }
                text={
                  "Especialize-se em stacks específicas amplamente utilizadas e valorizadas no mercado como React, React Native, Node.js e Elixir."
                }
                title={
                  "Programa de especialização para acelerar sua carreira"
                }
                imageUrl={"/images/dev-coding-ignite.webp"}
                btnText={"CONHECER O IGNITE"}
              />
            </TabsContent>
            <TabsContent value="expertsclub">
              <TabCourses
                href={"#"}
                colors={{
                  background: "#db3a2c",
                }}
                prerequisites={
                  "Aulas avançadas para devs que nunca param de evoluir."
                }
                text={
                  "O Experts Clube é o primeiro clube de aprendizado contínuo em formato de strimeo do Brasil voltado para o mercado de tecnologia."
                }
                title={
                  "Programa de especialização para acelerar sua carreira"
                }
                imageUrl={"/images/dev-coding-expertsclub.webp"}
                btnText={"QUERO CONHECER"}

              />
            </TabsContent>
            <TabsContent value="discover">
              <TabCourses
                href={"#"}
                colors={{
                  background: "$colors$discover-mid",
                }}
                prerequisites={
                  "O Discover é 100% gratuito e você pode começar agora"
                }
                text={
                  "Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais."
                }
                title={
                  "Comece a programar do zero gratuitamente"
                }
                imageUrl={"/images/dev-coding-discover.webp"}
                btnText={"QUERO CONHECER"}

              />
            </TabsContent>
            <TabsContent value="explorer">
              <TabCourses
                href={"#"}
                colors={{
                  background: "#42d3ff",
                  color: "$colors$gray-900"
                }}
                prerequisites={
                  "O Discover é 100% gratuito e você pode começar agora"
                }
                text={
                  "Aprenda as habilidades para ser um destaque no mercado da programação e acessar sua primeira oportunidade ainda nesse ano."
                }
                title={
                  "Acesse sua primeira vaga em programação"
                }
                imageUrl={"/images/dev-coding-explorer.webp"}
                btnText={"SAIBA COMO"}

              />
            </TabsContent>
          </Tabs>
        </section>
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
