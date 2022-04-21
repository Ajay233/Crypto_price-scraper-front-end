import React from 'react'

const RangeSelect = (props) => {
  return(
    <div className="">
      <button
        className={`button-link ${props.range === "15m" ? "selected" : ""}`}
        onClick={() => props.setRange("15m")}>
          15m
      </button>
      <button
        className={`button-link ${props.range === "1h" ? "selected" : ""}`}
        onClick={() => props.setRange("1h")}>
          1h
      </button>
      <button
        className={`button-link ${props.range === "4h" ? "selected" : ""}`}
        onClick={() => props.setRange("4h")}>
          4h
      </button>
      <button
        className={`button-link ${props.range === "Day" ? "selected" : ""}`}
        onClick={() => props.setRange("Day")}>
          Day
      </button>
      <button
        className={`button-link ${props.range === "Week" ? "selected" : ""}`}
        onClick={() => props.setRange("Week")}>
          Week
      </button>
      <button
        className={`button-link ${props.range === "All" ? "selected" : ""}`}
        onClick={() => props.setRange("All")}>
          All
      </button>
    </div>
  )
}

export default RangeSelect
