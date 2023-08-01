import {NextApiRequest, NextApiResponse} from 'next'
import {deleteDocumentById, addDocument, updateSentMail} from '../../lib/firestore'
export default async function(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { PaymentStatus, PaymentId } = req.body

    switch (PaymentStatus) {
      case 'Rejected':
        await deleteDocumentById(PaymentId)
        res.status(400).send({msg: 'Payment rejected'})
      case 'Timeout':
        await deleteDocumentById(PaymentId)
        res.status(400).send({msg: 'Payment timeout'})
      case 'Captured':
        // should generate pdf and send to mail by PaymentId
        res.status(200).send()
      default:
        res.status(404).send()
    }
  }
}
