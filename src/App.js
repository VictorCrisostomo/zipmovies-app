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
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
