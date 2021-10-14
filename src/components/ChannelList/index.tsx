import React from 'react';

import { 
  Container,
  Category,
  AddCategoryIcon,
} from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {

  const channelNameList = [
    'chat-livre', 
    'general', 
    'trabalho',
    'memes',
    'music',
    'steam',
  ]

  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      {channelNameList.map((item, index) => (
         <ChannelButton 
          key={index}
          selected={index === 0 && true}
          channelName={item}
         />
      ))}
     
    </Container>
  );
}

export default ChannelList;