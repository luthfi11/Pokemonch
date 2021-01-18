import '../styles/App.css';
import Home from './pages/home';
import Search from './pages/search';
import Favorite from './pages/favorite';
import Error from './pages/error';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../data/api-client';
import PokemonDetail from './pages/pokemon-detail';

function App() {
    return (
        <ApolloProvider client={client}>
          <div>
              <Navbar/>

              <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/search" component={Search} />
                  <Route path="/favorite" component={Favorite} />
                  <Route path="/pokemon/:name" component={PokemonDetail} />
                  <Route component={Error} />
              </Switch>
          </div>
        </ApolloProvider>
    );
}

export default App;
