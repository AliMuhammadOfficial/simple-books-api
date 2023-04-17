import { NextResponse } from 'next/server';

export const books = [
  {
    id: 1,
    name: 'The Russian',
    author: 'James Patterson and James O. Born',
    isbn: '1780899475',
    type: 'fiction',
    price: 12.98,
    'current-stock': 12,
    available: true,
  },
  {
    id: 2,
    name: 'Just as I Am',
    author: 'Cicely Tyson',
    type: 'non-fiction',
    price: 20.33,
    'current-stock': 0,
    available: false,
  },
  {
    id: 3,
    name: 'The Vanishing Half',
    author: 'Brit Bennett',
    type: 'fiction',
    price: 16.2,
    'current-stock': 987,
    available: true,
  },
];
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { bookId: number };
  }
) {
  try {
    const { bookId } = params; // 'a', 'b', or 'c'
    const data = books[bookId - 1];
    // console.log(bookId)

    return NextResponse.json({
      data,
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
