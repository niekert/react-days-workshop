import React from 'react';
import styled from 'styled-components';

export const Username = styled.span`
  color: #b9f9ea;
`;

export function User({ children }) {
  return (
    <span>
      <Username>$ react-days-workshop: </Username>
      {children}
    </span>
  );
}
