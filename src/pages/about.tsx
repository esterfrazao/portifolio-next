import Head from "next/head";
import {
  Container,
  Title,
  Section,
  BagdesContainer,
  ButtonsContainer,
  ExperienceContainer,
  PresentationContainer,
  Scroll,
  Text,
  Figure,
  ProfilePicture,
} from "../styles";
import Image from "next/image";
import IconButton from "../components/IconButton";
import { BsDownload, BsWhatsapp, BsChevronDown } from "react-icons/bs";

export default function About() {
  return (
    <Container>
      <Head>
        <title>Sobre Mim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section datatype="light">
        <PresentationContainer>
          <Title>Sobre Mim</Title>
          <Text>
            Fascinada em aprender e experimentar, fui atraída desde a infância
            por tecnologia. Nossa história se iniciou com coisas simples, como
            explorar ferramentas pouco usadas, configurações avançadas em
            aparelhos e testando as mais diversas combinações de teclas em busca
            dos famosos atalhos de teclado.
          </Text>
          <Text>
            Por meio de contatos e de pesquisas próprias acabei estudando
            algumas coisas da área de tecnologia, mas não foi antes de estudar
            no curso da Kenzie Academy Brasil que entrei profissionalmente nessa
            área. E agora estou em busca de uma vaga integral onde possa
            desenvolver e por em prática minhas habilidades tecnólogicas e
            sociais.
          </Text>
          <ButtonsContainer>
            <IconButton color="green" icon={<BsWhatsapp />}>
              <a
                href="https://wa.me/qr/EXQSKL3G4MAKM1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em Contato
              </a>
            </IconButton>
            <IconButton color="white" icon={<BsDownload />}>
              <a
                href="https://drive.google.com/file/d/1YbIk2jK04L0SL_ga3d9s2LFJvx_Bqw-Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF Currículo
              </a>
            </IconButton>
          </ButtonsContainer>
        </PresentationContainer>
        <ProfilePicture
          priority={true}
          width={400}
          height={430}
          src="/my_profile.jpeg"
          alt="profile"
        />
        <Scroll>
          <BsChevronDown />
        </Scroll>
      </Section>
      <BagdesContainer>
        <Image width={40} height={40} src="/html5_badge.png" alt="HTML Badge" />
        <Image width={40} height={40} src="/css_badge.png" alt="CSS Badge" />
        <Image
          width={40}
          height={40}
          src="/javascript_badge.png"
          alt="Javascript Badge"
        />
        <Image
          width={40}
          height={40}
          src="/react_badge.png"
          alt="React Badge"
        />
        <Image
          width={40}
          height={40}
          src="/nodejs_badge.png"
          alt="Node Js Badge"
        />
        <Image
          width={40}
          height={40}
          src="/python_badge.png"
          alt="Python Badge"
        />
        <Image
          width={40}
          height={40}
          src="/django_badge.png"
          alt="Django Badge"
        />
      </BagdesContainer>
      <Section datatype="dark">
        <ExperienceContainer>
          <h2>Experiência Acadêmica</h2>
          <div className="experience-box">
            <Image
              width={120}
              height={120}
              src="/kenzie_logo.png"
              alt="Logo da Kenzie"
            />
            <div className="vertical-line"></div>
            <div>
              <h3>Fullstack Developer - Kenzie Academy Brasil</h3>
              <span>Novembro de 2021 - Novembro de 2022</span>
              <p>
                Curso de 2.000 horas de Desenvolvimento Full Stack que abrange
                tecnologias Front End e Back End além de soft skills necessárias
                para o mercado de trabalho. Entre as linguagens e tecnologias
                aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React,
                Node.js, Python (Django) e SQL.
              </p>
            </div>
          </div>
          <span className="horizontal-line"></span>
          <h2>Histórico de Trabalho</h2>
          <div className="experience-box">
            <Image
              width={120}
              height={120}
              src="/kenzie_logo.png"
              alt="Logo da Kenzie"
            />
            <div className="vertical-line"></div>
            <div>
              <h3>Monitoria - Kenzie Academy Brasil</h3>
              <span>Fevereiro de 2022 - atualmente</span>
              <p>
                Atuava fazendo code Review em HTML5, CSS3, Javascript, React JS,
                Node JS, Typescript, Python e Django, acompanhamento e
                supervisão de lógica de programação e clean code de
                desenvolvedores Júnior da academia.
              </p>
            </div>
          </div>
        </ExperienceContainer>
      </Section>
    </Container>
  );
}
