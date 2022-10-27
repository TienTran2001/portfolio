function Item({ children, href }) {
  return (
    <li className="">
      <a className="hover:text-blue-400 transition-all" href={href}>
        {children}
      </a>
    </li>
  );
}

export default Item;
