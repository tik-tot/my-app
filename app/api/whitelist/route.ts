import { User } from "@prisma/client";
import { prisma } from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";
// import { revalidatePath } from 'next/cache'

// FETCH ALL WhitelistUser
export const GET = async () => {
  try {
    const users = await prisma.whitelistUser.findMany({
      orderBy: [
        {
          createdAt: 'desc'
        }, {
          email: 'asc'
        }],
    });
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
