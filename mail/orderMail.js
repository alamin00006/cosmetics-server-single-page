function OrderMail(result) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Mail - Cosmetics-shop</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                color: #333333;
            }
    
            .container {
                width: 80%;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                color: #0066cc;
            }
    
            p {
                margin-bottom: 15px;
            }
    
            .booking-details {
                border-top: 2px solid #eeeeee;
                margin-top: 20px;
                padding-top: 10px;
            }
    
            .footer {
                margin-top: 20px;
                color: #777777;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
          
            <p>Dear Admin,</p>
            <p>You Get a Order</p>
            <p>Customer Name : ${result?.customerName}</p>
            <p>Phone Number : ${result?.customerPhone}</p>
            <p>Address : ${result?.customerAddress}</p>
            <p>Product Name : ${result?.productTitle}</p>
            <p>Product Price : ${result?.productPrice} Tk with delivery charge</p>
            <p>Product Quantity : ${result?.productQuantity}</p>
    
           
        </div>
    </body>
    </html>
    
        
      `;
}
module.exports = OrderMail;
