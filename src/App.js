import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="className='max-w-screen-xl mx-auto">
      <button className="btn btn-ghost">Button</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
