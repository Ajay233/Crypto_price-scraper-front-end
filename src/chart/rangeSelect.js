import React from 'react'
import { ranges } from '../lists.js'

const RangeSelect = (props) => {

  const renderOptions = () => {
    return ranges.map(range => <option key={range} value={range}>{range}</option>)
  }

  return(
    <div className="">
      <select
        onChange={(e) => props.setRange(e.target.value)}
        defaultValue={props.range}
        className="rangeSelect"
      >
      {renderOptions()}
      </select>
    </div>
  )
}

export default RangeSelect
