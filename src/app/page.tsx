'use client';

import { trpc } from '@/trpc/client';

export default function Home() {
  const getData = trpc.anyApiRoute.useQuery();

  const input = { email: 'akhil@contentql.io', password: 'test' };

  const addUser = trpc.auth.createUser.useMutation({
    onSettled: (data) => {
      console.log(getData.data?.name);
      console.log(data);
    },
  });

  const handleClick = async () => {
    await addUser.mutate(input);
  };

  return (
    <>
      <button onClick={() => handleClick()}>add user</button>
    </>
  );
}
