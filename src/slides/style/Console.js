import React from 'react';
import styled from 'styled-components';

export const Username = styled.span`
  color: #b9f9ea;
`;

export function User({ path = '$ react-days-workshop:', children }) {
  return (
    <span>
      <Username>{`${path} `}</Username>
      {children}
    </span>
  );
}
