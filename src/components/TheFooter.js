import { Component } from "../core/ronleeda";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName:'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/SHARONLEE94/movie-app/tree/js-project">
          Github Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/SHARONLEE94">
          ${new Date().getFullYear()}
          RONLEEDA
        </a>
      </div>
    `
  }
}