import axios from "axios"

export interface Tcaster {
  faculty: {
    id: string
    name: string
    tagId: string
    university: {
      id: string
      name: string
    }
  }
  id: string
  likes: number
  logo: string
  name: string
  roundSeats: number[]
  score: {
    avg: number
    id: string
    max: number
    min: number
    scoreType: string
    year: number
  } | null
}

export const getTcasterApi = async () => {
  try {
    const response = await axios.get(
      "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
    )

    const data: Tcaster[] = response.data

    return data
  } catch (error) {
    console.log("error api", error)
  }
}
