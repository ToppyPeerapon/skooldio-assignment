import React from "react"
import styled from "styled-components"
import { Tcaster } from "../apis/mockTcasterApi"
import DetailRound from "./DetailRound"
import Header from "./Header"
import OpenRound from "./OpenRound"
import Score from "./Score"
import ScoreFaculty from "./ScoreFaculty"

import HearthLogo from "../images/hearth.svg"

const Container = styled.div`
  padding: 16px;
  width: 445px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  margin: 32px;
  position: relative;
`

const ScoreRatio = styled.div`
  color: #48b6a3;
  width: 100%;
  padding: 16px 0;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
`

const BoxLikes = styled.div`
  color: #9b9b9b;
  padding-top: 16px;
`

const HearthImg = styled.img`
  position: absolute;
  right: 16px;
`

interface Props {
  data: Tcaster
}

const Card = ({ data }: Props) => {
  return (
    <Container>
      <HearthImg src={HearthLogo} alt="hearth-logo" />
      <Header
        logo={data.logo}
        faculty={data.faculty.name}
        major={data.name}
        university={data.faculty.university.name}
      />

      <OpenRound seats={data.roundSeats} />

      <DetailRound />

      <Score />

      <ScoreFaculty
        max={data.score?.max}
        min={data.score?.min}
        avg={data.score?.avg}
      />

      <ScoreRatio>ดูสัดส่วนคะแนน</ScoreRatio>

      <BoxLikes>{data.likes} คนที่สนใจ</BoxLikes>
    </Container>
  )
}

export default Card
