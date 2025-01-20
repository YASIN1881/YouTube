import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <div className='px-2 sm:px-5 md:px-10 lg:px-14 xl:px-[81px]'>
      <NavBar/>
        {router}
      <Footer/>
      </div>
    </>
  )
}

export default App
