const getVinInfo = async (
  vincode: string,
  vendor: string,
  retries: number = 3
) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/${vendor}?vincode=${vincode}&api_key=${process.env.API_KEY}`
    )
    const data = await response.json()
    return data
  } catch (err) {
    if (retries > 0) {
      return getVinInfo(vincode, vendor, retries - 1)
    } else {
      throw new Error('Maximum retries reached')
    }
  }
}
export default getVinInfo
