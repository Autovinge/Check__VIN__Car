import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { vendor, vincode,receiver} = req.query
  res.status(200).send({ vendor, vincode,receiver })

}
