import Head from "next/head";
import { BagdesContainer, Text } from "../styles/About";
import { Container, Main, Section, Title } from "../styles/Home";
import Image from "next/image";

export default function About() {
  return (
    <Container>
      <Head>
        <title>Projetos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Sobre Mim</Title>
      <Section datatype="dark">
        <Text>
          Fascinada em aprender e experimentar, fui atraída desde a infância por
          tecnologia. Nossa história se iniciou com coisas simples, como
          explorar ferramentas pouco usadas, configurações avançadas em
          aparelhos e testando as mais diversas combinações de teclas em busca
          dos famosos atalhos de teclado.
        </Text>
        <Text>
          Por meio de contatos e de pesquisas próprias acabei estudando algumas
          coisas da área de tecnologia, mas não foi antes de estudar no curso da
          Kenzie Academy Brasil que entrei profissionalmente nessa área.E agora
          estou em busca de uma vaga integral e também de minhas habilidade
          tecnólogicas e sociais.
        </Text>
        <div>
          <button>Entrar em Contato</button>
          <a
            href="https://drive.google.com/file/d/1YbIk2jK04L0SL_ga3d9s2LFJvx_Bqw-Y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF Currículo
          </a>
        </div>
      </Section>
      <BagdesContainer>
        <Image src="/html5_badge.png" alt="HTML Badge" />
        <Image src="/css_badge.png" alt="CSS Badge" />
        <Image src="/javascript_badge.png" alt="Javascript Badge" />
        <Image src="/react_badge.png" alt="React Badge" />
        <Image src="/nodejs_badge.png" alt="Node Js Badge" />
        <Image src="/python_badge.png" alt="Python Badge" />
        <Image src="/django_badge.png" alt="Django Badge" />
      </BagdesContainer>
      <Section datatype="light">
        <h2>Experiências Acadêmica</h2>
        <div>
          <Image src="kenzie_logo.png" alt="Logo da Kenzie" />
          <h3>Kenzie Academy Brasil</h3>
        </div>

        <h2>Histórico de Trabalho</h2>
        <div>
          <Image src="kenzie_logo.png" alt="Logo da Kenzie" />
          <h3>Kenzie Academy Brasil</h3>
        </div>
      </Section>
    </Container>
  );
}