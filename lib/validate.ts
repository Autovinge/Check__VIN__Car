const vendors = ['carfax', 'autocheck']
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const vincodeRegex = new RegExp(
  '^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$'
)

export const validateMail = (mail: string) => {
  if (mail.match(emailRegex)) return true
  return false
}
export const validateVincode = (vincode: string) => {
  if (vincode.match(vincodeRegex)) return true
  return false
}

export const validateVendor = (vendor: string) => {
  if (vendor === vendors[0] || vendor === vendors[1]) return true
  return false
}
