import Item from "./Item";

function Header() {
  return (
    <header className="md:bg-[#ffffff1a] p-4 rounded-lg">
      <ul className="mx-auto text-md md:text-lg  flex justify-between md:justify-around font-semibold md:max-w-[735px] ">
        <Item href="#projects">Projects</Item>
        <Item href="#about">About</Item>
        <Item href="#experience">Experience</Item>
        <Item href="#contact">Contact</Item>
      </ul>
    </header>
  );
}

export default Header;
