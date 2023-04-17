import { NextResponse } from 'next/server';

function getRandomString(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

export async function POST(request: Request) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { clientName, clientEmail } = await request.json();

  return NextResponse.json({
    accessToken: getRandomString(64),
  });
}
