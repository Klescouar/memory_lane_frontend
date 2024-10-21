import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { SideBarLink } from "./SideBarLink";

export const SideBar = async () => {
  const session = await getSession();
  if (!session) return null;

  return (
    <aside className="flex flex-col h-screen px-4 py-8 border-r rtl:border-r-0 rtl:border-l bg-black w-full">
      <a href="/" className="mx-auto">
        <Image
          src="/brain.gif"
          alt="MemoryLane logo"
          width={100}
          height={38}
          priority
        />
      </a>

      <div className="flex flex-col items-center mt-2 mb-2 w-full px-2">
        <h4 className="mx-2 mt-2 font-medium text-gray-200">
          {session.user.nickname}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
          {session.user.email}
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-8">
        <nav>
          <SideBarLink
            href="/dashboard"
            text="Memories portal"
            icon="brain-icon"
          />
          <SideBarLink
            href="/dashboard/create"
            text="Add a souvenir"
            icon="plus-icon"
          />
          <SideBarLink
            href="/dashboard/echoes"
            text="Echoes of memory"
            icon="quiz-icon"
          />
        </nav>
      </div>
    </aside>
  );
};
