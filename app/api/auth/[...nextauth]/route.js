// import nextAuth from "next-auth";
import Authoption from "@/app/utils/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(Authoption);

export { handler as GET, handler as POST };
