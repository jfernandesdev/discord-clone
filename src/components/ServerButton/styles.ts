import styled from 'styled-components';

import { Props }  from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background-color: ${props => props.isHome ? 'var(--purple)' : 'var(--primary)'};
  cursor: pointer;
  position: relative;
  border-radius: 50%;

  > img { 
    width: 28px;
    height: 28px;
  }

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    display: ${props => props.hasNotification ? 'inline' : 'none'}
  }

  &::after {
    content: '${props => props.mentions && props.mentions}';
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    background-color: var(--notification);
    border: 4px solid var(--quaternary);
    color: var(--white);
    border-radius: 12px;
    font-size: 13px;
    font-weight: bold;
    text-align: right;
    right: -4px;
    bottom: -4px;
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius 0.2s, background-color 0.2s;
  &.active, &:hover {
    border-radius: 16px;
    background-color: ${props => props.isHome ? 'var(--purple)' : 'var(--discord)'};
  }
`;