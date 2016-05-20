'use strict';

import * as React from 'react';


export interface ILayoutProps {
    
}

export interface ILayoutState {
    
}

export class Layout extends React.Component<ILayoutProps, ILayoutState> {
    constructor(props:ILayoutProps) {
        super(props);
    }
    
    render() {
        return (
            <div className="container layout">
                {this.props.children}
            </div>
        );
    }
}