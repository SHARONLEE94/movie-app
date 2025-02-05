import { Component } from "../core/ronleeda";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName:'a'
    })   
  }
  render() {
    const { movie } = this.props

    this.el.setAttribute('href',`#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    // img태그가 아닌 backgroundImg로 출력하는 이유
    // : 서로 다른 포스터 크기를 'a'태그의 크기에 맞춰서 자르기 위함
    // : 이렇게 되면, 동일한 크기의 포스터로 출력이 가능해짐
    this.el.style.backgroundImage = `url(${movie.Poster})`
    this.el.innerHTML = /* html */ `
    <div class="info">
      <div class="year">
        ${movie.Year}
      </div>
      <div class="title">
        ${movie.Title}
      </div>
    </div>
    `
  }
}