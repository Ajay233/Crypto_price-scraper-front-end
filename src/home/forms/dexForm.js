import React from 'react'

const DexSelect = (props) => {

  const mapOptions = () => {
    let options = []
    for (const [key, value] of Object.entries(props.dexList)){
      let comingSoon = value.url === "Coming soon"
      options.push(<option disabled={comingSoon} value={value.url}>{key}  {comingSoon ? value.url : null}</option>)
    }
    return options
  }

  return(
    <select>
      <option selected disabled>Select a DEX</option>
      {mapOptions()}
    </select>
  );
}

export default DexSelect
