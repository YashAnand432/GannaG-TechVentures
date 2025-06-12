// POST /api/auth/verify-login
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User';
// import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { email, twoFactorCode } = await req.json();

    const user = await User.findOne({ email });
    if (
      !user ||
      user.twoFactorCode !== twoFactorCode ||
      !user.twoFactorCodeExpires ||
      new Date() > new Date(user.twoFactorCodeExpires)
    ) {
      return NextResponse.json({ error: 'Invalid or expired code' }, { status: 400 });
    }

    // Clear the code
    user.twoFactorCode = null;
    user.twoFactorCodeExpires = null;
    await user.save();

    // Create JWT token
    // const token = jwt.sign(
    //   { id: user._id, email: user.email },
    //   process.env.JWT_SECRET!,
    //   { expiresIn: '1d' }
    // );

    // Set in cookie (optional: or just return)
    const response = NextResponse.json({ message: 'Login successful' });
    /*
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, 
    });*/

    return response;
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
