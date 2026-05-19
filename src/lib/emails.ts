"use server"

import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,       // Your gmail address
        pass: process.env.GMAIL_APP_PASSWORD // Your 16-character App Password
    },
});
