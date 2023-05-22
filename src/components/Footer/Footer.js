import "./Footer.scss";

const Footer = ({ footerText, footerLinks }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">{footerText}</p>
      <div className="footer-year">{year}</div>
      <nav className="footer-links">
        {footerLinks.map((item, idx) => {
          return (
            <li key={idx} className="footer-list-item">
              <a href={item.link} className="footer-link">
                {item.name}
              </a>
            </li>
          );
        })}
      </nav>
    </footer>
  );
};

Footer.defaultProps = {
  footerText: "Сайт написала: Миколюк Уляна",
  footerLinks: [
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

export default Footer;
