import React from 'react';
import {Text} from 'react-native';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [text, onChangeText] = React.useState<string | undefined>('');
  return (
    <Container>
      <Input label="Username" text={text} onChange={onChangeText} />
      <Input
        label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        text={text}
        onChange={onChangeText}
      />
      <Button title="Submit" secondary onPress={() => {}} />
    </Container>
  );
};

export default Login;
