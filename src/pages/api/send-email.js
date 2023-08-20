// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendMail } from "@/helpers/mailServices"

export default async function handler(req, res) {
  try {
    console.log('Teste')
    const {email, text} = JSON.parse(req.body)
    const sendEmail = await sendMail(
      'Resposta ao contato em www.calebporto.com',
      email,
      text
    )
    res.status(200).json()
  } catch (error) {
    console.log(error)
    res.status(400).json()
  }
}
