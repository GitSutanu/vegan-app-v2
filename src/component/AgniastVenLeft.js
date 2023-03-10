import React from 'react'

function AgniastVenLeft({item}) {
  return (
    <div className="vegan-right-sec-txt">
    <div className="cmn-h3">
    <h3>{item.text_head}</h3>
    </div>
    <p><b>{item.text_middle}</b></p>
    <p>{item.text_last}</p>
</div>
  )
}

export default AgniastVenLeft