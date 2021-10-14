import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 16px; 
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255,255,255,0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 65%;
  }

  > span {
    background: var(--discord);
    margin-left: 9px;
    padding: 4px 5px;
    border-radius: 4px;
    color: var(--white);
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  border-radius: 50%;
  flex-shrink: 0;

  &.bot {
    background-color: var(--mention-detail);
  }
`;