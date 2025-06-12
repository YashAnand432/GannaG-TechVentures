import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { sendEmailVerificationCode } from '@/lib/auth/sendVerificationEmail';
import { hashPassword } from '@/lib/auth/hashPassword';

export async function POST(req: NextRequest) {
  await dbConnect(); // ensure MongoDB is connected

  try {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      phoneNumber,
      country,
      dateOfBirth
    } = await req.json();

    // 1. Check if user already exists
    // const existingUser = await User.findOne({ $or: [{ email }, { username }, { phoneNumber }] });
    // if (existingUser) {
    //   return NextResponse.json(
    //     { message: 'Email, username or phone number already in use.' },
    //     { status: 409 }
    //   );
    // }

    // 2. Hash password
    const hashedPassword : string = await hashPassword(password);

    // 3. Generate 8-digit email verification code
    const twoFactorCode = Math.floor(10000000 + Math.random() * 90000000).toString();
    // const twoFactorCodeExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min
    const twoFactorCodeExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    // 4. Create user in DB
    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      username,
      phoneNumber,
      country,
      dateOfBirth,
      isEmailVerified: false,
      twoFactorCode,
       twoFactorCodeExpires
      
   
    });

    // 5. Send email with the code
    await sendEmailVerificationCode(email,twoFactorCode);

    return NextResponse.json(
      {
        message: 'Signup successful. Verification code sent to email.',
        userId: newUser._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[SIGNUP_ERROR]', error);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}
