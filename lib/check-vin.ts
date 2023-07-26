const checkVin = async (
  vincode: string,
  vendor: string,
  retries: number = 0
) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/${vendor}/check?vincode=${vincode}&api_key=${process.env.API_KEY}`
    )
    const data = await response.json()
    return data
  } catch (err) {
    if (retries > 0) {
      return checkVin(vincode, vendor, retries - 1)
    } else {
      throw new Error('Maximum retries reached')
    }
  }
}

export default checkVin
