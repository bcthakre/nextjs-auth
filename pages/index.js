import React from 'react';
import { Heading, Button, Grid } from '@chakra-ui/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home = () => {
  const { data: session } = useSession();
  console.log(session);

  const { push, asPath } = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });
    push(data.url);
  };

  const handleSignIn = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };

  return (
    <Grid placeItems={'center'} gridRowGap='1rem'>
      {session ? (
        <>
          <Heading>Hello {session.user.name}</Heading>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </>
      ) : (
        <>
          <Heading>You are not signed in</Heading>
          <Button onClick={handleSignIn}>Sign In</Button>
        </>
      )}
    </Grid>
  );
};

export default Home;
