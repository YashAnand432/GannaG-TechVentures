import nodemailer from 'nodemailer';

export const sendEmailVerificationCode = async (email: string, code: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS!,
    },
  });

  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: email, 
    subject: 'Email Verification Code',
    html: `<p>Your 8-digit verification code is:</p><h2>${code}</h2><p>It expires in 5 minutes.</p>`,
  };

  await transporter.sendMail(mailOptions);
};
