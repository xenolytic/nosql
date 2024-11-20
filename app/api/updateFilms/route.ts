import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function PUT(request: Request) {
    const client = await clientPromise;
    const db = client.db('films_db');
    const { titel, rating } = await request.json();
    const result = await db.collection('films').updateOne({ titel }, { $set: { rating } });
    return NextResponse.json(result);
}