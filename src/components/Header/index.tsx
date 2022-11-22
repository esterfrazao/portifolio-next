import Link from "next/link";
import {
  Contact,
  ContactsContainer,
  DropDownNavBar,
  HeaderContainer,
  NavBar,
} from "./style";
import { FaLinkedinIn, FaRocketchat } from "react-icons/fa";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function Navigation() {
    return (
      <>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/projects">Projetos</Link>
      </>
    );
  }

  return (
    <HeaderContainer>
      <NavBar>
        <Navigation />
      </NavBar>
      <DropDownNavBar>
        <span onClick={() => setIsOpen(!isOpen)}>
          <HiMenu />
        </span>
        {isOpen && (
          <div>
            <Navigation />
          </div>
        )}
      </DropDownNavBar>

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
          <p>Linkedin</p>
        </Contact>
        <Contact itemProp="65%" type="text">
          <span>
            <FaRocketchat />
          </span>
          <p>tafnisbonbon@gmail.com</p>
        </Contact>
      </ContactsContainer>
    </HeaderContainer>
  );
}
