import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 align-items: center;
 padding: 4px 16px;
 margin-right: 4px;
 background: transform;
 color: var(--white);

 &.mention {
   background-color: var(--mention-message);
   border-left: 2px solid var(--mention-detail);
   padding-left: 14px;
 }

 & + div {
   margin-top: 13px;
 }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary);
  flex-shrink: 0;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    font-size: 16px;
  }

  > span {
    margin-left: 6px;
    padding: 4px 5px;
    border-radius: 4px;
    font-size: 11px;
    background-color: var(--discord);
    text-transform: uppercase;
    font-weight: bold;
  }

  > time {
    margin-left: 6px;
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
