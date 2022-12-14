import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="className='max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
