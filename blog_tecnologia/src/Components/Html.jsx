import '../Stylos/Html.scss';
import { Link } from 'react-router-dom';

export default function Html() {
  return (
    <main id="html">
      <section className="html-section">
        <h1>Saiba mais sobre HTML</h1>
        <nav className="html-nav">
          <ul className="html-ul">
            <li className="html-li">
              <figure className="html-fig">
                <img src="/Images/Html/Aula01/html.jpg" alt="" />
              </figure>
              <div className="html-div">
                <p>Introdução ao HTML - Parte I</p>
                <Link className="html-a" to="/html/aula01">
                  <button className="html-btn">Veja a Aula 01</button>
                </Link>
              </div>
            </li>

            <li className="html-li">
              <figure className="html-fig">
                <img src="/Images/Html/Aula02/codigo_listas.png" alt="" />
              </figure>
              <div className="html-div">
                <p>Introdução ao HTML - Parte II</p>
                <Link className="html-a" to="/html/aula02">
                  <button className="html-btn">Veja a Aula 02</button>
                </Link>
              </div>
            </li>
            <li className="html-li">
              <figure className="html-fig">
                <img src="/Images/Html/Aula03/semantica.png" alt="" />
              </figure>
              <div className="html-div">
                <p>Introdução ao HTML - Parte III</p>
                <Link className="html-a" to="/html/aula03">
                  <button className="html-btn">Veja a Aula 03</button>
                </Link>
              </div>
            </li>
            <li className="html-li">
              <figure className="html-fig">
                <img src="/Images/Html/Aula04/codigo1.png" alt="" />
              </figure>
              <div className="html-div">
                <p>Aula 04 - Forms</p>
                <Link className="html-a" to="/html/aula04">
                  <button className="html-btn">Veja a Aula 04</button>
                </Link>
              </div>
            </li>
            <li className="html-li">
              <figure>
                <img src="" alt="" />
              </figure>
              <div className="html-div">
                <Link className="html-a" to="/html/aula05">
                <button className="html-btn">Veja a Aula 05</button>
                </Link>
              </div>
            </li>
            <li className="html-li">
              <figure>
                <img src="" alt="" />
              </figure>
              <div className="html-div">
                <Link className="html-a" to="/html/aula06">
                <button className="html-btn">Veja a Aula 06</button>
                </Link>
              </div>
            </li>
            <li className="html-li">
              <figure>
                <img src="" alt="" />
              </figure>
              <div className="html-div">
                <Link className="html-a" to="/html/aula07">
                <button className="html-btn">Veja a Aula 07</button>
                </Link>
              </div>
            </li>
            <li className="html-li">
              <figure>
                <img src="" alt="" />
              </figure>
              <div className="html-div">
                <Link className="html-a" to="/html/aula08">
                <button className="html-btn">Veja a Aula 08</button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
