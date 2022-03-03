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

    <h4>FAMATEC - Suporte Técnico</h4>
    <p>
    Competências: Primeiro emprego, trabalhei como suporte técnico nesta faculdade.
    Eu prestava suporte para os professores e empregados, como também auxiliava na
    manutenção do CPD. Neste emprego aprendi muito sobre design e PhotoShop,
    pois o Web Designer da empresa me fazia mentoria nos nossos tempos livres.
    </p>

    <h4>NWI - Suporte Técnico</h4>
    <p>
    Competências: A NWI é Telecom de internet via rádio e trabalhei lá como suporte
    técnico de usuários para os clientes empresariais e de editais. Aprendi muito sobre
    estrutura de redes e várias tecnologias diferentes, como configuração de equipamento
    de rádios.
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
    <h3>DESTAQUES</h3>

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
    <a href="drzanuff.itch.io/com-fogo-no-se-brinca" target="_blank">
      drzanuff.itch.io/com-fogo-no-se-brinca
    </a>
    </p>

    <p>
    Noticias sobre o jogo: 
    
    <a
    href="www.conass.org.br/aplicativo-vai-orientar-criancas-a-prevenir-queimaduras/"
    target="_blank">
    www.conass.org.br/aplicativo-vai-orientar-criancas-a-prevenir-queimaduras/
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
    Svelte:
      <a
      href="github.com/DrZanuff/RankedElo-Setmind-Svelte"
      target="_blank">
        github.com/DrZanuff/RankedElo-Setmind-Svelte
      </a>
    </p>

    <p>
    React:
      <a
      href="github.com/DrZanuff/RankedElo-Setmind-React"
      target="_blank">
        github.com/DrZanuff/RankedElo-Setmind-React
      </a>
    </p>

    <p>
    Link da Aplicação:
      <a
      href="rankedelo-setmind.netlify.app/"
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
      GOSTOS
    </h3><p>
      <ul>
        <li>Basketball</li>
        <li>Board Games</li>
        <li>Jogar Video Games</li>
        <li>Desenvolver Video Games</li>
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
