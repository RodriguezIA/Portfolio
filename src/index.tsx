/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Routes, Route } from '@solidjs/router'
import { lazy } from 'solid-js'

import './index.css'
import App from './App'

const Blog = lazy(() => import("./modules/Blog/Blog"))
const Home = lazy(() => import("./modules/Portfolio/Pages/Home/Home"))

const root = document.getElementById('root')

render(() => (
    <Router>
        <Routes>
            <Route path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/blog" component={Blog} />
        </Routes>
    </Router>
), root!)
