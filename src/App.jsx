import { Outlet } from 'react-router-dom';
import { Navigator } from './components/Navigator';

function App() {

  return (
    <div>
      App
      <Navigator />
      <Outlet />
    </div>
  );
}

export default App;
