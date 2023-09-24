import React from "react";
import hero from "../../img/img-hero.png"
import imgType1 from "../../img/card-item.png"
import imgType2 from "../../img/card-item-1.png"
import imgType3 from "../../img/card-item-2.png"
import imgType4 from "../../img/card-item-3.png"
import imgType5 from "../../img/card-item-4.png"

function Main() {
    const listNameType = ["Fresh Flowers", "Dried Flowers", "Live Plants", "Aroma Candels", "Fresheners"]
    const listImgType = [imgType1, imgType2, imgType3, imgType4, imgType5]

    const listBlockType = listNameType.map((value, index) => {
        return (
            <div class="main-section__block-type">
                {index % 2 == 1 &&
                    <div class="main-section__img-type">
                        <img src={listImgType[index]} alt="" />
                    </div>
                }
                <div class="main-section__type">
                    <h3 class="main-section__name-type">{listNameType[index]}</h3>
                    <p class="main-section__show-now">Shop now</p>
                </div>
                {index % 2 == 0 &&
                    <div class="main-section__img-type">
                        <img src={listImgType[index]} alt="" />
                    </div>
                }
            </div>
        )
    })

    return (
        <>
            <div class="main-content">
                <div class="main-section">
                    <div class="main-section__left">
                        <div class="main-section__row-1">
                            <h2 class="main-section__name">Kyiv LuxeBouquets<sup>®</sup></h2>
                            <p class="main-section__description">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
                                Joy with Our Online Flower Delivery Service</p>
                        </div>
                        <div class="main-section__row-2">
                            <div class="main-section__hero-img">
                                <img src={hero} alt="" />
                            </div>
                            <p class="main-section__text">Experience the joy of giving with our modern floral studio. Order online and
                                send fresh flowers, plants and gifts today.</p>
                        </div>
                    </div>
                    <div class="main-section__right">
                        {listBlockType}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main