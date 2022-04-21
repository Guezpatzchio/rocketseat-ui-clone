import * as SloganComponent from "./styles";

export function Slogan() {
  return (
    <SloganComponent.Root>
      <SloganComponent.Content>
        <SloganComponent.Line>
          <div className={"line"} />
        </SloganComponent.Line>
        <h3>
          Somos uma plataforma completa de
          <br />
          aprendizado contínuo em programação
        </h3>
      </SloganComponent.Content>
    </SloganComponent.Root>
  );
}
