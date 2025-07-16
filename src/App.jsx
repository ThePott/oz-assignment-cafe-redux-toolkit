import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Cart from './components/Cart'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Menu />} />
          {/* 아직 수정 안 함 */}
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/cart' element={<Cart menu={menu} cart={cart} setCart={setCart} />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
