import { NextRequest, NextResponse } from 'next/server';

const SCRIPT_URL = process.env.CONTACT_SCRIPT_URL;

export async function POST(request: NextRequest) {
  if (!SCRIPT_URL) {
    return NextResponse.json(
      { success: false, message: '문의 접수 기능이 설정되지 않았습니다.' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        inquiryType: body.inquiryType,
        message: body.message,
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: data.message || '문의 접수에 실패했습니다.' },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
