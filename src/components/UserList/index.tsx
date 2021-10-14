import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot ?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => { 
  const userRowList = []
  for(let i=0; i<21; i++) {
    userRowList.push('Fulano de Tal');
  }
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Jeferson Fernandes" />

      <Role>Offline - {userRowList.length}</Role>

      {userRowList.map((item, index) => (
        <UserRow
          key={index}
          nickname={item}
          isBot={index == 0 && true}
        />
      ))}
    </Container>
  );
}

export default UserList;