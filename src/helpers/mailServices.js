var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.hostinger.com',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    }
  });
  var clientResponseText = `
Olá! Agradeço o contato!
Em breve estarei analisando sua mensagem e respondendo.

Atenciosamente,

Caléb Porto
  `
  var clientMailOptions = {
    from: `Caléb Porto <${process.env.NODEMAILER_EMAIL}>`,
    to: toEmail,
    subject: subject,
    text: clientResponseText,
  };
  
  var myMailOptions = {
    from: `Caléb Porto <${process.env.NODEMAILER_EMAIL}>`,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Novo Contato de ${toEmail}`,
    text: `
${toEmail},

${otpText}
    `,
  };
  transporter.sendMail(clientMailOptions, function (error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log('E-mail cliente enviado')
    }
  });
  transporter.sendMail(myMailOptions, function (error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log('E-mail para mim enviado')
    }
  });
}