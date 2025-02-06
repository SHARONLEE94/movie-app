import App from "./App";
import router from "./routes";

const root = document.querySelector('#root')
root.append(new App().el)

router()

// >>> test를 위해 만들어 놓은 함수
// 제거 해야 하지만, 공부를 위해 주석처리

// ;(async() => {
//   const res = await fetch('/api/test')
//   const json = res.json()
//   console.log('/api/test/', json)
// })()