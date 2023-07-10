import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <View>
      <Text>welcome, {user?.name}</Text>
      <Text>your account is {user?.account}</Text>
    </View>
  );
};

export default Profile;
