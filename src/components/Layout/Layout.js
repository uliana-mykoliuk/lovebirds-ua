import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainBackground from "../MainBackground/MainBackground";

const Layout = ({ children, titleText, subtitleText, backgroundVariant }) => {
  return (
    <>
      <Header />
      <MainBackground
        titleText={titleText}
        subtitleText={subtitleText}
        backgroundVariant={backgroundVariant}
      />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
