import Logo from "./Logo";
import AgendeButton from "./AgendeButton";
import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";

export default function Header() {
  const data = [
    { link: "/", title: "Início" },
    { link: "/#local", title: "Local" },
    { link: "/tratamentos", title: "Tratamentos" },
    { link: "/depoimentos", title: "Depoimentos" },
    { link: "/contato", title: "Contato" },
  ];

  return (
    <header className="bg-black h-28 flex flex-row items-center justify-around w-full sticky top-0 z-50 ">
      <Logo></Logo>
      <NavLinks data={data}></NavLinks>
      <AgendeButton></AgendeButton>
      <NavMenu></NavMenu>
    </header>
  );
}