import { NextResponse } from 'next/server';

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
    // const data = books[bookId - 1];
    // console.log(bookId)

    return NextResponse.json({
      bookId,
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
