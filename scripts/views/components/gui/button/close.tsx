'use strict';

import * as React from 'react';
import * as Button from '../button';

export interface ICloseButtonProps extends Button.IButtonProps {
    onClick?:() => void;
}

export interface ICloseButtonState extends Button.IButtonState {
    
}

export class CloseButton extends Button.Button {
    constructor(props: ICloseButtonProps) {
        super(props);
    }
    
    render() {
        return (
            <button onClick={this.onClick}>
                <span className="glyphicon glyphicon-remove"></span>
            </button>  
        );
    }
}