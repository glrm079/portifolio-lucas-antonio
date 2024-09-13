import { useState } from 'react'
import starsbackground from './assets/giphy.webp'
import './App.css'

const caracteristicas = [
  {
    titulo: "Sede por Conhecimento",
    descricao: "Tenho uma sede por conhecimento que me impulsiona a buscar constantemente novos aprendizados e experiências. Essa paixão por aprender me permite manter-me atualizado e adaptar-me rapidamente a novos desafios, enriquecendo minhas habilidades e contribuindo com inovação."
  },
  {
    titulo: "Criatividade",
    descricao: "Minha criatividade me permite gerar ideias originais e encontrar soluções inovadoras para problemas. Essa capacidade de pensar fora dos padrões ajuda a elaborar estratégias únicas e a agregar valor significativo a projetos e iniciativas."
  },
  {
    titulo: "Observador",
    descricao: "Sou um observador atento, com a capacidade de captar detalhes sutis e compreender dinâmicas ao meu redor. Essa habilidade me permite perceber padrões e nuances essenciais para análises profundas e tomadas de decisões informadas."
  },
  {
    titulo: "Rápido Aprendizado",
    descricao: "Minha habilidade de aprender rapidamente me permite assimilar e aplicar novos conhecimentos de forma eficiente. Isso facilita minha adaptação a novas ferramentas e metodologias, aumentando minha produtividade e capacidade de enfrentar desafios com agilidade."
  }
];

function App() {
  const [index, setIndex] = useState(0); // Usar um índice para alternar
  const [habilidade, setHabilidade] = useState(caracteristicas[0].titulo);
  const [text, setText] = useState(caracteristicas[0].descricao);

  function handleClick() {
    const nextIndex = (index + 1) % caracteristicas.length; // Alterna ciclicamente
    setIndex(nextIndex);
    setHabilidade(caracteristicas[nextIndex].titulo);
    setText(caracteristicas[nextIndex].descricao);
  }
  return (
    <>
        
        <img className='h-full  z-10 opacity-15 right-0 fixed' src={starsbackground} alt="" />
        <img className=' h-full  z-10 opacity-15 fixed' src={starsbackground} alt="" />
  
       
        <header className='flex flex-row   p-5 text-zinc-50 z-20 justify-center'>
          <h1 className='font-bold text-xl w-52'>
            Lucas Antonio
          </h1>
        
          <svg className='w-7 ml-auto mr-auto' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
          <nav className='flex flex-row gap-1 text-base w-52 z-20'>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          
        </header>
        <hr className='bg-zinc-50 ml-auto mr-auto z-20 ' />
        <div id='home'  className='flex justify-center items-center z-20 flex-col home'>
          <h1 className='text-9xl text-zinc-50'>Lucas Antonio</h1>
          <p className='text-zinc-50 mt-20 seemore'>
            Click para ver mais
          </p>
          <div className='flex flex-row items-center gap-5  z-20  '>
            <hr className='bg-zinc-50 w-96 ml-auto mr-auto z-20 ' />
            <a href="#sobre">
            <svg className='w-10 ml-auto mr-auto  rotating-element' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </a>
            <hr className='bg-zinc-50 w-96 ml-auto mr-auto z-20 ' />
          </div>
        </div>
        <div id='sobre' className=' p-24  z-20'>
            <h1 className='text-zinc-50 text-6xl'>
              Sobre
            </h1>
            <hr className='bg-zinc-50 w-full  z-20 mb-10' />
            <div className='flex flex-row'>
              <div className='text-zinc-50 w-1/2 '>
                <p className='text-xl w-2/3 font-sans'>
                Olá, meu nome é Lucas Dias e sou estudante de Análise e Desenvolvimento de Sistemas na UBC. Com uma abordagem criativa e uma curiosidade insaciável, busco constantemente novas formas de resolver problemas e inovar no campo da tecnologia. Meu perfil crítico me permite analisar e entender profundamente os desafios que encontro, ajudando-me a desenvolver soluções mais eficazes e bem elaboradas. Estou sempre aberto a novas experiências e ansioso para aplicar meus conhecimentos em projetos que desafiem minha capacidade e ampliem minhas habilidades
                </p>
              </div>
              <div className='text-zinc-50 w-1/2 z-20 '>
                <div className='flex flex-row'>
                 
              
              <h1 className='text-zinc-50 text-5xl'>Características</h1>
            
            
              <svg onClick={handleClick} className='w-10 rotating-element' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
             
            </div>
            <p>Click na estrela para ver mais</p>
            <h1 className='text-zinc-50 text-3xl mt-10 mb-5 font-bold'>{habilidade}</h1>
            <p className='text-xl font-sans'>{text}</p>
          </div>
            
            </div>          
        </div>
        <div id='contato' className='h-screen p-24  z-20 '>
            <h1 className='text-zinc-50 text-6xl text-center'>
              Contato
            </h1>
            <hr className='bg-zinc-50 w-full  z-20 mb-10 ' />
            <div className='flex flex-row justify-around items-center h-full'>
              <div  className='flex flex-col justify-center items-center text-zinc-50'>
                <svg className='w-24 mb-4'viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>instagram [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                <p>@
                inconsistencyluke</p>
                
              </div>
              <div className='flex flex-col justify-center items-center text-zinc-50'>
                <svg className='w-32' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                <p>keincnst@gmail.com </p>
              </div>
              <div className='flex flex-col justify-center items-center text-zinc-50'>
              <svg className='w-32' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                 <p>+55 (11) 939275482</p>
              </div>
            </div>
        </div>
        <hr className='bg-zinc-50 ml-auto mr-auto z-20 w-11/12' />
        <footer className='p-10 text-zinc-50 text-center'>
          <p>
            coded by: <span><a href="">Guilherme henrique machado de oliveira Rgm:38781352</a></span>
          </p>
        </footer>
        
    </>
  )
}

export default App
