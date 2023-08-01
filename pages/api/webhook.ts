import { NextApiRequest, NextApiResponse } from 'next'
import {
  deleteDocumentById,
  updateSentMail,
  getDocumentById
} from '../../lib/firestore'
import getVinInfo from '../../lib/get-vin-info'
import generatePDF from '../../lib/generatePDF'
import { sendMail } from '../../lib/mail'
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { PaymentStatus, PaymentId } = req.body

    switch (PaymentStatus) {
      case 'Rejected':
        await deleteDocumentById(PaymentId)
        res.status(400).send({ msg: 'Payment rejected' })
      case 'Timeout':
        await deleteDocumentById(PaymentId)
        res.status(400).send({ msg: 'Payment timeout' })
      case 'Captured':
        try {
          const doc = await getDocumentById(PaymentId)
          const data = await getVinInfo(doc.vincode, doc.vendor)
          const pdfBuffer = await generatePDF(data.autocheck_data)
          await sendMail(data.mail, data.vincode, data.vendor, pdfBuffer)
          await updateSentMail(PaymentId)
          res.status(200).send({ msg: 'Report sent' })
        } catch (err) {
          res.status(404).send({ msg: 'error' })
        }
      default:
        res.status(404).send({ msg: 'There was errpr' })
    }
  }
}
