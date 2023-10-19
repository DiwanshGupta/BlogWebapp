import { getAuthsession } from "@/app/utils/auth";
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postslug = searchParams.get("postslug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postslug && { postslug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.error(err); // Log the error for debugging
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// For new Comment
export const POST = async (req) => {
  const session = await getAuthsession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated" }, { status: 401 })
    );
  }

  try {
    const body = JSON.parse(await req.text());
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment, { status: 201 })); // Use status 201 for resource creation
  } catch (err) {
    console.error(err); // Log the error for debugging
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
