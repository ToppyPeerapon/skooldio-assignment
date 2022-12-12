import React from "react"
import styled from "styled-components"

import editScore from "../images/edit-score.svg"

const BoxEditScore = styled.div`
  border: 1px solid #ff5a5a;
  border-radius: 40px;
  color: #ff5a5a;
  padding: 8px 8px 8px 16px;
  display: flex;
  gap: 4px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const DetailRound = () => {
  return (
    <Container>
      <span>รอบที่ 4: Admission</span>

      <BoxEditScore>
        แก้ไขคะแนน
        <img alt="edit-score" src={editScore} />
      </BoxEditScore>
    </Container>
  )
}

export default DetailRound
