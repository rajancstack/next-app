import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest,
    { params }: { params: { id: string } }) {
    const userId = +params.id // Convert the string to a number

    if (isNaN(userId)) {
        return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
        where: { id: userId }
    })
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json()
    if (!body.name)
        return NextResponse.json({ error: 'Name is required' }, { status: 400 })

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!user)
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 })
    console.log(user, 'user')
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })``
    console.log(updatedUser, 'updated')
    return NextResponse.json(updatedUser)

}

export async function DELETE(request: NextRequest,
    { params }: { params: { id: string } }) {

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!user) {
        return NextResponse.json({ error: 'User not found', status: 404 })
    }
    await prisma.user.delete({
        where: { id: user.id }
    })
    return NextResponse.json({})
}
