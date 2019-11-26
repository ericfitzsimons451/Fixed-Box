import fetchAnything from '../fetchAnything'

export const getHomeworlds = (people) => {
  const homeworldPromises = people.map(async person => {
    const homeworld = await fetchAnything(person.homeworld)
    return {
      name: person.name, 
      height: person.height,
      species: person.species,
      homeworld: homeworld.name,
      population: homeworld.population,
      favorited: false
    }
  })
  return Promise.all(homeworldPromises)
}

export const getSpecies = (people) => {
  const speciesPromises = people.map(async person => {
    const singleSpecies = await fetchAnything(person.species[0])
    return { ...person, species: singleSpecies.name}
  })
  return Promise.all(speciesPromises)
}