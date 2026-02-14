import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const { name, email, phone, address, waterType } = data;
    if (!name || !email || !phone || !address || !waterType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Send email via email service (SendGrid, Resend, etc.)
    // For now, just log the data
    console.log('Water test request:', {
      name,
      email,
      phone,
      address,
      waterType,
      timestamp: new Date().toISOString(),
    });

    // TODO: Save to database if needed

    return NextResponse.json(
      { success: true, message: 'Water test request received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing water test request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
