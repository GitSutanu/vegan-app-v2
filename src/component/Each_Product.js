import React from 'react'

function Each_Product({item}) {
    return (
        <div className="column">
            <div className="product-innr">
                <div className="product-img">
                    <img src={item.Prd_Img} alt="" />

                </div>
                <div className="product-details">
                    <h4>{item.Prd_Name}</h4>
                    <p>{item.Prd_Text}</p>
                    <a href="#" className="view-product">
                        view the Product
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Each_Product