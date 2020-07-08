import React from 'react'
import Title from "./Title"
import { InsertaScript } from '../Complete'


const HotelsBox = () => {
    const liga="//www.travelpayouts.com/widgets/d1ff3cae67934898b8bcfb12e1f16897.js?v=2043"
    return (
        <div>
            <Title title="Hoteles" />
            <InsertaScript liga={liga} />

        </div>
    )
}

export default HotelsBox
