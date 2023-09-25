import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

// GET SINGLE User
export const GET = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;
  const session = await getAuthSession();
  if (session?.user) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), {
    status: 403,
  });
};

// UPDATE SINGLE user
export const PUT = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;
  const session = await getAuthSession();

  if (session?.user) {
    try {
      const body = await req.json();

      const updateUser = await prisma.user.update({
        data: body,
        where: {
          email: email,
        },
      });

      return new NextResponse(JSON.stringify(updateUser), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), {
    status: 403,
  });
};
