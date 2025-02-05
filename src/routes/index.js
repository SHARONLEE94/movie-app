// 프로젝트에서 관리하는 페이지들을 정리하는 페이지
import { createRouter } from "../core/ronleeda";
import Home from './Home.js';
import Movie from './Movie.js';
import About from './About.js';

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About }
])