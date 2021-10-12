import React from 'react';

import ServerList from '../ServerList';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <div>ServerName</div>
      <div>ChannelInfo</div>
    </Grid>
  );
}

export default Layout;