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

export const getResidents = async (planetsArray) => {
  const planets = planetsArray.map(async planet => {
    const residentPromises = planet.residents.map(async residentLink => {
      return await fetchAnything(residentLink)
    })
    const residents = await Promise.all(residentPromises)
    const residentNames = await cleanResidents(residents)
    return {
      Name: planet.name,
      Residents: residentNames
    }
  })
  return Promise.all(planets)
}

export const cleanResidents = (residents) => {
  return residents.map(resident => {
    return resident.name
  })
}