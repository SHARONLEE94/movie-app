// 최종 배포시에는 제거 가 필요한 파일
// 공부를 위해 남겨둠
export default function handler(request, response) {
  response.status(200).json({
    name:'ronleeda',
    age:80,
    isValid: true
  })
}