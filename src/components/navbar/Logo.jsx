import React from 'react'
import styled from "styled-components";

import logo from "../../logo.svg";

const Logo = () => {
  return (
    <Image src={logo} alt="CSSA Logo" />
  )
}

export default Logo

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;