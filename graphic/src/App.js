import { AllRoutes } from './routes/AllRoutes'
import { Header } from './components';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
