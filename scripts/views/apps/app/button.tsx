'use strict';

import * as React from 'react';
import * as ButtonApp from '../../components/gui/button/app'; 

export interface IAppButtonProps {
    
}

export interface IAppButtonState {
    
}

export class AppButton extends React.Component<IAppButtonProps, IAppButtonState> {
    constructor(props: IAppButtonProps) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }
    
    private onClick() {
        
    }
    
    render() {
        
        return (
            <div className="apps-app-button">
                <ButtonApp.AppButton onClick={this.onClick} />
            </div>  
        );
        
    }
    
}