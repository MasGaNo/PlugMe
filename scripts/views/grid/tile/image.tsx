'use strict';

import * as React from 'react';

export interface ITileImageProps {
    url:string;
    text?: string;
    onClick?: () => void;
}

export interface ITileImageState {
    
}

export class TileImage extends React.Component<ITileImageProps, ITileImageState> {
    constructor(props:ITileImageProps) {
        super(props);
        this.onClickPicture = this.onClickPicture.bind(this);
    }
    
    protected onClickPicture() {
        if (this.props.onClick) {
            this.props.onClick();
        }
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
            <div className="image-container" onClick={this.onClickPicture}>
                <div className="frame">
                    <img src={this.props.url}/>
                </div>
                {text}
            </div>
        );
    }
}