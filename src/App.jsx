import Header from './components/Header.jsx'
import Body_blog from './components/Body_blog.jsx'
import Crear_blog from './components/Crear_blog.jsx'
import Blog from './components/Blog.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
          <Routes>
              <Route path='/' element={<Body_blog/>}/>
              <Route path='/Crear_blog' element={<Crear_blog/>}/>
              <Route path="/blog/id" element={<Blog/>} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
