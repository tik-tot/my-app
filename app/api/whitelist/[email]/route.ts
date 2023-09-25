import { prisma } from "@/utils/connect";
import {Prisma} from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
import { EmailSchema } from "@/types/zodSchema";

// GET SINGLE whitelist
export const GET = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;

  try {
    const user = await prisma.whitelistUser.findUnique({
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
};
// CREATE Whitelist
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();
      const {email} = body;
      const result = EmailSchema.safeParse({email});
      if (result.success) {
        const usr = await prisma.whitelistUser.create({
          data: {email :email},
        });
        return new NextResponse(JSON.stringify(usr), { status: 201 });
      }
      else {
        return new NextResponse(
          JSON.stringify({ message: "Bad email!" }),
          { status: 401 }
        );  
      }
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (err.code === 'P2002') {
          return new NextResponse(
            JSON.stringify({ message: "Email already existed. Cannot insert this email!" }),
            { status: 400 }
          );
        }
      }
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};

// UPDATE SINGLE whitelistUser 
export const PUT = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;
  const session = await getAuthSession();

  if (session?.user) {
    try {
      const body = await req.json();

      const updateUser = await prisma.whitelistUser.update({
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

// DELETE SINGLE whitelist
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      await prisma.whitelistUser.delete({
        where: {
          email: email,
        },
      });

      return new NextResponse(JSON.stringify("Whitelist has been deleted!"), {
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