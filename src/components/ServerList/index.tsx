import React from 'react';

import ServerButton from '../ServerButton';
import { 
  Container, Separator,
} from './styles';

const ServerList: React.FC = () => {
  const listServerButton = [];
  for(let i=0; i <=10; i++){
    if(i != 8 ) {
      listServerButton.push(9);
    } else {
      listServerButton.push(21);
    }
  }

  return (
    <Container>
      <ServerButton isHome selected/>

      <Separator />

      {listServerButton.map((item, index) => (
        <ServerButton 
          key={index}
          hasNotification={[1,6].includes(index) ? true : false}  
          mentions={[2, 8].includes(index) ? item : 0}
        >
        </ServerButton>
      ))}

    </Container>
  );
}

export default ServerList;