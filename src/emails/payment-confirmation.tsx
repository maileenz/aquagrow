import { transporter } from "@/lib/emails";
import { Html, Button, Text, Heading, render } from "react-email";

// Inside your payment webhook route handler:
const sendConfirmation = async (
  customerEmail: string,
  customerName: string,
  amount: number,
) => {
  // Render the React Email template into an HTML string
  const emailHtml = await render(
    <PaymentConfirmation customerName={customerName} amount={amount} />,
  );

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: customerEmail,
    subject: "Payment Confirmed!",
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
};

export default function PaymentConfirmation({
  customerName,
  amount,
}: {
  customerName: string;
  amount: number;
}) {
  return (
    <Html>
      <Heading>Thank you for your payment, {customerName}!</Heading>
      <Text>We successfully processed your payment of ${amount}.</Text>
      <Button
        href="https://yourwebsite.com/dashboard"
        style={{ background: "#000", color: "#fff", padding: "12px" }}
      >
        View Invoice
      </Button>
    </Html>
  );
}
