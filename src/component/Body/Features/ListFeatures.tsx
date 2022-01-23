import React from 'react';
import { ItemFeature, ItemContainer, Div } from './FeaturesStyle';
import './ListFeaturesStyle.css'

export const ListFeatures = () => {
    const listFeatures = [
        {
            icon: "fas fa-globe",
            title: "GPRS Tracking",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Hic explicabo voluptas nisi iste reiciendis, tempore commondi necessitatibus, laborum laudantium."
        },
        {
            icon: "fas fa-bell",
            title: "Notification Alart",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim"
        },
        {
            icon: "fas fa-video",
            title: "Instant Video Call",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim"
        },
        {
            icon: "fas fa-comment-alt",
            title: "User Live Chat",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim"
        },
        {
            icon: "fab fa-android",
            title: "Install Any App",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim"
        },
        {
            icon: "fas fa-bullseye",
            title: "Attractive Design",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim"
        }
    ]
    return (
        <div>
            {
                listFeatures.map((lists, index) => {
                    return (
                        <div className='item-features'>
                            <ItemContainer>
                                <ItemFeature >
                                    <i className={lists.icon}></i>
                                    <h4>{lists.title}</h4>
                                    <p>{lists.content}</p>
                                </ItemFeature>
                            </ItemContainer>
                        </div>
                    )
                })
            }
        </div>
    );
};
