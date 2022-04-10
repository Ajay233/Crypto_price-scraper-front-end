import React from 'react'

const Select = (props) => {

  const mapOptions = () => {
    return props.optionList instanceof Array ? mapArray() : mapObject();
  }

  const mapObject = () => {
    let options = []
    for (const [key, value] of Object.entries(props.optionList)){
      let comingSoon = value.url === "Coming soon"
      options.push(<option key={key} disabled={comingSoon} value={key}>{key}{comingSoon ? `  ***${value.url}***` : null}</option>)
    }
    return options
  }

  const mapArray = () => {
    let options = props.optionList.map((opt, i) => {
      return <option key={i} value={opt.currency}>{opt.currency}</option>
    })
    return options
  }

  return(
    <select onChange={(e) => props.onChangeFunc(e)} className={props.type === 'inline' ? 'select-inline' : ''}>
      <option selected disabled>{props.defaultText}</option>
      {mapOptions()}
    </select>
  );
}

export default Select;
