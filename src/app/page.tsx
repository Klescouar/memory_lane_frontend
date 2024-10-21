import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a href="/api/auth/login">
          <Image
            src="/MemoryLane-black-animated.gif"
            alt="MemoryLane logo"
            width={300}
            height={38}
            priority
          />
        </a>
      </main>
    </div>
  );
}
