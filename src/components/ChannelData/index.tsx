import React, { useRef, useEffect } from 'react';

import { 
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon
} from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=> {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(21).keys()).map((n) => (
          <ChannelMessage
          author="Jeferson Fernandes"
          date="14/10/2021"
          content="Hello World!"
          />
        ))}
        <ChannelMessage
         author="Fulano de Tal"
         date="14/10/2021"
         isBot
         content={
          <><Mention>@Jeferson Fernandes</Mention>, are you all right? </>
         }
         hasMention
         />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder='Conversar em #chat-livre'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;