import React from 'react';
import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
        Any child here is passed down as a prop to ChildAsFC
    </ChildAsFC>
}

export default Parent;