import Copyright from "../../../components/copyright/Copyright";
import Logo from "../../../components/Logo";
import TmdbSpace from "../../../components/tmdbSpace/TmdbSpace";
import FooterDecoration from "./FooterDecoration";

const Footer = () => {
  return <FooterDecoration>
      <Logo />
      <TmdbSpace />
      <Copyright />
  </FooterDecoration>;
};

export default Footer;
