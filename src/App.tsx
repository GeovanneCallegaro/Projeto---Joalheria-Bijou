import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";
import { Initial } from "./components/Initial";

import './App.css'

import {SiGooglemessages} from 'react-icons/si'
import { FooterInformation } from "./components/FooterInformation";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBarMobile";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Collection } from "./components/Collection";
import { Shop } from "./components/Shop";
import { About } from "./components/About";


function App() {
  return (
    <Router>
    <div className="App">
      <SubHeader />
      <Header 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato']}
      />
      <SearchBar />
      <Switch>
        <Route path="/sobre">
          <About/>
        </Route>
        <Route path="/loja">
          <Shop />
        </Route>
        <Route path="/colecao">
          <Collection />
        </Route>
        <Route path="/">
          <Initial />
        </Route>
      </Switch>
      <FooterInformation 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato', 'FAQ', 'Envio e Devoluções', 'Metódos de Pagamento']}
      />
      <Footer />

      <div className="button-chat">
        <SiGooglemessages className="iconMessage"/>
      </div>
    </div>
    </Router>
  );
}

export default App;
