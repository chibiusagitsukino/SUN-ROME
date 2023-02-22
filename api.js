const API_KEY = '41d151b31d0483efd17b907afeee690d'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

const GET = async (cityName) => {
  const res = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}`)
  const data = await res.json()
  return data
}

const searchCity = async (cityName) => {
  const res = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}`)
  const data = await res.json()
  return data
}

export { GET, API_KEY, BASE_URL, searchCity }

// // // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// //'https://api.openweathermap.org/data/2.5/weather?q=rome&appid=41d151b31d0483efd17b907afeee690d'
