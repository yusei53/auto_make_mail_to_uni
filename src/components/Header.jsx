import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SString>YASUMU</SString>
    </SHeader>
  );
};

const SHeader = styled.div`
  background-color: #1c97a0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const SString = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 50px;
  padding: 1.5% 0;
`;
