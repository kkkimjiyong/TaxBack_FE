import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: any }) => {
  return (
    <FlexBox>
      {" "}
      <Wrap>{children}</Wrap>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrap = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 100%;
`;
