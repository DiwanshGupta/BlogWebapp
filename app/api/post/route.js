import { getAuthsession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const searchparams = url.searchParams;
    const page = searchparams.get("page");
    const cat = searchparams.get("cat");
    const per_page = 2;

    const posts = await prisma.post.findMany({
      take: per_page,
      skip: per_page * (page - 1),
      where: {
        ...(cat && { cateSlug: cat }),
      },
    });
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify(
        {
          message: "Something went wrong!",
        },
        { status: 500 }
      )
    );
  }
};
// Create a post
export const POST = async (req) => {
  const session = await getAuthsession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated" }, { status: 401 })
    );
  }
  try {
    const body = JSON.parse(await req.text());

    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 201 })); // Use status 201 for resource creation
  } catch (err) {
    console.error(err); // Log the error for debugging
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
