import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request: Request) {
    const client = await clientPromise;
    const db = client.db('films_db');
    const { titel, genre, jaar, rating, acteurs } = await request.json();
    const result = await db.collection('films').insertOne({ titel, genre, jaar, rating, acteurs });
    return NextResponse.json(result);
}