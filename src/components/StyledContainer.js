import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  padding: 40px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  ${(props) => props.customStyles}
`;

const StyledContainer = ({ children, customStyles }) => {
  return <StyledDiv customStyles={customStyles}>{children}</StyledDiv>;
};

export default StyledContainer;
