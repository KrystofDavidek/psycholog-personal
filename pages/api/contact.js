import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
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
      res.send("error" + JSON.stringify(err));
    } else {
      res.send("success");
    }
  });
};
