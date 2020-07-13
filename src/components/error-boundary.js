import React, { Component } from "react";
import styled from "styled-components";

const ErrorBoundaryStyled = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImageWrapperStyled = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

const ErrorImageTextStyled = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { state: { hasErrored } = {}, props: { children } = {} } = this;
    return hasErrored ? (
      <ErrorBoundaryStyled>
        <ErrorImageWrapperStyled imageUrl="https://firebasestorage.googleapis.com/v0/b/crown-clothing-ecom-react.appspot.com/o/error-image.png?alt=media" />
        <ErrorImageTextStyled>
          Sorry this page is broken as something went wrong.
        </ErrorImageTextStyled>
      </ErrorBoundaryStyled>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
