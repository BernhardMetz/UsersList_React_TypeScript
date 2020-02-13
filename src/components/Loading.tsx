import React from 'react'
import '../styles/loading.css';

interface Props {

}

export const Loading: React.FC<Props> = () => {
    return (
        <div className="circle1">
            <div className="circle2"/>
        </div>
    )
}