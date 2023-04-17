import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    status: 'OK',
  };

  return NextResponse.json(data);
}
