// 프로젝트에서 관리하는 페이지들을 정리하는 페이지
import { createRouter } from "../core/ronleeda"
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound} // 모든 페이지와 일치하도록 정규 표현식 작성. (위치는 맨 마지막)
])