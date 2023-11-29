import { notFound } from "next/navigation";

const page = async ({}) => {
  // const session = useSession()

  // if (!session.user) {
  //   return notFound()
  // }

  return (
    <div className="mx-auto h-screen w-full">
      <div>
        <h1>Feed page</h1>
      </div>
    </div>
  );
};

export default page;
