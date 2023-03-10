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
// const LazyJurassicWorld2 = React.lazy(() => import ('./pages/Filmes/jurassic-world-2'));

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
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
