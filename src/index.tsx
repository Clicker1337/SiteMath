import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/global.scss';
import {store} from './store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
);
reportWebVitals();
