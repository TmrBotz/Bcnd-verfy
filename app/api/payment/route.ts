import { NextRequest, NextResponse } from "next/server";

const VALID_DEVICE_ID = "ADMIN_DEVICE_001";
const VALID_API_KEY = "TEST_API_KEY_123";

interface PaymentPayload {
  device_id: string;
  api_key: string;
  amount: number;
  utr: string;
}

export async function POST(request: NextRequest) {
  let body: PaymentPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { device_id, api_key, amount, utr } = body;

  if (device_id !== VALID_DEVICE_ID || api_key !== VALID_API_KEY) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Payment received",
    data: { device_id, api_key, amount, utr },
  });
}
