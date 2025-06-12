import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: NextRequest) {

  await dbConnect();

  try {
    
    const { email, twoFactorCode:code  } = await req.json();
console.log(email)
console.log(code);
    if (!email || !code) {
      return NextResponse.json({ message: 'Email and code are required.' }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    if (user.isEmailVerified) {
      return NextResponse.json({ message: 'Email already verified.' }, { status: 400 });
    }

    if (
      user.twoFactorCode !== code ||
      !user.twoFactorCodeExpires ||
      user.twoFactorCodeExpires < new Date()
    ) {
      return NextResponse.json({ message: 'Invalid or expired code.' }, { status: 400 });
    }

    // Update user
    user.isEmailVerified = true;
    user.twoFactorCode = null;
    user.twoFactorCodeExpires = null;
    await user.save();

    return NextResponse.json({ message: 'Email verified successfully.' }, { status: 200 });
  } catch (error) {
    console.error('[VERIFY_ERROR]', error);
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}
