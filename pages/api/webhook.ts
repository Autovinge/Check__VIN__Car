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
      case 'Timeout':
      case 'Rejected':
        await deleteDocumentById(PaymentId)
        res.send({})
      case 'Captured':
        try {
          const doc = await getDocumentById(PaymentId)
          console.log('doc done')
          const data = await getVinInfo(doc.vincode, doc.vendor)
          console.log('data done')
          const pdfBuffer = await generatePDF(data.autocheck_data)
          console.log('pdf done')
          await sendMail(doc.mail, doc.vincode, doc.vendor, pdfBuffer)
          console.log('mail sent')
          await updateSentMail(PaymentId)
          console.log('updated db')
          res.send({})
        } catch (err) {
          res.send({})
        }
      case 'Draft':

      case 'Created':

      default:
    }
  }
}
