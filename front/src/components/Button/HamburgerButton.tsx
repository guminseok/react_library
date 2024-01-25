import { styled } from 'linaria/react';
import React from 'react';

const HamburgerStyle = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HamburgerTopStyle = styled.span`
  margin-bottom: 10px;
  width: 38px;
  height: 2px;
  background: #f7f7f8;
`;

const HamburgerMiddleStyle = styled.span`
  margin-bottom: 10px;
  width: 38px;
  height: 2px;
  background: #f7f7f8;
`;

const HamburgerBottomStyle = styled.span`
  width: 38px;
  height: 2px;
  background: #f7f7f8;
`;

export const HamburgerButton = () => {
  return (
    <HamburgerStyle>
      <HamburgerTopStyle />
      <HamburgerMiddleStyle />
      <HamburgerBottomStyle />
    </HamburgerStyle>
  );
};
