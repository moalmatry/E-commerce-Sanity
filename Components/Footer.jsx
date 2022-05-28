import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-container">
      <p>© Copyright 2022 Mohamed Almatry , All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
