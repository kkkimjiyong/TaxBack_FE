import React from "react";
import styled from "styled-components";

export const ProgressBar = ({
  process,
  totalProcess,
}: {
  process: number;
  totalProcess: number;
}) => {
  return (
    <Wrap>
      <CurrentTxt>
        {process}/{totalProcess}
      </CurrentTxt>
      <BackgroundBar>
        <CurrentBar style={{ width: `${(process / totalProcess) * 100}%` }} />
      </BackgroundBar>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5%;
  width: 100%;
  background-color: var(--color-lightSub);
`;

const CurrentTxt = styled.div`
  margin-right: 5%;
`;

const BackgroundBar = styled.div`
  background-color: white;
  width: 70%;
  height: 10px;
  border-radius: 10px;
`;

const CurrentBar = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: var(--color-main);
`;
