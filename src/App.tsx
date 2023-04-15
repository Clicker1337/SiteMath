import AppRouter from './components/utils/AppRouter';
import {useActions} from './hooks/useActions';

function App() {
    const isDev = true;
    const {refresh} = useActions();

    //useEffect(() => {
    //if (localStorageApi.isTokenExist()) refresh();
    //}, [refresh]);

    return <AppRouter developing={isDev} />;
}

export default App;
