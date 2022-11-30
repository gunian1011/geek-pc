import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Layout'
import Login from './pages/Login'
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/login">登录</Link>
        <Link to="/home">首页</Link> */}

        {/* 配置路由的规则 */}
        {/* 注意：
                新版的Switch 更改为Routes
                components 更改为 element
        */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* 配置404组件 */}
          {/* <Route components={404}></Route> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
