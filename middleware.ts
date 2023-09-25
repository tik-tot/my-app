export { default } from "next-auth/middleware"

// Limit the middleware to paths starting with `/api/`

export const config = {
    matcher: ["/authPage/:path*"]
    // matcher: ["/api/user/:path*", "/api/whitelist/:path*", "/admin/:path*" ]
};


// import { getToken } from 'next-auth/jwt';
// import { NextRequest, NextResponse } from 'next/server';

// const allowedOrigins = process.env.NODE_ENV === 'production'
//     ? ['https://www.yoursite.com', 'https://yoursite.com']
//     : ['http://localhost:3000']

   
// export default async function middleware(req: NextRequest) {
//   const token = await getToken({ req });
//   const isAuthenticated = !!token;

//   const origin = req.headers.get('origin')
//   console.log(origin)

//   if (!isAuthenticated && origin && !allowedOrigins.includes(origin)) {
//       return new NextResponse(null, {
//           status: 400,
//           statusText: "Bad Request",
//           headers: {
//               'Content-Type': 'text/plain'
//           }
//       })
//   }

// //   if (!isAuthenticated) {
// //     // Respond with JSON indicating an error message
// //     return new NextResponse(
// //       JSON.stringify({ success: false, message: 'authentication failed' }),
// //       { status: 401, headers: { 'content-type': 'application/json' } }
// //     )
// //   }
// }
