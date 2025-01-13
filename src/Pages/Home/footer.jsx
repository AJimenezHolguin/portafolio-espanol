import { Link } from "react-scroll";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>{/* <img src="./img/logoNuevo.png" alt="Developer" /> */}</div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                Acerca de Mi
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="text-md"
              >
                Compentencias
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portafolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://wa.me/573166173440?text=Hola,%20quiero%20hablar%20contigo."
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 1.33333C8.63636 1.33333 2.66667 7.30303 2.66667 14.6667C2.66667 17.8746 3.88788 20.7939 5.93939 23.0303L4 30L10.803 28.1212C13.0167 29.5439 14.8131 30.6667 16 30.6667C23.3636 30.6667 29.3333 24.697 29.3333 17.3333C29.3333 9.9697 23.3636 1.33333 16 1.33333ZM16 26.6667C15.0341 26.6667 13.5742 26.1212 11.803 25.0303L11.3333 24.7273L7.45455 25.8182L8.54545 21.9394L8.24242 21.4697C6.48485 19.2879 5.33333 16.8939 5.33333 14.6667C5.33333 8.78788 10.1212 4 16 4C21.8788 4 26.6667 8.78788 26.6667 14.6667C26.6667 20.5455 21.8788 26.6667 16 26.6667ZM20.303 19.4242C20.0606 19.2121 18.9394 18.6061 18.6969 18.5455C18.4545 18.4848 18.2424 18.4848 18.0606 18.7273C17.8788 18.9697 17.3333 19.5758 17.1515 19.7576C16.9697 19.9394 16.7879 19.9697 16.5455 19.8182C16.303 19.6667 15.5152 19.4242 14.4242 18.4242C13.6364 17.6667 13.2121 16.9697 13.0303 16.7273C12.8485 16.4848 12.9394 16.303 13.0909 16.1515C13.2424 16 13.3939 15.7576 13.5152 15.5758C13.6364 15.3939 13.6969 15.2424 13.8182 15.0606C13.9394 14.8788 13.9394 14.7576 13.8788 14.6061C13.8182 14.4545 13.3333 13.1515 13.0909 12.5455C12.8485 11.9394 12.6061 12 12.4242 12H12.1818C12 12 11.7576 12 11.5152 12.2424C11.2727 12.4848 10.7273 13.0303 10.5455 14.2424C10.3636 15.4545 10.7273 16.4242 11.0606 16.9697C11.3939 17.5152 12.4242 18.9697 14.1818 20.1212C15.9394 21.2727 17.5758 21.7576 18.1212 21.8788C18.6667 22 19.7576 21.8788 20.303 21.5758C20.8485 21.2727 21.3333 20.9697 21.4545 20.7273C21.5758 20.4848 21.5758 20.2424 21.5152 20.1212C21.4545 20 20.5455 19.6364 20.303 19.4242Z"
                    fill="#25D366"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/andersonjimenezholguin/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Hecho con 💖 por Anderson</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Politica de privacidad
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Términos de servicio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Configuración de cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
