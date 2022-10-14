import React from 'react';
import { getSession, useSession } from 'next-auth/react';
import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Protected = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push('/auth/signin');
    },
  });

  if (status === 'loading') {
    return <Heading>Loading!!!!</Heading>;
  }

  if (status === 'unauthenticated')
    return <Heading>You are unautheticated. This is a protected page.</Heading>;

  return <Heading>{session.user.email}</Heading>;
};

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);

//   if (!session)
//     return {
//       redirect: {
//         destination: '/auth/signin',
//       },
//     };
//   return {
//     props: { session },
//   };
// };

export default Protected;
