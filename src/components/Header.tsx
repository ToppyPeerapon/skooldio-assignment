import React from "react"
import styled from "styled-components"

const Logo = styled.img`
  margin-right: 16px;
  width: 80px;
  height: 80px;
`

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 16px;
`

const Title = styled.div`
  color: #ff5a5a;
  font-size: 24px;
  font-weight: 600;
`

const Major = styled.div`
  color: #9b9b9b;
  font-size: 20px;
  font-weight: 500;
  font-family: Prompt-Medium;
`

const Faculty = styled.div`
  margin-bottom: 24px;
`

const University = styled.div`
  font-size: 20px;
  color: #9b9b9b;
  font-weight: 300;
  font-family: Prompt-Light;
`

interface Props {
  logo: string
  faculty: string
  major: string
  university: string
}

const Header = ({ logo, faculty, major, university }: Props) => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <div>
        <Faculty>
          <Title>{faculty}</Title>
          <Major>{major}</Major>
        </Faculty>
        <University>{university}</University>
      </div>
    </Container>
  )
}

export default Header
