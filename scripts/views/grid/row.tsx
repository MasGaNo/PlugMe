'use strict';

import * as React from 'react';

export interface IGridRowProps {
    
}

export interface IGridRowState {
    
}

export class GridRow extends React.Component<IGridRowProps, IGridRowState> {
    constructor(props:IGridRowProps) {
        super(props);
    }
    render() {
        return (
            <div className="row cells12">
                {this.props.children}
            </div>            
        );
    }
}