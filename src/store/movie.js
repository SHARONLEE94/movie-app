import { Store } from "../core/ronleeda";

const store = new Store({
  searchText:'',
  page:1,
  pageMax:1,
  movies:[],
  loading: false,
  message: 'Search for the movie title!'
})

export default store;
export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if(page === 1) {
    store.state.movies = []
    store.state.message=''
  }
  try{
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
  const { Search, totalResults, Response, Error } = await res.json()
  if(Response === 'True') {
    store.state.movies = [
      ...store.state.movies,
      ...Search
    ]
    store.state.pageMax = Math.ceil(Number(totalResults) / 10)
  } else {
    store.state.message = Error
    store.state.pageMax=1
  }
  } catch (error) {
    console.log('searchMovies error', error)
  } finally {
    store.state.loading = false
  }
}