import Head from "next/head";
import Image from "next/image";
import IconButton from "../components/IconButton";
import { useRepositories } from "../providers/repositories";
import {
  BsWhatsapp,
  BsDownload,
  BsGithub,
  BsChevronDown,
  BsArrowUpRightSquare,
} from "react-icons/bs";
import {
  Description,
  Section,
  Tag,
  Container,
  Project,
  ProjectsContainer,
  CustomizedTitle,
  ProjectsSection,
  AboutSection,
  BagdesContainer,
  ButtonsContainer,
  PresentationContainer,
  Scroll,
  Text,
  Figure,
} from "../styles";
import Link from "next/link";
import titleFormatter from "../utils/titleFormatter";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

export default function Home() {
  const { repositories } = useRepositories();

  return (
    <Container>
      <Head>
        <title>Ester Frazão</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section datatype="light">
        <PresentationContainer>
          <Tag>Fullstack Developer Jr.</Tag>
          <CustomizedTitle>
            Olá, eu sou <b>Ester Frazão!</b>
          </CustomizedTitle>
          <Description>
            Desenvolvedora Web FullStack formada pela Kenzie Academy Brasil, em
            busca de uma posição no mercado de trabalho de tecnologia, com
            conhecimentos em HTML, CSS, Javascript, React JS, Node Js, Python e
            Django.
          </Description>
          <a
            href="https://wa.me/qr/EXQSKL3G4MAKM1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="green" icon={<BsWhatsapp />}>
              Entrar em Contato
            </IconButton>
          </a>
        </PresentationContainer>
        <Figure
          priority={true}
          width={400}
          height={500}
          src="/coding.jpg"
          alt="profile"
        />
        <Scroll>
          <BsChevronDown />
        </Scroll>
      </Section>
      <Section datatype="dark">
        <Figure
          priority={true}
          width={400}
          height={430}
          src="/desenvolvedor_web.webp"
          alt="profile"
        />
        <PresentationContainer>
          <h2>Sobre mim</h2>
          <Text>
            Fascinada em aprender e experimentar, fui atraída desde a infância
            por tecnologia. E por meio de contatos e de pesquisas próprias
            acabei estudando algumas coisas da área de tecnologia, e foi com o
            suporte da Kenzie Academy Brasil que entrei profissionalmente nessa
            área. E agora estou em busca de uma vaga integral como
            desenvolvedora para desenvolver minhas habilidades tecnológicas e
            sociais.
          </Text>
          <ButtonsContainer>
            <a
              href="https://www.linkedin.com/in/ester-frazao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandLinkedin size="3rem" />
            </a>
            <a
              href="http://github.com/esterfrazao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size="3rem" />
            </a>
          </ButtonsContainer>
          <ButtonsContainer>
            <a
              href="https://wa.me/qr/EXQSKL3G4MAKM1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="green" icon={<BsWhatsapp />}>
                Entrar em Contato
              </IconButton>
            </a>
            <a
              href="https://drive.google.com/file/d/1YbIk2jK04L0SL_ga3d9s2LFJvx_Bqw-Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="black" icon={<BsDownload />}>
                PDF Currículo
              </IconButton>
            </a>
          </ButtonsContainer>
        </PresentationContainer>
      </Section>
      <BagdesContainer>
        <Image
          priority={true}
          width={40}
          height={40}
          src="/html5_badge.png"
          alt="HTML Badge"
        />
        <Image
          priority={true}
          width={40}
          height={40}
          src="/css_badge.png"
          alt="CSS Badge"
        />
        <Image
          priority={true}
          width={40}
          height={40}
          src="/javascript_badge.png"
          alt="Javascript Badge"
        />
        <Image
          priority={true}
          width={40}
          height={40}
          src="/react_badge.png"
          alt="React Badge"
        />
        <Image
          priority={true}
          width={40}
          height={40}
          src="/nodejs_badge.png"
          alt="Node Js Badge"
        />
        <Image
          priority={true}
          width={40}
          height={40}
          src="/typescript_badge.png"
          alt="Typescript Badge"
        />
        <Image
          priority={true}
          width={40}
          height={40}
          src="/python_badge.png"
          alt="Python Badge"
        />
        <Image
          priority={true}
          width={40}
          height={40}
          src="/django_badge.png"
          alt="Django Badge"
        />
      </BagdesContainer>
      <AboutSection datatype="dark">
        <h2>Formada na Kenzie Academy Brasil</h2>
        <Image
          width={120}
          height={120}
          src="/kenzie_logo.png"
          alt="Logo da Kenzie"
        />
        <div className="description">
          <h3>Fullstack Developer</h3>
          <span>Novembro de 2021 - Novembro de 2022</span>
          <p>
            Curso de 2.000 horas de Desenvolvimento Full Stack que abrange
            tecnologias Front End e Back End além de soft skills necessárias
            para o mercado de trabalho. Entre as linguagens e tecnologias
            aprendidas, estão HTML5, CSS3, JavaScript (ES6+), React, Node.js,
            Python (Django) e SQL.
          </p>
        </div>
      </AboutSection>
      <ProjectsSection datatype="light">
        <h2>Projetos</h2>
        <ProjectsContainer>
          {repositories?.slice(0, 6).map((repo) => {
            if (!repo.fork) {
              return (
                <Project key={repo.id}>
                  <h3>{titleFormatter(repo.name)}</h3>
                  <p>{repo.description}</p>
                  <ButtonsContainer style={{ margin: 0, width: "100%" }}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton icon={<BsGithub />} color="green">
                        Repositório
                      </IconButton>
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton icon={<IoLogoVercel />} color="white">
                          Website
                        </IconButton>
                      </a>
                    )}
                  </ButtonsContainer>
                </Project>
              );
            }
          })}
        </ProjectsContainer>
        <Link href="/projects">
          <IconButton color="green" icon={<BsArrowUpRightSquare />}>
            Visualizar todos os projetos
          </IconButton>
        </Link>
      </ProjectsSection>
    </Container>
  );
}
