import React from 'react'
import ReactDOM from 'react-dom'
import {Global} from '@emotion/core'

import BaseStyle from './styles/base'


function App() {
    return (
        <>
            <Global styles={BaseStyle} />
            <div>ok</div>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))