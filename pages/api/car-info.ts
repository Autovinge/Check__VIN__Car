import { NextApiRequest, NextApiResponse } from 'next';
import { validateMail, validateVendor, validateVincode } from '../../lib/validate'

interface customNextApiRequest extends NextApiRequest {
  query: {
    vendor: string,
    vincode: string,
    receiver: string
  }
}

export default function handler(req: customNextApiRequest, res: NextApiResponse) {
  const { vendor, vincode, receiver } = req.query
  const condArray= [validateMail(receiver), validateVendor(vendor), validateVincode(vincode)]

  // if successful validation
  if (!condArray.includes(false)  ) {
    // this should redirect to payment
    res.status(200).send({ vendor, vincode, receiver })
  } else {
    res.status(400).send(1)
  }
 }
