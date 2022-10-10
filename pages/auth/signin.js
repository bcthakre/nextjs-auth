import React, { useState } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Icon,
  VStack,
  chakra,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs';
import Head from 'next/head';

const providers = [
  {
    name: 'github',
    Icon: BsGithub,
  },
  {
    name: 'google',
    Icon: BsGoogle,
  },
];

const Signin = () => {
  const { data: session, status } = useSession();

  console.log(process.env.GITHUB_ID);

  const { push } = useRouter();

  const [email, setEmail] = useState();

  if (status === 'loading') return <Heading>Checking Authentication </Heading>;

  if (session) {
    setTimeout(() => {
      push('/');
    }, 5000);
    return <Heading>You are already sign in!!!</Heading>;
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return false;

    signIn('email', { email, redirect: false });
  };

  return (
    <Box>
      <chakra.form onSubmit={handleSubmit}>
        <FormLabel>Email Address</FormLabel>
        <Input
          type={'email'}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Button type='submit' w='100%' my={5}>
          {' '}
          Login
        </Button>
      </chakra.form>
      <VStack>
        {providers.map(({ name, Icon }) => (
          <Button
            key={name}
            leftIcon={<Icon />}
            onClick={handleOAuthSignIn(name)}
            textTransform='uppercase'
            width={'100%'}
          >
            Sign in with {name}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Signin;
