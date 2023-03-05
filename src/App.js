import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/main.css"

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Pages
//  import Home from './pages/Home'
const LazyHome = React.lazy(() => import ('./pages/Home'));
// import Filmes from './pages/Filmes'
const LazyFilmes = React.lazy(() => import ('./pages/Filmes'));
// import Series from './pages/Series'
const LazySeries = React.lazy(() => import ('./pages/Series'));
// import Lancamentos from './pages/Lancamentos';
const LazyLancamentos = React.lazy(() => import ('./pages/Lancamentos'));
// import Colecoes from './pages/Colecoes'
const LazyColecoes = React.lazy(() => import ('./pages/Colecoes'));
// import Pedidos from './pages/Pedidos'
const LazyPedidos = React.lazy(() => import ('./pages/Pedidos'));
// import Cursos from './pages/Cursos'
const LazyCursos = React.lazy(() => import ('./pages/Cursos'));
// import Torrents from './pages/Torrents'
const LazyTorrents = React.lazy(() => import ('./pages/Torrents'));

// Filmes
// import Avatar from "./pages/Filmes/avatar"
const LazyAvatar = React.lazy(() => import ('./pages/Filmes/avatar'));
// import AGuerraDoAmanha from "./pages/Filmes/a-guerra-do-amanha"
const LazyAGuerraDoAmanha = React.lazy(() => import ('./pages/Filmes/a-guerra-do-amanha'));
// import BemVindaaQuixeramobim from "./pages/Filmes/Bem-vinda-a-quixeramobim"
const LazyBemVindaaQuixeramobim = React.lazy(() => import ('./pages/Filmes/Bem-vinda-a-quixeramobim'));
// import Os4malfeitores from "./pages/Filmes/Os-4-malfeitores"
const LazyOs4malfeitores = React.lazy(() => import ('./pages/Filmes/Os-4-malfeitores'));
// import HomemdeFerro from "./pages/Filmes/homem-de-ferro"
const LazyHomemdeFerro = React.lazy(() => import ('./pages/Filmes/homem-de-ferro'));
// import HomemdeFerro2 from "./pages/Filmes/homem-de-ferro-2"
const LazyHomemdeFerro2 = React.lazy(() => import ('./pages/Filmes/homem-de-ferro-2'));
// import HomemdeFerro3 from "./pages/Filmes/homem-de-ferro-3"
const LazyHomemdeFerro3 = React.lazy(() => import ('./pages/Filmes/homem-de-ferro-3'));
// import CapitaoAmerica from "./pages/Filmes/capitao-america"
const LazyCapitaoAmerica = React.lazy(() => import ('./pages/Filmes/capitao-america'));
// import CapitaoAmerica2 from "./pages/Filmes/capitao-america-2"
const LazyCapitaoAmerica2 = React.lazy(() => import ('./pages/Filmes/capitao-america-2'));
// import CapitaoAmerica3 from "./pages/Filmes/capitao-america-3"
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
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/"
          element={<React.Suspense fallback={<Loading />}>
              <LazyHome />
            </React.Suspense>
          }/>
          {/* <Route path="/filmes" element={<Filmes />}/> */}
          <Route path="/filmes"
            element={<React.Suspense fallback={<Loading />}>
                <LazyFilmes />
              </React.Suspense>
          }/>
          {/* <Route path="/series" element={<Series />}/> */}
          <Route path="/series"
            element={<React.Suspense fallback={<Loading />}>
                <LazySeries />
              </React.Suspense>
          }/>
          {/* <Route path="/lancamentos" element={<Lancamentos />}/> */}
          <Route path="/lancamentos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyLancamentos />
              </React.Suspense>
          }/>
          {/* <Route path="/colecoes" element={<Colecoes />}/> */}
          <Route path="/colecoes"
            element={<React.Suspense fallback={<Loading />}>
                <LazyColecoes />
              </React.Suspense>
          }/>
          {/* <Route path="/pedidos" element={<Pedidos />}/> */}
          <Route path="/pedidos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyPedidos />
              </React.Suspense>
          }/>
          {/* <Route path="/cursos" element={<Cursos />}/> */}
          <Route path="/cursos"
            element={<React.Suspense fallback={<Loading />}>
                <LazyCursos />
              </React.Suspense>
          }/>
          {/* <Route path="/torrents" element={<Torrents />}/> */}
          <Route path="/Torrents"
            element={<React.Suspense fallback={<Loading />}>
                <LazyTorrents />
              </React.Suspense>
          }/>

          {/* Filmes */}
          {/* <Route path='/filmes/avatar' element={<Avatar />}/> */}
          <Route path="/filmes/avatar"
            element={<React.Suspense fallback={<Loading />}>
                <LazyAvatar />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/a-guerra-do-amanha' element={<AGuerraDoAmanha />}/> */}
          <Route path="/filmes/a-guerra-do-amanha"
            element={<React.Suspense fallback={<Loading />}>
                <LazyAGuerraDoAmanha />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/bem-vinda-a-quixeramobim' element={<BemVindaaQuixeramobim />}/> */}
          <Route path="/filmes/bem-vinda-a-quixeramobim"
            element={<React.Suspense fallback={<Loading />}>
                <LazyBemVindaaQuixeramobim />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/os-4-malfeitores' element={<Os4malfeitores />}/> */}
          <Route path="/filmes/os-4-malfeitores"
            element={<React.Suspense fallback={<Loading />}>
                <LazyOs4malfeitores />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/homem-de-ferro' element={<HomemdeFerro />}/> */}
          <Route path="/filmes/homem-de-ferro"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemdeFerro />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/homem-de-ferro-2' element={<HomemdeFerro2 />}/> */}
          <Route path="/filmes/homem-de-ferro-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemdeFerro2 />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/homem-de-ferro-3' element={<HomemdeFerro3 />}/> */}
          <Route path="/filmes/homem-de-ferro-3"
            element={<React.Suspense fallback={<Loading />}>
                <LazyHomemdeFerro3 />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/capitao-america' element={<CapitaoAmerica />}/> */}
          <Route path="/filmes/capitao-america"
            element={<React.Suspense fallback={<Loading />}>
                <LazyCapitaoAmerica />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/capitao-america-2' element={<CapitaoAmerica2 />}/> */}
          <Route path="/filmes/capitao-america-2"
            element={<React.Suspense fallback={<Loading />}>
                <LazyCapitaoAmerica2 />
              </React.Suspense>
          }/>
          {/* <Route path='/filmes/capitao-america-3' element={<CapitaoAmerica3 />}/> */}
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
