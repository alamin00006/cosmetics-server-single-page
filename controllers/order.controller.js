const nodemailer = require("nodemailer");
const OrderMail = require("../mail/orderMail");

exports.createOrder = async (req, res) => {
  try {
    const result = req.body;
    // Order Mail to Admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alaminbamna08@gmail.com",
        pass: "qesfajhmrfhkfnbo",
      },
    });
    const email = "Zie8589@gmail.com";
    const mailOptions = {
      from: "alaminbamna08@gmail.com",
      to: `mohammad.alaminh08@gmail.com,${email}`,
      subject: "Order Details",
      html: OrderMail(result),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.status(200).json({
      status: "success",
      message: "Thanks For Your Order",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "order not complete",
      error: error.message,
    });
  }
};
