import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`

const ScoreTypo = styled.div`
  text-align: center;
  font-size: 19.6px;
  color: #5f5f5f;
`

const DetailTypo = styled.div`
  text-align: center;
  font-size: 11.2px;
  color: #5f5f5f;
`

interface Props {
  min: number | undefined
  avg: number | undefined
  max: number | undefined
}

const ScoreFaculty = ({ min, avg, max }: Props) => {
  return (
    <Container>
      <div>
        <ScoreTypo>{min === undefined ? "ไม่มีข้อมูล" : min}</ScoreTypo>
        <DetailTypo>คะแนนต่ำสุด 60</DetailTypo>
      </div>
      <div>
        <ScoreTypo>{avg === undefined ? "ไม่มีข้อมูล" : avg}</ScoreTypo>
        <DetailTypo>คะแนนเฉลี่ย 60</DetailTypo>
      </div>
      <div>
        <ScoreTypo>{max === undefined ? "ไม่มีข้อมูล" : max}</ScoreTypo>
        <DetailTypo>คะแนนสูงสุด 60</DetailTypo>
      </div>
    </Container>
  )
}

export default ScoreFaculty
