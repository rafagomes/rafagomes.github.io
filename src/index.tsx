import React from 'react'
import ReactDOM from 'react-dom'
import {Global} from '@emotion/core'

import BaseStyle from './styles/base'

function App() {
    return (
        <>
            <Global styles={BaseStyle} />
            <p>ok</p>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))