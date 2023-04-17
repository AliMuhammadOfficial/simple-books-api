import type { Book } from '@prisma/client';
import { NextResponse } from 'next/server';

import prisma from '@/db';

export async function GET() {
  try {
    const books = await prisma.book.findMany();
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching books', error });
  }
}

export async function POST(request: Request) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  // const { name, author, isbn, type, price, currentStock, available } =
  //   await request.json();
  // const res = await request.json();

  // const book = await prisma.book.create({
  //   data: res,
  // });
  // return NextResponse.json({
  //   book,
  // });
  const newBook: Book = request.body;
  try {
    const createdBook = await prisma.book.create({ data: newBook });
    return NextResponse.json(createdBook);
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user', error });
  }
}
