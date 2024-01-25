import { styled } from 'linaria/react';
import React from 'react';

const HamburgerXButtonStyle = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const XButton1 = styled.div`
  content: '';
  position: absolute;
  width: 5px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 2px;
  transform: matrix(-0.71, 0.72, -0.7, -0.71, 0, 0);
`;

const XButton2 = styled.div`
  content: '';
  position: absolute;
  width: 5px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 2px;
  transform: matrix(0.71, 0.72, -0.7, 0.71, 0, 0);
`;

export const HamburgerXButton = () => {
  return (
    <HamburgerXButtonStyle>
      <XButton1 />
      <XButton2 />
    </HamburgerXButtonStyle>
  );
};
