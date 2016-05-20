'use strict';

import * as React from 'react';

export interface IButtonProps {
    onClick?:() => void;
}

export interface IButtonState {
    
}

export class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    protected onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}