import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="nav_header">
      <nav className="nav_principal">
        <a href="https://vainaweb.com.br" target="_blank">
          <img src="/Logo/logo_vnw.svg" alt="logo VaiNaWeb" className="logo" />
        </a>
        <ul>
          <li>
            <Link className="nav_a" to="/">
              INÍCIO
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/html">
              HTML
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/css">
              CSS
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/sass">
              SASS
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/javascript">
              JAVASCRIPT
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/react">
              REACT
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/styled">
              STYLED-COMPONENTS
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/vue">
              VUE.JS
            </Link>
          </li>
          <li>
            <Link className="nav_a" to="/sobre">
              SOBRE
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
