import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
justify-content: ${({ justify }) => (justify ? justify : "center")};
align-items: ${({ align }) => (align ? align : "center")};
flex-wrap: ${({ wrap }) => (wrap && wrap )};
`;

