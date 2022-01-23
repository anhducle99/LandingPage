import React from 'react';
import img1 from '../../Img/client-1.jpg'
import img2 from '../../Img/client-2.jpg'
import img3 from '../../Img/client-3.jpg'
import Slider from "react-slick";
import { DownCustomerFeedback } from '../Review/ReviewStyle'


export const ListReview = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const listReview = [
        {
            Img: img1,
            content: "Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi, itaque maiores labore.",
            name: "Adam Smith",
            position: "product manager"
        },
        {
            Img: img2,
            content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis.",
            name: "Micheal Jonson",
            position: "affiliate marketer"
        },
        {
            Img: img3,
            content: "Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi, itaque maiores labore.",
            name: "Shane Kyle",
            position: "product manager"
        }
    ]
    return (
        <Slider {...settings}>

            {
                listReview.map((list, index) => {
                    return (
                        <div>
                            <DownCustomerFeedback>
                                <div className="client-img">
                                    <img src={list.Img} alt=""
                                        style={{
                                            display: "inline-block",
                                            borderRadius: "50%",
                                            maxWidth: "80px",
                                            height: "auto",
                                            marginTop: "40px",
                                            marginBottom: "30px"
                                        }} />
                                </div>
                                <div className="client-comnt">
                                    <h5>{list.content}</h5>
                                    <span>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <h4>{list.name}</h4>
                                    <p>{list.position}</p>
                                </div>
                            </DownCustomerFeedback>
                        </div>
                    )
                })
            }
        </Slider>
    );
};
