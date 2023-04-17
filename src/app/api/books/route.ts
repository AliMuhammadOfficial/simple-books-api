import { NextResponse } from 'next/server';

export async function GET() {
  const books = [
    {
      id: 1,
      name: 'The Russian',
      type: 'fiction',
      available: true,
    },
    {
      id: 2,
      name: 'Just as I Am',
      type: 'non-fiction',
      available: false,
    },
  ];

  return NextResponse.json(books);
}
