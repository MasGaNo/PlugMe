'use strict';

import * as React from 'react';
import * as Button from '../button';

export interface ISettingsButtonProps extends Button.IButtonProps {
    
}

export interface ISettingsButtonState extends Button.IButtonState {
    
}

export class SettingsButton extends Button.Button {
    constructor(props: ISettingsButtonProps) {
        super(props);
    }
    
    render() {
        return (
            <button onClick={this.onClick}>
                <span className="glyphicon glyphicon-cog"></span>
            </button>  
        );
    }
}