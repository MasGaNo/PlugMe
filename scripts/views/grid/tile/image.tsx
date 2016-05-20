'use strict';

import * as React from 'react';

export interface ITileImageProps {
    url:string;
    text?: string;
}

export interface ITileImageState {
    
}

export class TileImage extends React.Component<ITileImageProps, ITileImageState> {
    constructor(props:ITileImageProps) {
        super(props);
    }
    
    render() {
        
        let text;
        if (this.props.text) {
            text = (
                <div class="image-overlay">
                    {this.props.text}
                </div>
            );
        }
        
        return (
            <div className="image-container">
                <div className="frame">
                    <img src={this.props.url}/>
                </div>
                {text}
            </div>
        );
    }
}