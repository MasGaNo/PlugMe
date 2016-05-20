'use strict';

import * as React from 'react';
import PMException from '../../error/pmexception';

export interface ITileProps {
    
}

export interface ITileState {
    
}

export class Tile extends React.Component<ITileProps, ITileState> {
    public constructor(props: ITileProps) {
        super(props);
    }
    /*
    render() {
        throw(new PMException("Cannot instantiate Abstract Class Tile."));
        return null;
    }*/
}
