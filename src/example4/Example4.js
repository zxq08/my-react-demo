import React from 'react';
import Buttons from './Buttons';
import ShowArea from './ShowArea';
import {Color} from './colors'

function Example4() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Example4