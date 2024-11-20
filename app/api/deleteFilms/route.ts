import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function DELETE(request: Request) {
    const client = await clientPromise;
    const db = client.db('films_db');
    const { titel } = await request.json();
    const result = await db.collection('films').deleteOne({ titel });
    return NextResponse.json(result);
}