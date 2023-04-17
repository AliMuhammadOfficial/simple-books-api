import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { orderId: string };
  }
) {
  const { orderId } = params; // 'a', 'b', or 'c'
  const data = {
    orderId,
  };

  return NextResponse.json(data);
}
