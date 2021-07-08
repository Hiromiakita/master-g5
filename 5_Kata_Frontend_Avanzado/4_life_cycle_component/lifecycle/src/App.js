import "./App.css";
// import LifeCycleClases from './components/LifeCycleClases'
import LifeCycleHooks from "./components/LifeCycleHooks";
import Routes from "./routes/Routes";
import ContextProvider from "./auth/ContextProvider";

function App() {
    return (
        <div className="App">
            {/* <LifeCycleClases/> */}
            {/* <LifeCycleHooks/> */}
            <ContextProvider>
                <Routes />
            </ContextProvider>
        </div>
    );
}

export default App;
