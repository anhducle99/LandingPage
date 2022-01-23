import React from 'react';
import anh1 from '../../Img/product-1.jpg'
import anh2 from '../../Img/product-2.jpg'
import anh3 from '../../Img/product-3.jpg'
import anh4 from '../../Img/product-4.jpg'
import "./ListProductStyle.css"


export const ListProduct = () => {
    const listProduct = [
        {
            img: anh1,
            h4: "Olimus Blue",
            h5: "$188.00",
        },
        {
            img: anh2,
            h4: "Amexso Black",
            h5: "$199.00",
        },
        {
            img: anh3,
            h4: "Latexo Green",
            h5: "$200.00",
        },
        {
            img: anh4,
            h4: "Alimax Pink",
            h5: "$299.00",
        },
        {
            img: anh4,
            h4: "Glasgox Green",
            h5: "$99.00",
        },
        {
            img: anh3,
            h4: "Amelia Blue",
            h5: "$599.00",
        }
    ]
    return (
        <div className='item-product'>
            {
                listProduct.map((item, index) => {
                    return (
                        <div className="downContent">
                            <div className="singleContent" >
                                <img src={item.img} alt="error Images" />
                                <div className="subContent">
                                    <h4>{item.h4}</h4>
                                    <h5>{item.h5}</h5>
                                    <a href="#"> Order Now<i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
