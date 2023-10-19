import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Register = () => {
  const { status } = useSession();

  return (
    <>
      {" "}
      <div className="">
        {status === "unauthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <div className="flex sm:flex-row flex-col gap-3">
              <div>
                <Link href="/" onClick={signOut}>
                  Logout
                </Link>
              </div>
              <div>
                <Link href="/write">Write</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Register;
