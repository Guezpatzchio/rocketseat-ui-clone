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
                Para você se aperfeiçoar e acelerar
              </TabsTrigger>
              <TabsTrigger value="expertsclub">
                Para continuar avançando
              </TabsTrigger>
              <TabsTrigger value="discover">Para você começar</TabsTrigger>
            </TabsList>
            <TabsContent value="ignite">
              <TabCourses
                href={"#"}
                colors={{
                  background: "$colors$success-light",
                  color: "$colors$grey-900",
                }}
                prerequisites={"<strong>Pré-requisito: </strong>ter uma base sólida no desenvolvimento web."}
                text={
                  "O Ignite é um programa de aceleração profissional com treinamentos certificados e reconhecidos pelo mercado. Domine Elixir, Flutter, Node.js, React ou React Native e prepare-se para as melhores oportunidades."
                }
                title={
                  "Acelere na carreira através de uma tecnologia específica"
                }
                logo={"/images/ignite.webp"}
                rocketUrl={"/images/igniterocket.svg"}
              />
            </TabsContent>
            <TabsContent value="expertsclub">
            <TabCourses
                href={"#"}
                colors={{
                  background: "#db3a2c",
                  color: "$colors$white",
                }}
                prerequisites={"Aulas avançadas para devs que nunca param de evoluir."}
                text={
                  "O Experts Club é um clube de aprendizado contínuo com aulas práticas e específicas em que você vai aprender através das experiências acumuladas no mercado por grandes devs. Reunimos no clube as mais diversas tecnologias."
                }
                title={
                  "A única forma de acompanhar a tecnologia é evoluindo com ela"
                }
                logo={"/images/expertsclub.webp"}
                rocketUrl={"/images/expertsclubrocket.svg"}
              />
            </TabsContent>
            <TabsContent value="discover">
              <TabCourses
                href={"#"}
                colors={{
                  background: "$colors$rocketseat-mid",
                  color: "$colors$white",
                }}
                prerequisites={"O Discover é 100% gratuito e você pode começar agora"}
                text={
                  "São mais de 500 aulas gratuitas para você aprender programação do zero, com foco em desenvolvimento web. Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais."
                }
                title={
                  "Crie uma base sólida na programação para decolar rumo a desafios maiores"
                }
                logo={"/images/discover.webp"}
                rocketUrl={"/images/discoverrocket.svg"}
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
