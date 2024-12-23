import Aula01 from '../Sections/HTML/Aula-01/Aula01.jsx';
import Aula02 from '../Sections/HTML/Aula-02/Aula02.jsx';
import Aula03 from '../Sections/HTML/Aula-03/Aula03.jsx';
import Aula04 from '../Sections/HTML/Aula-04/Aula04.jsx';
import './Stylos/Html.scss';
import { Routes, Route, Link } from 'react-router-dom';

export default function Html() {
  return (
    <>
      <header className="html">
        <nav className="navigation_html">
          <ul className="nav_list">
            <li>
              <Link className="nav_html" to="/html">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_html" to="/html/aula01">
                Aula-01
              </Link>
            </li>
            <li>
              <Link className="nav_html" to="/html/aula02">
                Aula-02
              </Link>
            </li>
            <li>
              <Link className="nav_html" to="/html/aula03">
                Aula-03
              </Link>
            </li>
            <li>
              <Link className="nav_html" to="/html/aula04">
                Aula-04
              </Link>
            </li>
            <li>
              <Link>Aula-05</Link>
            </li>
            <li>
              <Link>Aula-06</Link>
            </li>
            <li>
              <Link>Aula-07</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/html" element="" />
        <Route path="/aula01" element={<Aula01 />} />
        <Route path="/aula02" element={<Aula02 />} />
        <Route path="/aula03" element={<Aula03 />} />
        <Route path="/aula04" element={<Aula04 />} />
        <Route path="" element="" />
        <Route path="" element="" />
        <Route path="" element="" />
      </Routes>
    </>
  );
}
