import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
    const client = await clientPromise;
    const db = client.db('films_db');
    const films = await db.collection('films').find({}).toArray();
    return NextResponse.json(films);
}