'use strict';

import * as React from 'react';
import * as Button from '../button';

export interface IAppButtonProps extends Button.IButtonProps {
    onClick?:() => void;
}

export interface IAppButtonState extends Button.IButtonState {
    
}

export class AppButton extends Button.Button {
    constructor(props: IAppButtonProps) {
        super(props);
    }
    
    render() {
        return (
            <button onClick={this.onClick}>
                <span className="glyphicon glyphicon-th"></span>
            </button>  
        );
    }
}