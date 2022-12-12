import React from "react"
import styled from "styled-components"

const CircleRoundAddmission = styled.div<{ isOpen?: boolean }>`
  border-radius: 50%;
  background-color: ${(props) => (props.isOpen ? "#2ecc71" : "#d8d8d8")};
  color: white;
  width: 29px;
  height: 29px;
  line-height: 29px;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  gap: 16px;
  margin: 8px 0;
`

const CircleContainer = styled.div`
  display: flex;
  gap: 8px;
`

interface Props {
  seats: number[]
}

const OpenRound = ({ seats }: Props) => {
  return (
    <Container>
      <span>รอบที่เปิด</span>
      <CircleContainer>
        {seats.map((seats, index) => {
          return (
            <CircleRoundAddmission key={index} isOpen={seats > 0}>
              {index + 1}
            </CircleRoundAddmission>
          )
        })}
      </CircleContainer>
    </Container>
  )
}

export default OpenRound
