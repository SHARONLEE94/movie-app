import { Store } from "../core/ronleeda";

interface SimpleMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface DtailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}


interface State {
  searchText: string
  page: number
  pageMax: number
  movies: SimpleMovie[]
  movie: DtailedMovie
  loading: boolean
  message: string
}

const store = new Store<State>({
  searchText:'',
  page:1,
  pageMax:1,
  movies:[],
  movie:{} as DtailedMovie,
  loading: false,
  message: 'Search for the movie title!'
})

export default store;
export const searchMovies = async (page: number) => {
  store.state.loading = true
  store.state.page = page
  if(page === 1) {
    store.state.movies = []
    store.state.message=''
  }
  try{
    // const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`) // 주석도 제거해야 하지만, 공부를 위해 남겨둠
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page
      })
    })
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

export const getMovieDetails = async (id: string) => {
  try {
    // const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`)
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        id
      })
    })
    store.state.movie = await res.json()
  } catch(error) {
    console.log('getMovieDetails error:', error)
  }
}