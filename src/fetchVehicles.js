import fetchAnything from "./fetchAnything"

export const fetchVehicles = async (url) => {
  const vehicles = await fetchAnything(url)
  return vehicles.results
}

export default fetchVehicles