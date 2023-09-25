import { User } from "@prisma/client";
import { prisma } from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";
import { useSearchParams } from "next/navigation";
// import { revalidatePath } from 'next/cache'

// FETCH ALL Users
export const GET = async (request:NextRequest) => {
  let filter = {};
  let query = request.nextUrl.searchParams.get('query')?.trim()
  if (typeof query === "undefined" || !query || query === "undefined") {
    filter = { orderBy: [ {name: 'asc'}] }
  } else {
    if (query && query !== '' && query.length > 0) {
      filter = {where: { OR: [
        { email: { contains: query,  mode: 'insensitive'}, },
        { name:  { contains: query, mode: 'insensitive' }, },
        ]}, orderBy: [ {name: 'asc'}] }}
  }
  try {
    const users = await prisma.user.findMany(filter);
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// export const POST = async (req: NextRequest) => {    
//   try {
//     const body = await req.json();
//     const res = await prisma.user.createMany({ 
//       data: body,
//     });
//     // revalidatePath('/user')
//     return new NextResponse(JSON.stringify(res), { status: 201 });
// } catch (err) {
//   console.log("Error insert many users ", err);
//   return new NextResponse(
//     JSON.stringify({ message: "Something went wrong!" }),
//     { status: 500 }
//   );
// }
// }
