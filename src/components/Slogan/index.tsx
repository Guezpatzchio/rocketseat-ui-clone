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
        <p>
          Não importa se você está começando do zero ou se tem décadas de
          experiência como dev.
          <br />
          Você vai encontrar o caminho para estar entre os melhores e se manter
          atualizado nesse universo dinâmico.
        </p>
      </SloganComponent.Content>
    </SloganComponent.Root>
  );
}
