"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: {name: string; email: string; message: string}) => {
 try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // replace with your verified sender
      to: "princesamuel636@gmail.com", // your personal email (where you want messages delivered)
      subject: `New message from ${data.name}`,
      replyTo: data.email, // so you can reply directly
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}