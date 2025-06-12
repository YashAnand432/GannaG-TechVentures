// lib/auth/hashPassword.ts
import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}
