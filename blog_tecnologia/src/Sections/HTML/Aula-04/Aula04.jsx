import {
  Inicio,
  Main,
  Section,
  SectionOfficial,
  SectionOne,
  SectionPrincipal,
  DivInput,
  DivLabel,
  DivTag,
  SectionInput,
  Para,
  FigureForm,
  InputText,
  SectionSecond,
  SectionRadio,
  Paragraph,
  Image,
  Image2,
  SectionResumo,
} from './Aula04Style';

export default function Aula04() {
  return (
    <Main>
      <Section>
        <Inicio>
          <h2>Aula 04 HTML - Forms </h2>
          <img src="/Images/Html/Aula04/inicio1_1.png" alt="linha pontilhada" />
        </Inicio>
        <img src="/Images/Html/Aula04/inicio1_3.png" alt="Lâmpada" />
      </Section>
      <hr />
      <SectionOne>
        <h2>Relembrando o HTML</h2>
        <p>
          <span>HTML</span> - Hyper Text Markup Language ou em português:
          Linguagem de Marcação de Hipertexto. É estruturado por meio de TAGS
          que nos permitem criar documentos que tenham significado e possam ser
          entendido por outras pessoas e computadores.
        </p>
      </SectionOne>
      <hr />
      <SectionOfficial>
        <img src="/Images/Html/Aula04/codigo1.png" alt="" />
        <div>
          <h2>O que é um Form?</h2>
          <p>
            A tag <span>&lsaquo;form&rsaquo; &lsaquo;/form&rsaquo;</span>{' '}
            (formulário) é utilizada para agrupar elementos interativos, onde o
            usuário vai inserir informações que serão enviadas para um servidor.
            As tags mais comuns em formulários são:
            <ol>
              <li>Form (formulário)</li>
              <li>Label (etiqueta)</li>
              <li>Input (entrada)</li>
              <li>Button (botão)</li>
            </ol>
          </p>
        </div>
      </SectionOfficial>
      <hr />
      <SectionPrincipal>
        <DivInput>
          <img src="/Images/Html/Aula04/codigo2.png" alt="código de inputs" />
          <h3>Como será exibido:</h3>
          <img
            src="/Images/Html/Aula04/inputDoCod2.png"
            alt="saída renderizada do código"
          />
        </DivInput>
        <DivLabel>
          <h2>Vamos quebrar esse código em partes</h2>
          <ul>
            <li>
              Primeiro criamos uma tag form que será responsável por agrupar
              todos os campos e buttons que iremos usar. É a TAG mais importante
              do formulário.{' '}
              <span>&lsaquo;form&rsaquo; Conteúdo &lsaquo;/form&rsaquo;</span>
            </li>
            <li>
              Agora criamos uma tag label que é usada como legenda para a tag
              input que vamos usar no próximo passo.{' '}
              <span>
                &lsaquo;label for=&quot; &quot;&rsaquo;Nome:
                &lsaquo;/label&rsaquo;
              </span>
            </li>
          </ul>
        </DivLabel>
      </SectionPrincipal>
      <hr />
      <SectionInput>
        <h2>Aprendendo mais sobre os Inputs</h2>
        <DivTag>
          <img
            src="/Images/Html/Aula04/form1.png"
            alt="form para preenchimento"
          />
          <p>
            A tag <span>input</span> é como criamos um campo onde o usuário irá
            digitar as informações, esse campo pode ser de diferentes tipos:
            (text, email, password). O input pode carregar vários atributos:
            <ul>
              <li>
                <span>type:</span> o tipo do input;
              </li>
              <li>
                <span>name:</span> o nome dado ao input;
              </li>
              <li>
                <span>id:</span> a identificação do input;
              </li>
              <li>
                <span>placeholder:</span> o texto exibido dentro do input para o
                usuário.
              </li>
            </ul>
          </p>
        </DivTag>
        <Para>
          &lsaquo; input <span>type=</span>&quot;text&quot; <span>id=</span>
          &quot;nome&quot; <span>placeholder=</span>&quot;Digite seu nome&quot;
          /&rsaquo;
        </Para>
      </SectionInput>
      <hr />
      <SectionPrincipal>
        <FigureForm>
          <img
            src="/Images/Html/Aula04/form_batata.png"
            alt="formulário de batata renderizado"
          />
          <a href="https://codepen.io/fmascena-dev/pen/NPKqGYj" target="_blank">
            <button>Veja o código aqui</button>
          </a>
        </FigureForm>
      </SectionPrincipal>
      <hr />
      <SectionPrincipal>
        <InputText>
          <h2>Tipos de Input</h2>
          <h4>Input do tipo text</h4>
          <p>Cria um input onde pode ser adicionado um texto.</p>
          <img src="/Images/Html/Aula04/inputText.png" alt="" />
          <h4>Como fica:</h4>
          <img src="/Images/Html/Aula04/inputText2.png" alt="" />
        </InputText>
      </SectionPrincipal>
      <hr />
      <SectionPrincipal>
        <InputText>
          <h2>Tipos de Input</h2>
          <h4>Input do tipo email</h4>
          <p>Cria um input onde pode ser adicionado exclusivamente um email.</p>
          <img src="/Images/Html/Aula04/inputEmail.png" alt="" />
          <h4>Como fica:</h4>
          <img src="/Images/Html/Aula04/inputEmail2.png" alt="" />
        </InputText>
      </SectionPrincipal>
      <hr />
      <SectionPrincipal>
        <InputText>
          <h2>Tipos de Input</h2>
          <h4>Input do tipo number</h4>
          <p>
            Cria um input onde pode ser adicionado exclusivamente um número.
          </p>
          <img src="/Images/Html/Aula04/inputNumber.png" alt="" />
          <h4>Como fica:</h4>
          <img src="/Images/Html/Aula04/inputNumber2.png" alt="" />
        </InputText>
      </SectionPrincipal>
      <hr />
      <SectionPrincipal>
        <InputText>
          <h2>Tipos de Input</h2>
          <h4>Input do tipo password</h4>
          <p>Cria um input onde pode ser adicionado senhas.</p>
          <img src="/Images/Html/Aula04/inputSenha.png" alt="" />
          <h4>Como fica:</h4>
          <img src="/Images/Html/Aula04/inputSenha2.png" alt="" />
        </InputText>
      </SectionPrincipal>
      <hr />
      <SectionSecond>
        <SectionRadio>
          <div>
            <h2>Tipos de Input</h2>
            <h4>Input do tipo radio</h4>
            <p>Cria um input onde possa ser selecionada apenas uma opção.</p>
            <img src="/Images/Html/Aula04/inputRadio2.png" alt="" />
          </div>
          <img src="/Images/Html/Aula04/inputRadio.png" alt="" />
        </SectionRadio>
        <Paragraph>
          O name faz a ligação com a etiqueta da categoria, nesse caso os inputs
          de sim ou não estão relacionando ao for de &quot;aluno&quot; vai na
          web.
        </Paragraph>
      </SectionSecond>
      <hr />
      <SectionPrincipal>
        <InputText>
          <h2>Tipos de Input</h2>
          <h4>Input do tipo chackbox</h4>
          <p>
            Cria um input onde pode ser selecionada uma opção. Mas possui uma
            função diferente do radio.
          </p>
          <img src="/Images/Html/Aula04/inputCheck.png" alt="" />
          <h4>Como fica:</h4>
          <img src="/Images/Html/Aula04/inputCheck2.png" alt="" />
        </InputText>
      </SectionPrincipal>
      <hr />
      <SectionPrincipal>
        <InputText>
          <h2>Tipos de Input</h2>
          <h4>Input do tipo submit</h4>
          <p>Cria um botão para enviar os dados contidos no formulário.</p>
          <img src="/Images/Html/Aula04/inputSubmit.png" alt="" />
          <h4>Como fica:</h4>
          <Image src="/Images/Html/Aula04/inputSubmit2.png" alt="" />
        </InputText>
      </SectionPrincipal>
      <hr />
      <SectionPrincipal>
        <InputText>
          <SectionResumo>
            <h2>Código comentado - aula forms</h2>
            <p>
              Clicando na imagem abaixo irá direcionar para o codesandbox onde
              está o nosso código html da aula de formulário totalmente
              comentado cada parte, qualquer dúvida só comunicar a gente,
              estamos sempre para ajudar =D
            </p>
            <a
              href="https://codesandbox.io/p/sandbox/runtime-sun-veo2pp"
              target="_blank"
            >
              <img src="/Images/Html/Aula04/codigoComentado.png" alt="" />
            </a>
            <h4>Resumo da aula</h4>
            <Image2 src="/Images/Html/Aula04/resumoAula.png" alt="" />
          </SectionResumo>
        </InputText>
      </SectionPrincipal>
    </Main>
  );
}
