import logo from '../assets/img/logo-embleme.png';
import logoBlanc from '../assets/img/logo-blanc.png';
import logoB from '../assets/img/logoB.svg';
import logoVBL from '../assets/img/logoVerticalBlanc.png';
import logoVbleu from '../assets/img/logoVBL.png';
import logoReact from '../assets/img/logo-react.png';
import logoNode from '../assets/img/logo-node.png';
import logoShopify from '../assets/img/logo-shopify.png';
import logoPulldog from '../assets/img/logo-pulldog.png';
import logoSwear from '../assets/img/logo-swear.png';
import logoLPGDA from '../assets/img/logo-lapagedapres.png';
import logoEnergie from '../assets/img/logo-energie.png';
import profilPic from '../assets/img/profile-picture.JPG';
import { Parallax } from 'react-scroll-parallax';

import React, { useState, useEffect } from 'react';

function Home() {
  var menu;

  useEffect(() => {
    var menu = document.getElementById('menu');
  }, [menu]);

  // Animation Logo
  function handleAnimLogo() {
    var logo = document.getElementById('logo-embleme'); // Remplacez 'elementId' par l'ID de votre élément
    logo.style.animation = 'rotate360 1s';
    logo.addEventListener('animationend', () => {
      logo.style.animation = 'none';
    });
    var menu = document.getElementById('menu');

    if (menu) {
      var style = getComputedStyle(menu);
      var displayValue = style.getPropertyValue('display');

      if (displayValue === 'none' && largeurEcran <= 650) {
        menu.style.display = 'flex';
        menu.style.animation = 'dropdownNavH 0.5s forwards ease-out';
      } else if (displayValue === 'flex' && largeurEcran <= 650) {
        menu.style.animation = 'dropdownNavHReverse 0.5s forwards ease-out';
        menu.addEventListener('animationend', function (event) {
          if (event.animationName === 'dropdownNavHReverse') {
            // Code à exécuter lorsque l'animation dropdownNavHReverse est terminée
            menu.style.display = 'none';
          }
        });
      }
    }
  }

  // Calcul largeur d'ecran
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);

  useEffect(() => {
    var menu = document.getElementById('menu');

    const handleResize = () => {
      setLargeurEcran(window.innerWidth);
    };

    // Ajoutez un écouteur d'événement pour redéfinir la largeur de l'écran lorsqu'il change
    window.addEventListener('resize', handleResize);

    // Navbar .menu display
    if (largeurEcran <= 650) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
      menu.style.animation = 'none';
    }

    // Nettoyez l'écouteur d'événement lorsqu'il n'est plus nécessaire
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [largeurEcran]);

  // Définit d'un endScroll (concernant profil pic container) en fonction de la largeur d'écran
  let endScroll;
  if (largeurEcran >= 1024) {
    endScroll = 1800;
  } else if (largeurEcran <= 1024 && largeurEcran >= 885) {
    endScroll = 3000;
  } else if (largeurEcran <= 885 && largeurEcran >= 720) {
    endScroll = 2700;
  } else if (largeurEcran <= 720 && largeurEcran >= 425) {
    endScroll = 2300;
  } else if (largeurEcran <= 425 && largeurEcran >= 0) {
    endScroll = 2000;
  }

  // Animation des card réalisatsions au hover
  const [realDrop, setRealDrop] = useState(false);

  function realDropped(bool, projet) {
    if (bool === true) {
      setRealDrop(projet);
    } else {
      setRealDrop(null);
    }
  }

  // Fonctions lié à la largeur d'écran
  document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // Anim vague de fond Mon portfolio
    if (scrollY <= 2000) {
      const port = document.querySelector('.portfolio');
      port.style.backgroundPosition = `bottom 0px left ${-scrollY / 15}px`;

      const mon = document.querySelector('.mon');
      mon.style.backgroundPosition = `bottom 30px left ${-scrollY / 3}px`;
    }

    // Animation text shadow du titre MES COMPETENCES
    // if (scrollY >= 3950) {
    //   var competences = document.getElementById('competences-title'); // Remplacez 'elementId' par l'ID de votre élément
    //   competences.style.textShadow = `5px 5px #558ABB`;
    // }

    // if (scrollY <= 3950) {
    //   var competences = document.getElementById('competences-title'); // Remplacez 'elementId' par l'ID de votre élément
    //   competences.style.textShadow = `none`;
    // }

    // NEW TRY ANIM COMPETENCES
    var competencesSeen = false;
    var competences = document.getElementById('competences-title');
    var dropdownContainer = document.querySelector('.dropdown-container');

    var rect = dropdownContainer.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      if (!competencesSeen) {
        if (window.scrollY >= rect.top + 1000) {
          competences.style.textShadow = `5px 5px #558ABB`;
          competencesSeen = true;
        }
      }
    } else {
      competences.style.textShadow = `none`;
    }
    // Animation des dropdowns de la section compétences
    if (scrollY >= 3900) {
      var checked = document.querySelectorAll('.input-drop');
      checked.forEach((element) => {
        element.checked = true;
      });
    }

    if (scrollY <= 3900) {
      var unchecked = document.querySelectorAll('.input-drop');
      unchecked.forEach((element) => {
        element.checked = false;
      });
    }

    // Animation opacity du texte banniere
    var element = document.getElementById('fade-in');
    var minScroll = 1700;
    var maxScroll = 2300; // Par exemple, ajustez à votre convenance
    var opacity = (scrollY - minScroll) / (maxScroll - minScroll);
    opacity = Math.min(1, Math.max(0, opacity));
    element.style.opacity = opacity;
  });

  // Gestion du clique sur les éléments navbar
  function handleClick(target) {
    const targetElement = document.getElementById(target);
    if (target === 'realisations') {
      const offsetTop = targetElement.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else if (target === 'competences') {
      const offsetTop = targetElement.offsetTop - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div>
      <header>
        <Parallax
          translateY={largeurEcran <= 650 ? ['0vh', '21vh'] : ['0vh', '20vh']}
          startScroll={1000}
          endScroll={2000}
          className='nav'
        >
          <div className='logo-container'>
            <img onClick={() => handleAnimLogo()} id='logo-embleme' alt='logo-embleme' src={logo}></img>
          </div>
          <div id='menu'>
            <h2 onClick={() => handleClick('a-propos-container')}>A propos</h2>
            <h2 onClick={() => handleClick('competences')}>Mes Compétences</h2>
            <h2 onClick={() => handleClick('realisations')}>Mes Réalisations</h2>
            <h2 onClick={() => handleClick('contact')}>Contact</h2>
          </div>
        </Parallax>
      </header>

      <section>
        <div id='banniere'>
          <div className='first-sight'>
            <Parallax
              className='logoBanniere-container'
              translateX={['0vw', '-100vw']}
              startScroll={0}
              endScroll={1500}
            >
              <img alt='logo-pierre-potin' id='logoBanniere' src={logoVBL}></img>
              <div className='after-logo'></div>
            </Parallax>
            <Parallax className='big-title' translateX={['0vw', '-100vw']} startScroll={100} endScroll={1700}>
              <h1 className='mon'>Mon</h1>
              <h1 className='portfolio'>portfolio</h1>
              {/* <p>
                {window.innerWidth} {window.innerHeight}
              </p> */}
            </Parallax>
          </div>
          {/* translateX={largeurEcran >= 1100 ? ['80vw', '-45vw'] : ['autre-valeur', 'autre-valeur']} */}
          <Parallax
            id='profil-pic-container'
            translateX={largeurEcran <= 1024 ? ['80vw', '-185vw'] : ['80vw', '-45vw']}
            startScroll={0}
            endScroll={endScroll}
          >
            <img id='profil-pic' alt='moi' src={profilPic}></img>
            <div className='infos-profil'>
              <h2>Freelance | </h2>
              <h2>&nbsp; Fullstack </h2>
            </div>
          </Parallax>
          <div className='banniere-text'>
            <div className='banniere-title'>
              <Parallax translateX={['130vw', '0vw']} startScroll={1500} endScroll={2000}>
                <h2 className='qui'>Qui suis-je ? </h2>
              </Parallax>
              <Parallax id='pierre' translateX={['170vw', '0vw']} startScroll={1500} endScroll={2000}>
                <h2>Pierre POTIN </h2>
              </Parallax>

              <div id='fade-in'>
                <h3>
                  Développeur Web<br></br> Fullstack
                </h3>
                <p>Spécialisé en React, Node.js, et Shopify</p>
              </div>

              <div id='icones-techno'>
                <Parallax
                  translateY={['-150vh', '0vh']}
                  startScroll={1000}
                  endScroll={1900}
                  className='banniere-logoReact'
                >
                  <img alt='react' id='logo-react' src={logoReact}></img>
                </Parallax>
                <Parallax
                  translateY={['-150vh', '0vh']}
                  startScroll={1200}
                  endScroll={2100}
                  className='banniere-logoNode'
                >
                  <img alt='node' id='logo-node' src={logoNode}></img>
                </Parallax>
                <Parallax
                  translateY={['-150vh', '0vh']}
                  startScroll={1100}
                  endScroll={2000}
                  className='banniere-logoShopify'
                >
                  <img alt='shopify' id='logo-shopify' src={logoShopify}></img>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
        <div className='waiting-parallax'></div>

        <div className='after-bann'>
          <div id='a-propos-container'>
            <div id='icones-techno2'>
              <Parallax translateY={['0vh', '20vh']} startScroll={3000} endScroll={3800} id='apropos-logoReact'>
                <img alt='react' id='logo-react2' src={logoReact}></img>
              </Parallax>
              <Parallax translateY={['0vh', '15vh']} startScroll={3200} endScroll={3800} id='apropos-logoNode'>
                <img alt='node' id='logo-node2' src={logoNode}></img>
              </Parallax>
              <Parallax translateY={['0vh', '-10vh']} startScroll={2500} endScroll={3800} id='apropos-logoShopify'>
                <img alt='shopify' id='logo-shopify2' src={logoShopify}></img>
              </Parallax>

              <Parallax translateY={['0vh', '-10vh']} startScroll={3000} endScroll={3800} id='apropos-logoReact1'>
                <img alt='react' id='logo-react2' src={logoReact}></img>
              </Parallax>
              <Parallax translateY={['0vh', '-20vh']} startScroll={3200} endScroll={3800} id='apropos-logoNode1'>
                <img alt='node' id='logo-node2' src={logoNode}></img>
              </Parallax>
              <Parallax translateY={['0vh', '-25vh']} startScroll={3500} endScroll={4000} id='apropos-logoShopify1'>
                <img alt='shopify' id='logo-shopify2' src={logoShopify}></img>
              </Parallax>
            </div>

            <Parallax translateY={['-10px', '10px']} startScroll={4000} endScroll={4400} id='a-propos'>
              <h2>MON PARCOURS</h2>
              <p>
                Ancien <span>Manager</span> en restauration et <span>Titulaire</span> d'une <span>licence</span> en
                Information et Communication ainsi que d'un <span>titre RNCP</span> de Dévéloppeur Web Junior, je suis{' '}
                <span>Passioné</span> par les
                <span> solutions</span> que peuvent apporter le numérique dans tout type de domaines. <br></br>{' '}
                <br></br>
                <span id='citation'>"Il n'y a pas de problème, il n'y a que des solutions"</span>
                <br></br>
                <span>Rigoureux, proactif et constructif,</span> j'ai plaisir à trouver la solution à la problématique
                posé, quelle soit d'ordre <span>technique et fonctionnelle, ou estéthique.</span>
                <br></br>
                <br></br>
                <span>A l'écoute, habitué au travail en équipe et force de proposition</span>, j'ai à coeur d'enrichir
                les projets dans lesquels je m'investis, à toute étape du processus
                <span> de création et de développement.</span>
              </p>
            </Parallax>
          </div>

          <div id='competences'>
            <Parallax translateY={['-200px', '0px']} startScroll={3500} endScroll={4000}>
              <h2 id='competences-title'>MES COMPETENCES</h2>
            </Parallax>

            <div className='dropdown-container'>
              <div className='dropdown'>
                <input type='checkbox' id='dropdown' className='input-drop' />

                <label className='dropdown__face' htmlFor='dropdown'>
                  <div className='dropdown__text'>HTML + CSS + JAVASCRIPT</div>

                  <div className='dropdown__arrow'></div>
                </label>

                <ul className='dropdown__items'>
                  <p>
                    Avec une expertise approfondie en <span>HTML, CSS et JavaScript,</span> je façonne des expériences
                    web modernes et esthétiques. Chaque ligne de code que j'écris est soigneusement optimisée pour
                    garantir des <span>sites web réactifs et fluides.</span> Mon engagement envers les dernières normes
                    de l'industrie garantit <span>des interfaces utilisateur attrayantes et accessibles.</span>
                  </p>
                </ul>
              </div>
              <div className='dropdown'>
                <input type='checkbox' id='dropdown1' className='input-drop' />

                <label className='dropdown__face' htmlFor='dropdown1'>
                  <div className='dropdown__text'>NODE.JS + REACT</div>

                  <div className='dropdown__arrow'></div>
                </label>

                <ul className='dropdown__items items1'>
                  <p>
                    Maîtrisant <span>le stack MERN</span> (MongoDB, Express.js, React, Node.js), je crée des
                    applications <span>web robustes et dynamiques</span>. Avec Node.js côté serveur, je m'assure que les
                    applications sont <span>performantes et évolutives</span>. En utilisant React pour le côté client,
                    je crée des interfaces utilisateur <span>interactives et intuitives</span> qui offrent une
                    expérience utilisateur exceptionnelle.
                  </p>
                </ul>
              </div>
              <div className='dropdown'>
                <input type='checkbox' id='dropdown2' className='input-drop' />

                <label className='dropdown__face' htmlFor='dropdown2'>
                  <div className='dropdown__text'>SHOPIFY</div>

                  <div className='dropdown__arrow'></div>
                </label>

                <ul className='dropdown__items items2'>
                  <p>
                    En tant que spécialiste Shopify, je crée des <span> boutiques en ligne</span> sur mesure qui se
                    démarquent. Mon expertise inclut la conception de <span>thèmes personnalisés</span>, l'optimisation
                    de <span>l'expérience utilisateur</span> et l'intégration de <span>fonctionnalités avancées</span>.
                    Je veille à ce que chaque boutique soit parfaitement optimisée pour le <span>référencement</span>
                    (SEO) et je fournis une formation complète pour une <span>gestion autonome.</span>
                  </p>
                </ul>
              </div>
            </div>

            <svg>
              <filter id='goo'>
                <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
                <feColorMatrix
                  in='blur'
                  type='matrix'
                  values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
                  result='goo'
                />
                <feBlend in='SourceGraphic' in2='goo' />
              </filter>
            </svg>
          </div>

          <div id='realisations'>
            <h2>MES REALISATIONS</h2>
            <div className='real-content'>
              <div className='real-firstline'>
                <div
                  onMouseEnter={() => realDropped(true, 'energie')}
                  onMouseLeave={() => realDropped(false, 'energie')}
                  className='card-real'
                >
                  <div className='card-real-header'>
                    <h3>Energie Animale</h3>
                  </div>

                  <div className='card-section'>
                    {realDrop === 'energie' ? (
                      <div className='card-text'>
                        Site réalisé pour une particulière, avec une partie réservée à l'administration, a la gestion
                        des rendez-vous, des informations de contact, un système de mail et de confirmation de paiement.
                        Entierement construit avec React et Node.js
                      </div>
                    ) : (
                      <div className='logo-projet'>
                        <img src={logoEnergie} id='logo-energie-animale' alt='Energie Animale'></img>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  onMouseEnter={() => realDropped(true, 'page')}
                  onMouseLeave={() => realDropped(false, 'page')}
                  className='card-real'
                >
                  <div className='card-real-header'>
                    <h3>La Page D'après</h3>
                  </div>

                  <div className='card-section'>
                    {realDrop === 'page' ? (
                      <div className='card-text'>
                        Site réalisé sur shopify sans template, avec inspiration du travail de la graphiste. Ajout d'une
                        application en locale pour la cliente pour rendre la gestion de ses stocks complètement
                        autonome.
                      </div>
                    ) : (
                      <div className='logo-projet'>
                        <img src={logoLPGDA} id='logo-lgpda' alt="La page d'après"></img>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='real-secondline'>
                <div
                  onMouseEnter={() => realDropped(true, 'swear')}
                  onMouseLeave={() => realDropped(false, 'swear')}
                  className='card-real'
                >
                  <div className='card-real-header'>
                    <h3>Swear</h3>
                  </div>

                  <div className='card-section'>
                    {realDrop === 'swear' ? (
                      <div className='card-text'>
                        Site réalisé pour une agence avec un template et collaboration avec la cheffe de projet en
                        relation avec la cliente.
                      </div>
                    ) : (
                      <div className='logo-projet'>
                        <img src={logoSwear} id='logo-swear' alt='Swear'></img>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className='card-real'
                  onMouseEnter={() => realDropped(true, 'pulldog')}
                  onMouseLeave={() => realDropped(false, 'pulldog')}
                >
                  <div className='card-real-header'>
                    <h3>PullDog</h3>
                  </div>

                  <div className='card-section'>
                    {realDrop === 'pulldog' ? (
                      <div className='card-text'>
                        Site anciennement existant réalisé et hébergé sur Joomla, travail de récupération des données et
                        de reconstruction de la structure entière du site.
                      </div>
                    ) : (
                      <div className='logo-projet'>
                        <img src={logoPulldog} id='logo-pulldog' alt='Pulldog'></img>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='contact'>
          <h2>CONTACTEZ-MOI</h2>

          <div>
            <h3>Par Téléphone</h3>
            <p>06.52.27.18.50</p>
          </div>
          <div>
            <h3>Par Mail</h3>
            <p>contact@pierre-potin.com</p>
          </div>
        </div>
      </section>
      <footer>
        <img src={logoVbleu} id='logo-footer'></img>
      </footer>
    </div>
  );
}

export default Home;
