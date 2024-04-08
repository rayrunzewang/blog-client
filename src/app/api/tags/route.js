import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(['Javascript', 'React.js',  'Node.js', 'Next.js', 'MongoDB', 'GraphQL', 'Java']);
}