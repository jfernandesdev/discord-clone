import styled, { css } from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  max-width: 71%;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background: var(--gray);
  border-radius: 50%;
  position: relative;

  &::before {
    content: '-';
    width: 13px;
    height: 13px;
    background: var(--notification);
    border-radius: 50%;
    position: absolute;
    right: -4px;
    bottom: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  font-size: 13px;
  max-width: 75%;
 
  > strong {
    color: var(--white);
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > span {
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const cssIcon = css`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
 
  &:hover {
    color: var(--white);
  }
`;

export const MicIcon = styled(Mic)`
  ${cssIcon}
`;

export const HeadphoneIcon = styled(Headset)`
   ${cssIcon}
`;

export const SettingsIcon = styled(Settings)`
   ${cssIcon}
`;

