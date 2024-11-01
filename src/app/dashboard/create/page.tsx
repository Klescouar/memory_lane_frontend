import { SouvenirCreateForm } from "@/components/SouvenirCreateForm";
import { getSession } from "@auth0/nextjs-auth0";

export const Dashboard = async () => {
  const session = await getSession();

  if (!session) {
    return null;
  }

  return (
    <div>
      <h1 className="text-gray-200 text-4xl text-center">
        Create a new souvenir
      </h1>
      <SouvenirCreateForm accessToken={session?.accessToken} />
    </div>
  );
};

export default Dashboard;
