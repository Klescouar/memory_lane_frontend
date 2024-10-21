import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a href="/api/auth/login">
          <Image
            src="/MemoryLane-black-animated.gif"
            alt="MemoryLane logo"
            width={400}
            height={38}
            priority
          />
        </a>
      </main>
    </div>
  );
}
