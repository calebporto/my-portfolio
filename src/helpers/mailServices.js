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
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
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

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(clientMailOptions, function (error, info) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('E-mail cliente enviado')
        resolve(info);
      }
    });
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(myMailOptions, function (error, info) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('E-mail para mim enviado')
        resolve(info);
      }
    });
  });
  return true
}

export async function sendEmailFromGmail(subject, toEmail, otpText) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_KEY // ex: 'abcdefghijklmnop'
    }
  });
  const clientResponseText = `
  Olá! Agradeço o contato!
  Em breve estarei analisando sua mensagem e respondendo.
  
  Atenciosamente,
  
  Caléb Porto
    `
  const clientMailOptions = {
    from: `Caléb Porto <${process.env.GMAIL_EMAIL}>`,
    to: toEmail,
    subject: subject,
    text: clientResponseText,
  };
  const myMailOptions = {
    from: `Caléb Porto <${process.env.GMAIL_EMAIL}>`,
    to: toEmail,
    subject: subject,
    text: `
${toEmail},

${otpText}
    `,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(clientMailOptions, function (error, info) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('E-mail cliente enviado')
        resolve(info);
      }
    });
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(myMailOptions, function (error, info) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('E-mail para mim enviado')
        resolve(info);
      }
    });
  });
  return true
}