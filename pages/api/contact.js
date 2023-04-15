import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.NEXT_PUBLIC_EMAIL,
  //     pass: process.env.NEXT_PUBLIC_PASSWORD,
  //   },
  // });

  console.log(process.env.NEXT_PUBLIC_EMAIL);

  const transporter = nodemailer.createTransport({
    host: "smtp.seznam.cz",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.NEXT_PUBLIC_EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${message}
    ${phoneNumber ? `Tel. number is: ${phoneNumber}` : ""}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log("error" + JSON.stringify(err));
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("success");
      res.send("success");
    }
  });
};
