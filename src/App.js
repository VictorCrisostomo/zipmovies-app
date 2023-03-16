import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/main.css"

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Pages
const LazyHome = React.lazy(() => import ('./pages/Home'));
const LazyFilmes = React.lazy(() => import ('./pages/Filmes'));
const LazySeries = React.lazy(() => import ('./pages/Series'));
const LazyLancamentos = React.lazy(() => import ('./pages/Lancamentos'));
const LazyColecoes = React.lazy(() => import ('./pages/Colecoes'));
const LazyPedidos = React.lazy(() => import ('./pages/Pedidos'));
const LazyCursos = React.lazy(() => import ('./pages/Cursos'));
const LazyTorrents = React.lazy(() => import ('./pages/Torrents'));

// Coleções
const LazyColHarrypotter = React.lazy(() => import ('./pages/Colecoes/Harry-Potter'));
const LazyColJogosVorazes = React.lazy(() => import ('./pages/Colecoes/Jogos-vorazes'));
const LazyColJonhWick = React.lazy(() => import ('./pages/Colecoes/Jonh-Wick'));
const LazyColJurassicPark = React.lazy(() => import ('./pages/Colecoes/Jurassic-park'));
const LazyColMissaoImpossivel = React.lazy(() => import ('./pages/Colecoes/Missao-impossivel'));
const LazyColOSenhordosAneis = React.lazy(() => import ('./pages/Colecoes/O-Senhor-dos-Aneis'));
const LazyColRockyBalboa = React.lazy(() => import ('./pages/Colecoes/Rocky-Balboa'));
const LazyColStarWars = React.lazy(() => import ('./pages/Colecoes/Star-wars'));
const LazyColTransformers = React.lazy(() => import ('./pages/Colecoes/Transformers'));
const LazyColUcm = React.lazy(() => import ('./pages/Colecoes/Ucm'));
const LazyColVelozeseFuriosos = React.lazy(() => import ('./pages/Colecoes/Velozes-e-furiosos'));

// Filmes
const LazyAvatar = React.lazy(() => import ('./pages/Filmes/avatar'));
const LazyAGuerraDoAmanha = React.lazy(() => import ('./pages/Filmes/a-guerra-do-amanha'));
const LazyBemVindaaQuixeramobim = React.lazy(() => import ('./pages/Filmes/Bem-vinda-a-quixeramobim'));
const LazyOs4malfeitores = React.lazy(() => import ('./pages/Filmes/Os-4-malfeitores'));
const LazyHomemdeFerro = React.lazy(() => import ('./pages/Filmes/homem-de-ferro'));
const LazyHomemdeFerro2 = React.lazy(() => import ('./pages/Filmes/homem-de-ferro-2'));
const LazyHomemdeFerro3 = React.lazy(() => import ('./pages/Filmes/homem-de-ferro-3'));
const LazyCapitaoAmerica = React.lazy(() => import ('./pages/Filmes/capitao-america'));
const LazyCapitaoAmerica2 = React.lazy(() => import ('./pages/Filmes/capitao-america-2'));
const LazyCapitaoAmerica3 = React.lazy(() => import ('./pages/Filmes/capitao-america-3'));
const LazyHomemFormiga = React.lazy(() => import ('./pages/Filmes/homem-formiga'));
const LazyHomemFormiga2 = React.lazy(() => import ('./pages/Filmes/homem-formiga-2'));
const LazyPanteraNegra = React.lazy(() => import ('./pages/Filmes/pantera-negra'));
const LazyGuardioesdaGalaxia = React.lazy(() => import ('./pages/Filmes/guardioes-da-galaxia'));
const LazyGuardioesdaGalaxia2 = React.lazy(() => import ('./pages/Filmes/guardioes-da-galaxia-2'));
const LazyTopGun = React.lazy(() => import ('./pages/Filmes/top-gun'));
const LazyJurassicPark = React.lazy(() => import ('./pages/Filmes/jurassic-park'));
const LazyJurassicPark2 = React.lazy(() => import ('./pages/Filmes/jurassic-park-2'));
const LazyJurassicPark3 = React.lazy(() => import ('./pages/Filmes/jurassic-park-3'));
const LazyJurassicWorld = React.lazy(() => import ('./pages/Filmes/jurassic-world'));
const LazyJurassicWorld2 = React.lazy(() => import ('./pages/Filmes/jurassic-world-2'));
const LazyJurassicWorld3 = React.lazy(() => import ('./pages/Filmes/jurassic-world-3'));
const LazyDoutorEstranho2 = React.lazy(() => import ('./pages/Filmes/doutor-estranho-2'));
const LazyAgenteOculto = React.lazy(() => import ('./pages/Filmes/agente-oculto'));
const LazyAmordeRedencao = React.lazy(() => import ('./pages/Filmes/amor-de-redencao'));
const LazyUncharted = React.lazy(() => import ('./pages/Filmes/uncharted'));
const LazyAdaoNegro = React.lazy(() => import ('./pages/Filmes/adao-negro'));
const LazyJonhWick = React.lazy(() => import ('./pages/Filmes/jonh-wick'));
const LazyJonhWick2 = React.lazy(() => import ('./pages/Filmes/jonh-wick-2'));
const LazyJonhWick3 = React.lazy(() => import ('./pages/Filmes/jonh-wick-3'));
const LazyDivergente = React.lazy(() => import ('./pages/Filmes/divergente'));
const LazyDivergente2 = React.lazy(() => import ('./pages/Filmes/divergente-2'));
const LazyDivergente3 = React.lazy(() => import ('./pages/Filmes/divergente-3'));
const LazyMadMax = React.lazy(() => import ('./pages/Filmes/mad-max'));
const LazyHarryPotter = React.lazy(() => import ('./pages/Filmes/harry-potter'));
const LazyHarryPotter2 = React.lazy(() => import ('./pages/Filmes/harry-potter-2'));
const LazyHarryPotter3 = React.lazy(() => import ('./pages/Filmes/harry-potter-3'));
const LazyHarryPotter4 = React.lazy(() => import ('./pages/Filmes/harry-potter-4'));
const LazyHarryPotter5 = React.lazy(() => import ('./pages/Filmes/harry-potter-5'));
const LazyHarryPotter6 = React.lazy(() => import ('./pages/Filmes/harry-potter-6'));
const LazyHarryPotter7 = React.lazy(() => import ('./pages/Filmes/harry-potter-7'));
const LazyHarryPotter8 = React.lazy(() => import ('./pages/Filmes/harry-potter-8'));
const LazyJogosVorazes = React.lazy(() => import ('./pages/Filmes/jogos-vorazes'));
const LazyJogosVorazes2 = React.lazy(() => import ('./pages/Filmes/jogos-vorazes-2'));
const LazyJogosVorazes3 = React.lazy(() => import ('./pages/Filmes/jogos-vorazes-3'));
const LazyJogosVorazes4 = React.lazy(() => import ('./pages/Filmes/jogos-vorazes-4'));
const LazyVelozesFuriosos = React.lazy(() => import ('./pages/Filmes/velozes-e-furiosos'));
const LazyVelozesFuriosos2 = React.lazy(() => import ('./pages/Filmes/velozes-e-furiosos-2'));
const LazyVelozesFuriosos3 = React.lazy(() => import ('./pages/Filmes/velozes-e-furiosos-3'));

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
        <Routes>
          {/* Pages */}
          <Route path="/"
          element={<React.Suspense fallback={<Loading />}>
              <LazyHome />
            </React.Suspense>
          }/>
          <Route path="/filmes"
            element={<React.Suspense fallback={<Loading />}>
                <LazyFilmes />
              </React.Suspense>
          }/>
          <Route path="/series"
            element={<React.Suspense fallback={<Loading />}>
                <LazySeries />
              </React.Suspense>
          }/>
          <Route path="/lancamentos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyLancamentos />
              </React.Suspense>
          }/>
          <Route path="/colecoes"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColecoes />
              </React.Suspense>
          }/>
          <Route path="/pedidos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyPedidos />
              </React.Suspense>
          }/>
          <Route path="/cursos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyCursos />
              </React.Suspense>
          }/>
          <Route path="/Torrents"
            element={<React.Suspense fallback={<Loading />}>
                <LazyTorrents />
              </React.Suspense>
          }/>

          {/* Coloções */}
          <Route path="/colecoes/harry-potter"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColHarrypotter />
              </React.Suspense>
          }/>
          <Route path="/colecoes/jogos-vorazes"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColJogosVorazes />
              </React.Suspense>
          }/>
          <Route path="/colecoes/jonh-wick"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColJonhWick />
              </React.Suspense>
          }/>
          <Route path="/colecoes/jurassic-park"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColJurassicPark />
              </React.Suspense>
          }/>
          <Route path="/colecoes/missao-impossivel"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColMissaoImpossivel />
              </React.Suspense>
          }/>
          <Route path="/colecoes/o-senhor-dos-aneis"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColOSenhordosAneis />
              </React.Suspense>
          }/>
          <Route path="/colecoes/rocky-balboa"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColRockyBalboa />
              </React.Suspense>
          }/>
          <Route path="/colecoes/star-wars"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColStarWars />
              </React.Suspense>
          }/>
          <Route path="/colecoes/transformers"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColTransformers />
              </React.Suspense>
          }/>
          <Route path="/colecoes/ucm"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColUcm />
              </React.Suspense>
          }/>
          <Route path="/colecoes/velozes-e-furiosos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColVelozeseFuriosos />
              </React.Suspense>
          }/>

          {/* Filmes */}
          <Route path="/filmes/avatar"
            element={<React.Suspense fallback={<Loading />}>
                <LazyAvatar />
              </React.Suspense>
          }/>
          <Route path="/filmes/a-guerra-do-amanha"
            element={<React.Suspense fallback={<Loading />}>
                <LazyAGuerraDoAmanha />
              </React.Suspense>
          }/>
          <Route path="/filmes/bem-vinda-a-quixeramobim"
            element={<React.Suspense fallback={<Loading />}>
                <LazyBemVindaaQuixeramobim />
              </React.Suspense>
          }/>
          <Route path="/filmes/os-4-malfeitores"
            element={<React.Suspense fallback={<Loading />}>
                <LazyOs4malfeitores />
              </React.Suspense>
          }/>
          <Route path="/filmes/homem-de-ferro"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemdeFerro />
              </React.Suspense>
          }/>
          <Route path="/filmes/homem-de-ferro-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemdeFerro2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/homem-de-ferro-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemdeFerro3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/capitao-america"
            element={<React.Suspense fallback={<Loading />}>
                <LazyCapitaoAmerica />
              </React.Suspense>
          }/>
          <Route path="/filmes/capitao-america-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyCapitaoAmerica2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/capitao-america-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyCapitaoAmerica3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/homem-formiga"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemFormiga />
              </React.Suspense>
          }/>
          <Route path="/filmes/homem-formiga-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemFormiga2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/pantera-negra"
            element={<React.Suspense fallback={<Loading />}>
                <LazyPanteraNegra />
              </React.Suspense>
          }/>
          <Route path="/filmes/guardioes-da-galaxia"
            element={<React.Suspense fallback={<Loading />}>
                <LazyGuardioesdaGalaxia />
              </React.Suspense>
          }/>
          <Route path="/filmes/guardioes-da-galaxia-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyGuardioesdaGalaxia2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/top-gun"
            element={<React.Suspense fallback={<Loading />}>
                <LazyTopGun />
              </React.Suspense>
          }/>
          <Route path="/filmes/jurassic-park"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJurassicPark />
              </React.Suspense>
          }/>
          <Route path="/filmes/jurassic-park-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJurassicPark2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/jurassic-park-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJurassicPark3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/jurassic-world"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJurassicWorld />
              </React.Suspense>
          }/>
          <Route path="/filmes/jurassic-world-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJurassicWorld2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/jurassic-world-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJurassicWorld3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/doutor-estranho-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyDoutorEstranho2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/agente-oculto"
            element={<React.Suspense fallback={<Loading />}>
                <LazyAgenteOculto />
              </React.Suspense>
          }/>
          <Route path="/filmes/amor-de-redencao"
            element={<React.Suspense fallback={<Loading />}>
                <LazyAmordeRedencao />
              </React.Suspense>
          }/>
          <Route path="/filmes/uncharted"
            element={<React.Suspense fallback={<Loading />}>
                <LazyUncharted />
              </React.Suspense>
          }/>
          <Route path="/filmes/adao-negro"
            element={<React.Suspense fallback={<Loading />}>
                <LazyAdaoNegro />
              </React.Suspense>
          }/>
          <Route path="/filmes/jonh-wick"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJonhWick />
              </React.Suspense>
          }/>
          <Route path="/filmes/jonh-wick-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJonhWick2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/jonh-wick-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJonhWick3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/divergente"
            element={<React.Suspense fallback={<Loading />}>
                <LazyDivergente />
              </React.Suspense>
          }/>
          <Route path="/filmes/divergente-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyDivergente2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/divergente-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyDivergente3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/mad-max"
            element={<React.Suspense fallback={<Loading />}>
                <LazyMadMax />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter-4"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter4 />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter-5"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter5 />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter-6"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter6 />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter-7"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter7 />
              </React.Suspense>
          }/>
          <Route path="/filmes/harry-potter-8"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHarryPotter8 />
              </React.Suspense>
          }/>
          <Route path="/filmes/jogos-vorazes"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJogosVorazes />
              </React.Suspense>
          }/>
          <Route path="/filmes/jogos-vorazes-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJogosVorazes2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/jogos-vorazes-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJogosVorazes3 />
              </React.Suspense>
          }/>
          <Route path="/filmes/jogos-vorazes-4"
            element={<React.Suspense fallback={<Loading />}>
                <LazyJogosVorazes4 />
              </React.Suspense>
          }/>
          <Route path="/filmes/velozes-e-furiozos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyVelozesFuriosos />
              </React.Suspense>
          }/>
          <Route path="/filmes/velozes-e-furiozos-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyVelozesFuriosos2 />
              </React.Suspense>
          }/>
          <Route path="/filmes/velozes-e-furiozos-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyVelozesFuriosos3 />
              </React.Suspense>
          }/>
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
