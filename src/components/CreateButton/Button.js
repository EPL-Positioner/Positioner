import React from 'react';
import { Button } from './Style';

const CreateButton = () => {
    
    const event = () => {
        console.log("버튼이 클릭되었습니다.");
    }

    return (
        <Button onClick={() => event()}>
            Create Formation
        </Button>
    );
};

export default CreateButton;