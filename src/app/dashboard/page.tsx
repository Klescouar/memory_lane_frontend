import { getSession } from "@auth0/nextjs-auth0";

export const Dashboard = async () => {
  const session = await getSession();
  const memoriesResponse = await fetch("http://localhost:8000/memories", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const memories = await memoriesResponse.json();
  console.log("MEMO", memories);
  return (
    <div>
      <h1>Dashboard</h1>
      {/* {memories.map((memory) => (
        <div key={memory.id}>
          <h2>{memory.title}</h2>
          <p>{memory.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Dashboard;
