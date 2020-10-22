export default function selectionFilter ({ series, films }) {
  const seriesGenres = series.map(item => item.genre)
  const uniqSeriesGenres = [...new Set(seriesGenres)]
  const seriesObj = uniqSeriesGenres.map(genre => ({
    title: genre, data: series.filter(item => item.genre === genre)
  }))

  const filmGenres = films.map(item => item.genre)
  const uniqFilmGenres = [...new Set(filmGenres)]
  const filmsObj = uniqFilmGenres.map(genre => ({
    title: genre, data: films.filter(item => item.genre === genre)
  }))

  return {
    series: seriesObj,
    films: filmsObj
  }
}
