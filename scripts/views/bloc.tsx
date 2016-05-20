'use strict';

import * as React from 'react';

export interface IBlocProps {
    
}

export interface IBlocState {
    
}

export class Bloc extends React.Component<IBlocProps, IBlocState> {
    public constructor(props:IBlocProps) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                </div>
            </div>
        );
    }
}
