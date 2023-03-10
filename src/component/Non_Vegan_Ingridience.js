import React from 'react'

function Non_Vegan_Ingridience({item}) {
    return (
        <div className='col-md-6 col-lg-3'>
            <div className="slider-box">
                <div className="thumb">
                    <img src={item.prd_img} alt="" />
                </div>
                <h4>{item.prd_title}</h4>
                <p>{item.prd_desc}</p>
            </div>
        </div>
    )
}

export default Non_Vegan_Ingridience