import styled from 'styled-components';

export default styled.div`
  width: 100%;
  margin: auto;
  max-width: 1440px;
  height: 100%;
  min-height: ${({ props }) => props?.fullHeight ? '100vh' : 'auto'};
`;
