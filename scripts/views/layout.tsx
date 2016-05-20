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
            <div className="container layout" style={{width: '100%', height: '100%', padding: '0'}}>
                {this.props.children}
            </div>
        );
    }
}