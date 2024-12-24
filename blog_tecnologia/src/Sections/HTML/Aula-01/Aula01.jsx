import './Aula01Styles.scss';

export default function Aula01() {
  return (
    <main id="aula-01">
      <section>
        <div>
          <h1>Introdução ao HTML - Aula 01</h1>
          <p>
            Com conteúdos simples e objetivos sobre HTML para aprendizado
            durante o seu curso.
          </p>
        </div>
        <div className="div_html">
          <h2>Dicionário dos Devs</h2>
          <a href="https://padlet.com/administrativo34/dicion-rio-dos-devs-vai-na-web-db9a4jqlvggfkptz">
            <img
              src="/Images/Html/Aula01/primeira_imagem_html.png"
              alt="Dicionário dos Devs"
              className="padlet"
            />
          </a>
        </div>
        <div className="div_html">
          <h2>Você sabe o que significa HTML?</h2>
          <img src="/Images/Html/Aula01/html.jpg" alt="imagem de HTML" />
          <p>
            <mark>Hyper Text Markup Language</mark> ou em português: Linguagem
            de Marcação de Hipertexto. Através de suas TAGS permitem estruturar
            páginas com signifcado que possam ser entendidas por outras pessoas
            e computadores.
          </p>
        </div>
        <div className="div_html">
          <h2>Estrutura de uma página</h2>
          <img
            src="/Images/Html/Aula01/estrutura.png"
            alt="estrutura html"
            className="img_estruturada"
          />
          <h2>Estrutura básica HTML</h2>
          <img
            src="/Images/Html/Aula01/estrutura_basica.png"
            alt="Código HTML"
          />
          <p>
            &#10139; <span>&lt;!DOCTYPE html&gt;</span> - Tem como
            responbilidade indicar que esta página está utilizando a versão do
            HTML5. <span>&lt;html&gt;</span> - E a tag raiz de sua página, que
            engloba todos os elementos de seu site, através dessa tag a partir
            do lang também definimos qual o idioma da página que estamos
            construindo.
          </p>
          <p>
            &#10139; <span>&lt;head&gt;</span> (cabeça) - A tag head é utilizada
            como um container que ficarão alocadas informações da página que não
            serão exibidas diretamente no navegador, informações como metatags
            responsáveis por metadados (dados da página)
          </p>
          <p>
            &#10139; <span>&lt;meta charset=&quot;UTF-8&quot;&gt;</span> -
            Metatag responsável pelas configurações de caracteres de sua página.{' '}
            <span>
              &lt;meta name=&quot;viewport&quot;
              content=&quot;width=device-width, initialscale=1.0&quot;&gt;
            </span>{' '}
            Metatag que tem como papel informar ao navegador sobre como
            controlar e ajustar o dimensionamento de sua página (que varia de
            dispositivo para dispositivo).
          </p>
          <p>
            &#10139;{' '}
            <span>
              &lt;meta httt-equiv=&quot;X-UA-Compatible&quot;
              content=&quot;IE=edge&quot;&gt;
            </span>{' '}
            - Metatag referente a questão de compatibilidade com outros
            navegadores no caso <span>content=&quot;IE=edge&quot;</span>{' '}
            (Internet Explorer = Microsoft Edge) pois o Internet Explorer não
            suportava alguns dos conteúdos que HTML5 proporcionava.
          </p>
          <p>
            &#10139; <span>&lt;title&gt;</span> - Tag responsável pelo nome do
            título de seu navegador, a partir dela que definimos o título da
            página.
          </p>
          <p>
            &#10139; <span>&lt;body&gt;</span> (corpo da página) - Tag super
            importante que tem como papel conter todos os elementos visíveis de
            sua página
          </p>
          <div className="div_html">
            <h2>Heading Tags</h2>
            <div>
              <p>
                Heading Tags são as marcações de cabeçalho referente aos títulos
                que tem uma ordem hierarquica do 1 ao 6, também conhecida como
                etiquetas de títulos e subtítulos
              </p>
              <img
                src="/Images/Html/Aula01/heading_tags.jpg"
                alt="Tags para títulos"
                className="img_estruturada"
              />
            </div>
          </div>
        </div>
        <a href="/html" className="linkBtn">
          <button>&#11148; Voltar</button>
        </a>
      </section>
    </main>
  );
}
