import React, { useEffect, useState } from "react"
import { getTcasterApi, Tcaster } from "./apis/mockTcasterApi"
import Card from "./components/Card"
import "./index.css"

function App() {
  const [cardData, setCardData] = useState<Tcaster[]>()
  useEffect(() => {
    getTcasterApi().then((data) => {
      setCardData(data)
    })
  }, [])

  return (
    <div>
      {cardData?.map((card) => {
        return <Card key={card.id} data={card} />
      })}
    </div>
  )
}

export default App
