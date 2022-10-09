import React from 'react';
import { Heading, Button } from '@chakra-ui/react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      {session ? (
        <>
          <Heading>Hello {session.user.name}</Heading>
          <Button onClick={signOut}>Sign Out</Button>
        </>
      ) : (
        <>
          <Heading>You are not signed in</Heading>
          <Button onClick={signIn}>Sign In</Button>
        </>
      )}
    </div>
  );
};

export default Home;
