import React from 'react';

import logoDiscord from '../../assets/images/logo-discord.svg';

import { Button } from './styles';

export interface Props {
  isHome ?: boolean;
  hasNotification ?: boolean;
  mentions ?: number;
  selected ?: boolean;
}

const ServerButton: React.FC<Props> = ({
  isHome, hasNotification, mentions, selected
}) => {
  return(
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logoDiscord} alt="Discord" />}
    </Button>
  );
}


export default ServerButton;