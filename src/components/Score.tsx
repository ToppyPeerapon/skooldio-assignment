import React from "react"
import styled from "styled-components"
import medal from "../images/medal.svg"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.div`
  font-size: 12px;
  color: #4a4a4a;
  text-align: right;
`

const ScoreTypo = styled.div`
  font-size: 42px;
  font-weight: 300;
  color: #4a4a4a;
`

const Score = () => {
  return (
    <Container>
      <img alt="medal" src={medal} />

      <div>
        <Title>คะแนนของคุณคือ</Title>
        <ScoreTypo>23,453</ScoreTypo>
      </div>
    </Container>
  )
}

export default Score
