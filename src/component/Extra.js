import React from 'react'

function extra({item}) {
  return (
    <div>
        
        <p></p>
        <ul>
        {
            item.Fitness_Banner_properts.map(bnr_propertys =>{
                return (
                    <li>{bnr_propertys.Fitness_Banner_propert}</li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default extra