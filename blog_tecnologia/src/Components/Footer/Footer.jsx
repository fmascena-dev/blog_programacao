import './Footer.scss'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://vainaweb.com.br" target="_blank">
          <img src="/Logo/logo_vnw.svg" alt="logo VaiNaWeb" className="logo" />
        </a>
        <p className="responsavel">
          Desenvolvido por &copy;{' '}
          <a href="https://www.linkedin.com/in/felipe-mascena/">
            Felipe Mascena
          </a>
        </p>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/f_mascena.dev/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/felipe-mascena/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/fmascena-dev" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
