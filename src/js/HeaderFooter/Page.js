import React from "react";
import { Outlet } from "react-router-dom";

function Page() {
    return (
        <>
            <div class="header-content">
                <div class="header-content__left-block">
                    <div class="header-content__left-buttons">
                        <div class="header-content__shop header-content__button">Shop</div>
                        <div class="header-content__contact header-content__button">Contact</div>
                    </div>
                    <div class="header-content__menu"></div>
                </div>
                <div class="header-content__right-block">
                    <div class="header-content__right-buttons">
                        <div class="header-content__sign-in header-content__button">Sign in</div>
                        <div class="header-content__cart header-content__button">Cart</div>
                    </div>
                    <div class="header-content__cart"></div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Page