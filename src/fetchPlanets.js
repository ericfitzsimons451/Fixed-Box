import { fetchAnything } from './fetchAnything'
import { getResidents } from './Cleaners/Cleaners'

const fetchPlanets = async (url) => {
  const planets = await fetchAnything(url)
  const residents = await getResidents(planets.results)
  console.log(residents)
}


export default fetchPlanets