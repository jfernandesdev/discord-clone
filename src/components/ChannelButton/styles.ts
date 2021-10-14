import styled, { css } from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2;

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div + div {
      display: inline;
    }
  }

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  > div + div {
    display: none;
  }
`;

const cssIcon = css`
  width: 17px;
  height: 17px;
  color: var(--symbol);
  cursor: pointer;
  transition: color .2s;
  margin-left: 4px;

  &:hover {
    color: var(--white);
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  ${cssIcon}
`;

export const SettingsIcon = styled(Settings)`
  ${cssIcon}
`;