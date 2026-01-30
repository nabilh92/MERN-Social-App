import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import ApolloProvider from './ApolloProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ApolloProvider);

serviceWorker.unregister();
