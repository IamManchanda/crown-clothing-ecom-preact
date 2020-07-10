import React from "react";
import styled, { keyframes } from "styled-components";

const spinnerRotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerOverlayStyled = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerStyled = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: ${spinnerRotation} 1s ease-in-out infinite;
`;

const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlayStyled>
      <SpinnerStyled />
    </SpinnerOverlayStyled>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
