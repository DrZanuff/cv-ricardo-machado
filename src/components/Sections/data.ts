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

    enUS: /*html*/ `
    <p>
    I have always loved technology and games. The beginning of my professional career was as varied as possible, from delivering lunch boxes and pamphlets, to teaching volunteer community basketball classes and designing a website for a small restaurant.
    </p>

    <p>
    When I actually entered the job market, I started working as technical support, but I always studied programming and wanted to work with something involving it. I had my opportunity when I started working as a teacher at a programming school focused on the growth of students' soft skills and logic. I've a lot of interest in the area of game development and I've participated in several development marathons.
    </p> 

    <p>
    At a certain point, after having to create some solutions using web technologies for work and having done two Bootcamps, the interest in Front-End development awoke. I took a course focused on the area and learned a lot in a short time.
    </p>

    <p>
    I've gone through several technologies and languages, including Pascal, Delphi and Python. Then visual languages used in some Game Engines, such as Clickteam Fusion and Construct. There was a time when I fell in love with 3D and learned a lot about Blender, like 3D modeling and animation. So I started using Godot Game Engine, where I mastered the Python-based engine language, GDScript, which is currently my favorite game development tool.
    </p>

    <p>
    I always worked with the Design part as well, as I learned Photoshop and other Adobe packages early on. In all the jobs I did I was always involved with something related to design. From creating flyers, even making designs to post on social networks.
    </p>

    <p>
    I've been a Windows user for a long time, but it's been a few years since I embraced the Open Source world and I'm a happy Linux user. I've even contributed to some tools, like the GDevelop engine, a Visual Open Source Game Engine.
    </p>

    <p>
    I really enjoy learning new things and having new challenges. I am a very calm person and I like to have a good relationship with people. Good teamwork in my opinion is essential for a company to take off.
    </p> 
    `,
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
    Assistente Técnico Bilíngue<br>
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
    enUS: /*html*/ `
    <h3>EXPERIENCES</h3>

    <h4>Agência e-Plus - Front-End Developer</h4>
    <p>
    Competencies: Development of eCommerce sites using the Vtex platform. The main technologies to create the websites of the stores were Vanilla JS and/or Typescript with SASS. I also worked on some websites using ReactJS + Typescript + Gatsby.
    </p>

    <h4>Chippu website redesign</h4>
    <p>
    Competencies: I was responsible for implementing a redesign made in Figma on a site with more than a thousand hits per day. The technologies used were ReactJS + Netx.js, Styled Components for styling in addition to Firebase and API consumption.
    </p>

    <h4>FAMATEC - Technical support</h4>
    <p>
    Skills: First job, I worked as technical support at this college. I provided support for teachers and employees, as well as helping to maintain the infrastructure. In this job I learned a lot about design and Photoshop, as the company's Web Designer mentored me in our spare time.
    </p>

    <h4>myMac - Apple Authorized Service</h4>
    <p>
    Bilingual Technical Assistant.<br>
    Skills: myMac was Apple's first authorized company in the capital, my role in the company was technical assistance and customer service. I learned a lot about the Apple universe, from the maintenance of Iphones to the use of MacOS. I brought to the company the use of Cloud tools, now known as Google Workspace. At the time I implemented the modernization of several processes using Google Sheets. In the 2014 World Cup I acted as a bilingual technical assistant for foreign customers.
    </p>

    <h4>Setmind - Product manager</h4>
    <p>
    Skills: In this job I started as a game programming teacher for children and teenagers. As the company grew, I became a product manager, being responsible for creating the course material and methodology. The school started to focus more on teaching Soft Skills and agile methodology to students. I developed and taught the programming course for adults who work in the administrative and financial areas, using Google tools and Google Apps Script (a subset of ECMAScript 5).
    </p>

    <p>
    I was also responsible for implementing the school's Gamification system, creating the Front-End using React and Svelte and the Back-End using Apps Script and Google Sheets.
    </p>
    `,
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
    enUS: /*html*/ `
    <h4>COM FOGO NÃO SE BRINCA (DON'T PLAY WITH FIRE)</h4>

    <p>
    In this project, involving the Burn Prevention and Intervention Association (Avance), the Asa Norte Regional Hospital (HRAN), the UDF Digital Games Course and Setmind technology school, I was the Lead Programmer, responsible for programming, Game Design and the port to the Google Play store. The game aims to guide children over 7 years of age about burn prevention.
    </p>

    <p>
    The challenges of this project included:
      <ul>
        <li>
        Time: Our deadline was 2 months for the delivery of the product, which was supposed to be inaugurated at the hospital together with the wife of the city governor who was involved in the project at the time, as she had ties to Avance.
        </li>
        <li>
        Hardware: As this game was supposed to be played by children and be very accessible even to needy families, we had to do a very well-planned work for the game to run even on entry-level smartphones that had very low specs.
        </li>
      </ul>
    </p>

    <p>
    Unfortunately the game is no longer on the Google Play Store, but it can still be played on my portfolio page:
    </p>

    <p>
    <a href="https://drzanuff.itch.io/com-fogo-no-se-brinca" target="_blank">
      drzanuff.itch.io/com-fogo-no-se-brinca
    </a>
    </p>

    <p>
    News about the game:<br>
    
    <a
    href="https://www.conass.org.br/aplicativo-vai-orientar-criancas-a-prevenir-queimaduras/"
    target="_blank">
    www.conass.org.br/aplicativo-vai-orientar-criancas-a-prevenir-queimaduras/
    </a>
    </p>
    `,
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
    enUS: /*html*/ `
    <h3>HIGHLIGHTS</h3>

    <h4>Chippu website redesign</h4>

    <p>
    Site:<br>
      <a
      href="https://www.chippu.com.br/"
      target="_blank">
        www.chippu.com.br
      </a>
    </p>

    <p>
    I worked leading a team of two interns to implement the Chippu website redesign. Conceived by journalist and content creator Thiago Romariz (former content director of the Omelete website), the Chippu application (which means "hint", in Japanese) unites artificial intelligence algorithms with human curation to give tips and suggestions for movies on streaming platforms, such as Netflix, GloboPlay, Amazon Prime Video and HBO Go. The site is a web version of the application with a focus on news as well, using a custom CMS.
    </p>

    <p>
    It was a very good experience, because in addition to leading a small team, using agile methodologies, it was also my first real project using Next.js. It is worth mentioning that little was reused from the old site and many layouts and components were created from scratch. We used the initial design done in Figma, but from a point on I had to create some new screens using Figma itself.
    </p>

    <p>
    One of the components I liked working the most at the time was the Tips component, which showed every day a movie recommendation based on the user's profile.
    </p>

    <p>
    Access the link below to view the component template:<br>
      <a
      href="https://www.chippu.com.br/titulos"
      target="_blank">
        www.chippu.com.br/titulos
      </a>
    </p>
    `,
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
    enUS: /*html*/ `
    <h4>Witcher Quiz</h4>

    <p>
    Access the link below to view the Quiz (*you must create an account to take the Quiz):<br>
    <a
    href="https://www.chippu.com.br/quiz/witcher"
    target="_blank">
      www.chippu.com.br/quiz/witcher
    </a>
    </p>

    <p>
    During the launch of the second season of the Witcher series on Netflix, I was asked to create a Quiz interface requested by Netflix itself as a publicity piece in order to increase interest in the series. The Backend used was Firebase. Eventually this Quiz was used as a template for other Quizzes. The Netflix representative was very pleased with the result and the visual effect was well praised. Below you can access the static version of the Quiz:
    </p>
    
    <p>
      <a
      href="https://www.chippu.com.br/quiz/witcher"
      target="_blank">
        www.chippu.com.br/quiz/witcher
      </a>
    </p>
    `,
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
    enUS: /*html*/ `
    <h4>Setmind School's Gamification System</h4>

    <p>
    At the beginning of the Covid pandemic in 2019, the programming school I worked at started remote classes. Our entire Gamification system was created with another technology that I developed, an application that ran on a TV at the reception and it was necessary for the students to be present to have the interactions with the application.
    </p>

    <p>
    We had the challenge of creating another methodology for Gamification in a short time and implementing it in order to maintain student engagement and reduce churning. At the time I had good knowledge in Javascript but very little in Front-End. I had to learn a lot in a short time, luckily I had done an online Rocketseat event called NLW, where it gave me a base to use ReactJS. I made the Backend using Google Tools that teachers already used to score students' points, using the Google Apps Script API, a Google Sheet and the Front-End in ReactJS.
    </p>

    <p>
    The engagement of the students has increased a lot and over time we have been improving the Gamification. Eventually I migrated the Front-End to Svelte technology, as it is more focused on HTML, CSS and pure Javascript, without much boilerplate. One of the goals of this change was because in the team, only I had experience in Front-End, but the other members already had knowledge in Javascript, which would reduce the learning curve and could facilitate the maintenance of the application in the future.
    </p>

    <p>
    The application code is open source and is on GitHub:
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
    Application Link:<br>
      <a
      href="https://rankedelo-setmind.netlify.app/"
      target="_blank">
        rankedelo-setmind.netlify.app/
      </a>
    </p>
    `,
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
    enUS: /*html*/ `
    <h3>
    INTERESTS
    </h3><p>
      <ul>
        <li>Basketball</li>
        <li>Board Games</li>
        <li>Video Games</li>
        <li>Game Development</li>
      </ul>
    </p>
    `,
  },

  studies: {
    ptBR: /*html*/ `
    <h3>
      FORMAÇÃO
    </h3><p>
      <ul>
        <li>Ensino Médio completo</li>
        <li>Seis semestres de desenvolvimento de Jogos Digitais</li>
        <li>Rocketseat Ignite Bootcamp - ReactJS<img src="/images/icons/rocket.png" alt="Foguete"> </li>
      </ul>
    </p>
    `,
    enUS: /*html*/ `
    <h3>
    GRADUATION
    </h3><p>
      <ul>
        <li>Complete high school</li>
        <li>Six semesters of Digital Game development</li>
        <li>Ignite da Rocketseat - Trilha ReactJS <img src="/images/icons/rocket.png" alt="Foguete"> </li>
      </ul>
    </p>
    `,
  },
}
