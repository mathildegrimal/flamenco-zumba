import { NextApiRequest, NextApiResponse } from 'next';

type Fields = {
  name: string;
  message: string;
  email: string;
};

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: 'smtp.sendgrid.net',
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.en.EMAIL_PASSWORD,
  //   },
  //   secure: true,
  // });
  //
  // const mailData = {
  //   from: 'demo@demo.com',
  //   to: 'your email',
  //   subject: `Message From ${_req.body.nom}`,
  //   text: _req.body.message,
  // };
  //
  // transporter.sendMail(mailData, function (err, info) {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });
};
