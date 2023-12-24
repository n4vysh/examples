import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function TasksPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/welcome");
  }

  return (
    <>
      <p>logined</p>
    </>
  );
}
