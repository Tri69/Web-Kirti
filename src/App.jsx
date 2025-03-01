
import { useEffect } from 'react';
import './index.css'
import HomePage from './Pages/HomePage'
import RouterPage from './Routers/RouterPage'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
      AOS.init();
  }, [])
  return (
    <>
		  <RouterPage />
    </>
  )
}

export default App
