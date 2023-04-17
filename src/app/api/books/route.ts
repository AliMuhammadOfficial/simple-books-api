import { NextResponse } from 'next/server';

import prisma from '@/db';

export async function GET() {
  const books = prisma.book.findMany();
  return NextResponse.json(books);
}

export async function POST(request: Request) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  // const { name, author, isbn, type, price, currentStock, available } =
  //   await request.json();
  const res = await request.json();

  const book = await prisma.book.create({
    data: res,
  });
  return NextResponse.json({
    book,
  });
}
