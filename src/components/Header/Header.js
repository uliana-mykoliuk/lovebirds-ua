const Header = ({ headerArray }) => {
  return (
    <header className="header">
      <nav className="links-container">
        {headerArray.map((item, idx) => {
          return (
            <li key={idx} className="list-item">
              <a href={item.link} className="header-link">
                {item.name}
              </a>
            </li>
          );
        })}
      </nav>
    </header>
  );
};

Header.defaultProps = {
  headerArray: [
    {
      link: "/",
      name: "домашня сторінка",
    },
    {
      link: "/fun-facts",
      name: "Цікаві факти",
    },
    {
      link: "/species",
      name: "види",
    },
    {
      link: "/care",
      name: "догляд",
    },
  ],
};

export default Header;
