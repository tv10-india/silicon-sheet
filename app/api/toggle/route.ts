import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await auth();

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { problemId, isSolved } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (isSolved) {
    // 1. First, delete any existing record for this problem (Safety wipe)
    await prisma.solvedProblem.deleteMany({
      where: {
        userId: user.id,
        problemId: problemId,
      },
    });

    // 2. Then, create a fresh record with time = NOW
    await prisma.solvedProblem.create({
      data: {
        userId: user.id,
        problemId: problemId,
        solvedAt: new Date(),
      },
    });
  } else {
    // If unchecking, just delete
    await prisma.solvedProblem.deleteMany({
      where: {
        userId: user.id,
        problemId: problemId,
      },
    });
  }

  return NextResponse.json({ success: true });
}