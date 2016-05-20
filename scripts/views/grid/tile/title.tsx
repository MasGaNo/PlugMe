'use strict';

import * as React from 'react';

export interface ITileTitleProps {
    title:string;
    
}

export interface ITileTitleState {
    
}

export class TileTitle extends React.Component<ITileTitleProps, ITileTitleState> {
    constructor(props:ITileTitleProps) {
        super(props);
    }
    
    render() {
        return (
            <div className="tile-label">{this.props.title}</div>  
        );
    }
}