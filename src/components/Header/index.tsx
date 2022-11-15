import Link from "next/link";
import { Contact, ContactsContainer, HeaderContainer, NavBar } from "./style";
import { FaLinkedinIn, FaRocketchat } from "react-icons/fa";

export default function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <Link href="/">Home</Link>
        <Link href="">Sobre</Link>
        <Link href="/projects">Projetos</Link>
      </NavBar>
      <ContactsContainer>
        <Contact
          itemProp="30%"
          href="https://www.linkedin.com/in/ester-frazao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FaLinkedinIn />
          </span>
          Linkedin
        </Contact>
        <Contact itemProp="65%" type="text">
          <span>
            <FaRocketchat />
          </span>
          tafnisbonbon@gmail.com
        </Contact>
      </ContactsContainer>
    </HeaderContainer>
  );
}
