import React from 'react';
import UserCard from '../components/User';
import { useAuth } from '../utils/context/authContext';
import Signout from '../components/Signout';

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <UserCard user={user} />
      <Signout />
    </>
  );
}
