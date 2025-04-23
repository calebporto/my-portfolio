// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendEmailFromGmail } from "@/helpers/mailServices"

export default async function handler(req, res) {
  try {
    const {email, text} = JSON.parse(req.body)
    const sendEmail = await sendEmailFromGmail(
      'Resposta ao contato no site',
      email,
      text
    )
    res.status(200).json()
  } catch (error) {
    console.log(error)
    res.status(400).json()
  }
}
