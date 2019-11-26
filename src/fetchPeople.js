import { getHomeworlds, getSpecies } from './Cleaners/Cleaners'
import fetchAnything from './fetchAnything';

const fetchPeople = async (url) => {
  const people = await fetchAnything(url)
  const homeworlds = await getHomeworlds(people.results)
  return await getSpecies(homeworlds)
}

export default fetchPeople