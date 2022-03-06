import type { ParagraphProps } from './Paragraph/types'

type ParagraphKeys = 'intro' | 'experiences'

export const data: Record<string | ParagraphKeys, ParagraphProps> = {
  intro: {
    ptBR: /*html*/ `
    <p>
    Sempre gostei muito de tecnologia e de games. O início de minha carreira profissional
    foi o mais variado possível, desde entregando marmitas e panfletos,até dando aulas
    voluntárias de basquete para comunidade e fazendo o design de um site de um pequeno
    restaurante.
    </p>

    <p>
    Quando entrei de fato no mercado de trabalho, comecei trabalhando como suporte técnico,
    mas sempre estudei programação e sempre quis trabalhar com algo envolvendo isso.
    Tive minha oportunidade quando comecei a trabalhar como professor em uma escola de
    programação voltada para o crescimento de soft skills e lógica dos alunos. Sempre tive
    muito interesse na área de desenvolvimento de jogos e já participei de várias maratonas de
    desenvolvimento e possuo bastante experiência na área.
    </p> 

    <p>
    Mas nos últimos anos, após ter que criar algumas soluções usando tecnologias web para
    o trabalho e ter feito dois NLW da Rocketseat, o interesse pelo desenvolvimento Front-End
    despertou. Fiz o curso Ignite e aprendi bastante em pouco tempo.
    </p>

    <p>
    Já passei por diversas tecnologias e linguagens, no início Pascal, Delphi e Python.
    Até chegar nas linguagens visuais usadas em algumas Game Engines, como  Clickteam Fusion e
    Construct. Houve uma época que fiquei apaixonado em 3D e aprendi muito sobre Blender,
    como modelagem e animação 3D. Então comecei a usar Godot Game Engine, onde dominei a
    linguagem da engine baseada em Python, GDScript que atualmente é minha ferramenta favorita
    para desenvolvimento de jogos.
    </p>

    <p>
    Sempre trabalhei com a parte de Design também, pois aprendi Photoshop e outros pacotes
    Adobe cedo. Em todos os trabalhos que passei eu sempre estava envolvido com algo relacionado
    ao design. Sendo criando artes para panfletos, até fazendo artes para postar em redes sociais.
    </p>

    <p>
    Por muito tempo fui usuário do Windows, mas já faz alguns anos que abracei o mundo Open
    Source e sou um feliz usuário do Linux. Já até contribui para algumas ferramentas, como a
    engine GDevelop uma Game Engine Visual Open Source.
    </p>

    <p>
    Gosto muito de aprender coisas novas e ter novos desafios. Sou uma pessoa muito calma e
    gosto de ter um bom relacionamento com as pessoas. Um bom trabalho em equipe na minha opnião
    é o essencial para uma empresa decolar.
    </p> 

    `,
    enUS: /*html*/ ``,
  },
  experiences: {
    ptBR: /*html*/ `
    <h3>EXPERIÊNCIAS</h3>

    <h4>Agência e-Plus - Desenvolvedor Front-End</h4>
    <p>
    Competências: Desenvolvimento de sites eCommerce usando a plataforma Vtex.
    As principais tecnologias para criar os sites das lojas foram Vanilla JS e/ou
    Typescript com SASS. Também trabalhei em alguns sites usando ReactJS + Typescript + Gatsby.
    </p>

    <h4>Redesign do site Chippu</h4>
    <p>
    Competências: Fui responsável em implementar um redesign feito no Figma em um site
    com mais de mil acessos por dia. As tecnologias usadas foram ReactJS + Netx.js,
    Styled Components para estilização além de Firebase e consumo de API. 
    </p>

    <h4>FAMATEC - Suporte Técnico</h4>
    <p>
    Competências: Primeiro emprego, trabalhei como suporte técnico nesta faculdade.
    Eu prestava suporte para os professores e empregados, como também auxiliava na
    manutenção do CPD. Neste emprego aprendi muito sobre design e PhotoShop,
    pois o Web Designer da empresa me fazia mentoria nos nossos tempos livres.
    </p>

    <h4>myMac - Autorizada da Apple</h4>
    <p>
    Assistente Técnico Bilíngue
    Competências: A myMac foi a primeira autorizada da Apple em Brasilia, minha atuação na
    empresa foi auxiliar técnico e atendimento ao cliente. Aprendi muito sobre o universo Apple,
    desde a manutenção de Iphones até o uso do MacOS. Eu trouxe para a empresa o uso de
    ferramentas Cloud, hoje conhecido como Google Workspace. Na época implementei a modernização
    de vários processos utilizando Google Planilhas. Na copa do mundo de 2014 eu atuei como
    atendente técnico bilíngue para os clientes estrangeiros.
    </p>

    <h4>Setmind - Gerente de Produtos</h4>
    <p>
    Competências: Neste emprego entrei como professor de programação de jogos para crianças e
    adolescentes. Conforme a empresa foi crescendo, me tornei gerente de produto, sendo
    responsável pela criação do material e metodologia do curso. A escola começou a focar
    mais em ensinar Soft Skills e metodologia ágeis para os alunos. Desenvolvi e lecionei o
    curso de programação para adultos que atuam nas áreas administrativa e financeira,
    usando as ferramentas Google e o Google Apps Script ( um subset da ECMAScript 5).
    </p>

    <p>
    Também fui responsável pela implementação do sistema de Gamificação da escola, criando
    a parte do Front-End usando React e Svelte e o Back-End usando o Apps Script e Google
    Planilhas.
    </p>
    `,
    enUS: /*html*/ ``,
  },
  game: {
    ptBR: /*html*/ `
    <h4>COM FOGO NÃO SE BRINCA</h4>

    <p>
    Neste projeto, envolvendo a Associação de Prevenção e Intervenção em Queimaduras
    (Avance), o Hospital Regional da Asa Norte (HRAN), o Curso de Jogos Digitais da UDF e
    Setmind Escola de Tecnologia, fui o Lead Programmer, responsável pela programação,
    Game Design e o port para a loja Google Play. O jogo pretende orientar crianças acima
    de 7 anos sobre a prevenção de queimaduras.
    </p>

    <p>
    Os desafios desse projeto incluíam:
      <ul>
        <li>
        Tempo: Nossa deadline era  2 meses para a entrega do produto, que deveria ser
        inaugurado no hospital junto com a esposa do Governador da cidade que na época
        estava envolvida no projeto, pois ela tinha laços com a Avance.
        </li>
        <li>
        Hardware de entrada: Como esse jogo deveria ser jogado por crianças e ser muio acessível
        até para famílias carentes, tivemos que fazer um trabalho muito bem planejado para o jogo
        rodar até em smartphones de entrada que possuiam especificações bem baixas.
        </li>
      </ul>
    </p>

    <p>
    Infelizmente o jogo não se encontra mais no Google Play Store, mas ainda pode ser jogado
    na página do meu portfólio:
    </p>

    <p>
    <a href="https://drzanuff.itch.io/com-fogo-no-se-brinca" target="_blank">
      drzanuff.itch.io/com-fogo-no-se-brinca
    </a>
    </p>

    <p>
    Noticias sobre o jogo:<br>
    
    <a
    href="https://www.conass.org.br/aplicativo-vai-orientar-criancas-a-prevenir-queimaduras/"
    target="_blank">
    www.conass.org.br/aplicativo-vai-orientar-criancas-a-prevenir-queimaduras/
    </a>
    </p>
    `,
    enUS: /*html*/ ``,
  },
  chippu: {
    ptBR: /*html*/ `
    <h3>DESTAQUES</h3>

    <h4>Redesign do Site Chippu</h4>

    <p>
    Site:<br>
      <a
      href="https://www.chippu.com.br/"
      target="_blank">
        www.chippu.com.br
      </a>
    </p>

    <p>
    Trabalhei liderando uma equipe de dois estagiários para implementar o redesign
    do site Chippu. Idealizado pelo jornalista e criador de conteúdo Thiago Romariz
    (ex diretor de conteúdo do site Omelete), o aplicativo Chippu (que significa "dica",
    em japonês) une algoritmos de inteligência artificial com curadoria humana para dar
    dicas e sugestões de filmes em plataformas de streaming, como Netflix, GloboPlay,
    Amazon Prime Video e HBO Go. O site é uma versão web do aplicativo com foco também
    em notícias, usando um CMS customizado.
    </p>

    <p>
    Foi uma experiência muito boa, pois além de liderar uma equipe pequena,
    usando metodologias ágeis, também foi meu primeiro projeto real usando Next.js.
    Vale ressaltar que pouco foi aproveitado do site antigo e muitos layout e
    componentes foram criados do zero. Usamos o design inicial feito no Figma,
    mas a partir de um ponto tive que criar algumas telas novas usando o próprio Figma.
    </p>

    <p>
    Um dos componentes que mais gostei de trabalhar na época foi o componente de Dicas,
    que exibia todo dia uma recomendação de filme a partir do perfil do usuário .
    </p>

    <p>
    Acesse o link abaixo para visualizar o template do componente:<br>
      <a
      href="https://www.chippu.com.br/titulos"
      target="_blank">
        www.chippu.com.br/titulos
      </a>
    </p>
    `,
    enUS: /*html*/ ``,
  },

  quiz: {
    ptBR: /*html*/ `
    <h4>Quiz do Witcher</h4>

    <p>
    Acesse o link abaixo para visualizar o Quiz (*é necessário criar uma conta para fazer o Quiz):<br>
    <a
    href="https://www.chippu.com.br/quiz/witcher"
    target="_blank">
      www.chippu.com.br/quiz/witcher
    </a>
    </p>

    <p>
      Durante o lançamento da segunda temporada da série Witcher, no Netflix, fui solicitado
      para criar a interface de um Quiz solicitada pela própria Netflix como peça publicitária
      a fim de aumentar o interesse na série. O Back-end usado foi o Firebase. Eventualmente
      esse Quiz foi usado de template para outros Quizzes. A representante da Netflix
      gostou muito do resultado e o efeito visual foi bem elogiado.  Abaixo você pode acessar
      a versão estática do Quiz:
    </p>
    
    <p>
      <a
      href="https://www.chippu.com.br/quiz/witcher"
      target="_blank">
        www.chippu.com.br/quiz/witcher
      </a>
    </p>
    `,
    enUS: /*html*/ ``,
  },

  gamefication: {
    ptBR: /*html*/ `
    <h4>Sistema de Gamificação da escola Setmind</h4>

    <p>
    No início da pandemia do Covid em 2019, a escola de programação que eu trabalhava
    iniciou as aulas remotas. Todo nosso sistema de Gamificação foi criado com outra tecnologia
    que desenvolvi, um aplicativo que rodava em uma TV na recepção e era necessário a presença
    dos alunos para ter as interações no aplicativo.
    </p>

    <p>
    Tivemos o desafio de criar outra metodologia para a Gameficação em pouco tempo e
    implementá-la para poder manter o engajamento dos alunos e diminuir o Churnning.
    Na época eu tinha um bom conhecimento em Javascript mas muito pouco em Front-End.
    Tive que aprender muitas coisas em pouco tempo, por sorte eu havia feito um evento
    online da Rocketseat chamado NLW, onde me deu uma base para usar o ReactJS.
    Fiz o Backend sendo uma Planilha Google que os professores já usavam para marcar
    os pontos dos alunos, usando a API do Google Apps Script e o Front-End em ReactJS.
    </p>

    <p>
    O engajamento dos alunos aumentou muito e com o passar do tempo fomos melhorando
    aperfeiçoando a Gamificação. Eventualmente  migrei o Front-End para a tecnologia Svelte,
    por ser uma tecnologia mais focada em HTML, CSS e Javascript puro, sem muito boilerplate.
    Um dos objetivos dessa mudança, era porque na equipe somente eu possuía experiência em
    Front-End, mas os outros integrantes já possuíam conhecimento em Javascript,
    o que diminuiria a curva de aprendizado e poderia facilitar a manutenção da aplicação
    no futuro.
    </p>

    <p>
    O código da aplicação possui o código aberto e está no GitHub:
    </p>

    <p>
    Svelte:<br>
      <a
      href="https://github.com/DrZanuff/RankedElo-Setmind-Svelte"
      target="_blank">
        github.com/DrZanuff/RankedElo-Setmind-Svelte
      </a>
    </p>

    <p>
    React:<br>
      <a
      href="https://github.com/DrZanuff/RankedElo-Setmind-React"
      target="_blank">
        github.com/DrZanuff/RankedElo-Setmind-React
      </a>
    </p>

    <p>
    Link da Aplicação:<br>
      <a
      href="https://rankedelo-setmind.netlify.app/"
      target="_blank">
        rankedelo-setmind.netlify.app/
      </a>
    </p>
    `,
    enUS: /*html*/ ``,
  },
  likes: {
    ptBR: /*html*/ `
    <h3>
      INTERESSES
    </h3><p>
      <ul>
        <li>Basketball</li>
        <li>Board Games</li>
        <li>Video Games</li>
        <li>Desenvolvimento de Games</li>
      </ul>
    </p>
    `,
    enUS: /*html*/ ``,
  },

  studies: {
    ptBR: /*html*/ `
    <h3>
      FORMAÇÃO
    </h3><p>
      <ul>
        <li>Ensino Médio completo</li>
        <li>Seis semestres de desenvolvimento de Jogos Digitais</li>
        <li>Ignite da Rocketseat - Trilha ReactJS <img src="/images/icons/rocket.png" alt="Foguete"> </li>
      </ul>
    </p>
    `,
    enUS: /*html*/ ``,
  },
}
