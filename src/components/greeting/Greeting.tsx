import React from 'react';
import Heading from '../heading';

interface Props {
    greeting: string,
    presentation: string,
}

function Greeting({greeting, presentation}:Props) {
    return (
        <>
            <Heading rank="2">{ greeting }</Heading>
            <Heading rank="1">{ presentation }</Heading>
        </>
    )
}

export default Greeting;