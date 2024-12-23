export default function Aula02() {
  return (
    <>
      <section id="aula-02">
        <div className="div_html">
          <h2>Introdução ao HTML - Aula 02</h2>
          <h2>Tag de Listas</h2>
          <p>
            Para exibir listas em nossos documentos. Temos 2 opções, uma tag
            para listas ordenadas <span>&lsaquo;ol&rsaquo;</span>
            <span>&lsaquo;/ol&rsaquo;</span> (ordered list) e outra para listas
            não ordenadas <span>&lsaquo;ul&rsaquo;</span>
            <span>&lsaquo;/ul&rsaquo;</span> (unordered list).
          </p>
          <figure>
            <img
              src="/Images/Html/Aula02/codigo_listas.png"
              alt="Código de listas"
              className="img1-aula02"
            />
            <img
              src="/Images/Html/Aula02/listas_exemplos.png"
              alt="Exemplos de listas"
              className="img-aula02"
            />
          </figure>
        </div>
        <div className="div_html">
          <h2>Tag de Imagem</h2>
          <p>
            Também podemos fazer uso de medias em nossos documentos, as imagens
            são um ótimo meio de expressar uma ideia. Elas podem ser
            representadas em nosso documento HTML através da TAG{' '}
            <span>
              &lsaquo;img src=&quot; &quot; alt=&quot; &quot; /&rsaquo;
            </span>{' '}
            da seguinte forma:
          </p>
          <figure>
            <img
              src="/Images/Html/Aula02/tag_imagem.png"
              alt="exemplo de tag para imagem"
              className="tag_imagem"
            />
          </figure>
        </div>
        <div className="div_html">
          <h2>Links</h2>
          <p>
            Tag de link <span>&lsaquo;a&rsaquo;&lsaquo;/a&rsaquo;</span>, tag
            fundamental da web, através do link das páginas definido no atributo{' '}
            <span>href=&quot; &quot;</span> nós conseguimos associar, abrir e
            acessar os diferentes sites existentes na internet criando o que
            chamamos de rede.
          </p>
          <figure>
            <img
              src="/Images/Html/Aula02/link1_html.png"
              alt="exemplo de tag de links"
              className="tag_imagem"
            />
          </figure>
          <p>
            O atributo <span>target=&quot; &quot;</span> especifica onde o
            documento externo será aberto:
          </p>

          <p>
            &#10139;<span> _blank:</span> abre o link em uma nova janela.
          </p>

          <p>
            &#10139;<span>_self:</span> Usando este valor, o documento vinculado
            será exibido no mesmo quadro ou janela onde está o link. Esse valor
            é especialmente útil quando a tag BASE for usada para especificar um
            quadro de destino padrão diferente do atual.
          </p>
          <p>
            &#10139;<span>_parent: </span> Esse valor faz com que o documento
            seja exibido no FRAMESET (conjunto de molduras) pai do quadro atual.
          </p>
          <p>
            &#10139;<span>_top: </span>Força a exibição do link em todo o espaço
            da janela do navegador, destruindo toda a estrutura do quadro. Este
            valor deve ser utilizado sempre que criarmos um link para uma página
            fora do nosso website.
          </p>
        </div>
        <div className="div_html">
          <h2>Iframe (Quadro embutido)</h2>
          <p>
            Essa tag{' '}
            <span>
              &lsaquo;iframe src=&quot; &quot; name=&quot; &quot; height=&quot;
              &quot; width=&quot; &quot;&rsaquo;&lsaquo;/iframe&rsaquo;
            </span>{' '}
            especifica um quadro embutido. Um quadro embutido é usado para
            incorporar outro documento no documento HTML atual.
          </p>
          <figure>
            <img
              src="/Images/Html/Aula02/iframe1.png"
              alt="exemplo de iframe"
              className="img_iframe"
            />
          </figure>
          <p>
            Respectivos atributos da tag iframe: <span>src=&quot; &quot;</span>{' '}
            - define a url da página a ser incorporada no seu site, <br />
            <span>name=&quot; &quot;</span> esse atributo não é obrigatório,
            geralmente utilizado para direcionar um envio do seu quadro embutido
            para um formulário.{' '}
            <span>height=&quot; &quot; width=&quot; &quot;</span> - definem a
            altura e largura especifica do seu quadro embutido.
          </p>
        </div>
        <div className="div_html">
          <h2>Iframe (VIDEO)</h2>
          <div className="iframe_img_p">
            <img
              src="/Images/Html/Aula02/iframe_video1.png"
              alt="video no youtube"
            />
            <p>
              Para adicionar um iframe de vídeo em sua página:
              <ol>
                <li>
                  Entre no youtube e pesquise o vídeo desejado:{' '}
                  <span className="span">
                    <a
                      href="https://www.youtube.com/watch?v=BTENKdRVS2U"
                      target="_blank"
                    >
                      https://www.youtube.com/watch?v=BTENKdRVS2U
                    </a>
                  </span>
                </li>
                <li>
                  Com o vídeo aberto clique na opção COMPARTILHAR e depois
                  INCORPORAR.
                </li>
                <li>
                  Copiar o HTML disponibilizado pelo youtube e cole no seu
                  código html de sua página.
                </li>
              </ol>
            </p>
          </div>
          <img
            src="/Images/Html/Aula02/iframe_video2.png"
            alt="como pegar o link iframe"
          />
          <img src="/Images/Html/Aula02/iframe_video3.png" alt="link iframe" />
          <img
            src="/Images/Html/Aula02/iframe_video4.png"
            alt="código do iframe e vídeo"
          />
        </div>
        <div className="div_html">
          <h2>Iframe (Mapa)</h2>
          <div className="iframe_img_p">
            <img
              src="/Images/Html/Aula02/iframe_mapa1.png"
              alt="mapa do google"
            />
            <p>
              Para adicionar um iframe de mapa em sua página:
              <ol>
                <li>
                  Entre no google maps e pesquise a localidade:{' '}
                  <span className="span">
                    <a href="https://www.google.com.br/maps" target="_blank">
                      https://www.google.com.br/maps
                    </a>
                  </span>{' '}
                  pesquise o local que deseja;
                </li>
                <li>
                  Com a localidade aberta clique em COMPARTILHAR e depois
                  INCORPORAR UM MAPA;
                </li>
                <li>
                  Escolha o tamanho do seu mapa copie o HTML disponibilizado
                  pelo google maps e cole no seu código html de sua página.
                </li>
              </ol>
            </p>
          </div>
          <img
            src="/Images/Html/Aula02/iframe_mapa2.png"
            alt="como pegar o link iframe"
          />
          <img
            src="/Images/Html/Aula02/iframe_mapa3.png"
            alt="código do iframe de mapa"
          />
        </div>
        <div className="div_html">
          <h2>Dicionário dos Devs</h2>
          <div className="iframe_img_p">
            <ul className="list_alt">
              <li>
                <span>HTML: </span> Linguagem de Marcação de Hipertexto;
              </li>
              <li>
                <span>Lang:</span> Linguagem;
              </li>
              <li>
                <span>TAG:</span> Etiqueta;
              </li>
              <li>
                <span>Head:</span> Cabeça;
              </li>
              <li>
                <span>Charset:</span> conjunto de caracteres;
              </li>
              <li>
                <span>Viewport:</span> janela de exibição;
              </li>
              <li>
                <span>Content:</span> Conteúdo;
              </li>
              <li>
                <span>Width:</span> Largura;
              </li>
              <li>
                <span>Device:</span> Dispositivo;
              </li>
              <li>
                <span>Initial:</span> Inicial;
              </li>
              <li>
                <span>Scale:</span> Escala;
              </li>
              <li>
                <span>Title:</span> Título;
              </li>
              <li>
                <span>Body:</span> Corpo.
              </li>
            </ul>
            <img
              src="/Images/Html/Aula02/dicionario1.png"
              alt="código base de html"
            />
          </div>
          <div className="div_html">
            <h2>Dicionário dos Devs</h2>
            <div className="iframe_img_p">
              <ul className="list_alt">
                <li>
                  <span>Frameborder</span> — Borda do quadro;
                </li>
                <li>
                  <span>Allow:</span> Permissão;
                </li>
                <li>
                  <span>Autoplay:</span> Play Automático;
                </li>
                <li>
                  <span>Clipboard-write:</span> Prancheta/Quadro-branco;
                </li>
                <li>
                  <span>Picture-in-picture:</span> Janela flutuante;
                </li>
                <li>
                  <span>Allowfullscreen:</span> Permitir tela cheia;
                </li>
                <li>
                  <span>Style:</span> Estilo.
                </li>
              </ul>
              <img
                src="/Images/Html/Aula02/dicionario2.png"
                alt="código base de html"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
