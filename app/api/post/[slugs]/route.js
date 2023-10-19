import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slugs } = params;
  // console.log(slugs);

  try {
    const post = await prisma.post.update({
      where: { category: slugs },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
