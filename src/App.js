import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Layout'
import Login from './pages/Login'
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/login">登录</Link>
        <Link to="/home">首页</Link> */}

        {/* 配置路由的规则 */}
        <Switch>
          <Route path="/home" components={Home}></Route>
          <Route path="/Login" components={Login}></Route>
          {/* 配置404组件 */}
          {/* <Route components={404}></Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
