import React from 'react'
import HeaderBanner from './header__banner'
import HeaderRow from './header__row'

export default function Header() {
    return (
        <div className="header">
            <HeaderRow />
            <HeaderBanner />
        </div>
    )
}
