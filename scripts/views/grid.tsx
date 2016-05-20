'use strict';

import * as React from 'react';
import {Tile, ITileProps} from './grid/tile';
import {GridRow} from './grid/row';

interface IBlocInstance {
    class: typeof Tile,
    props: ITileProps,
    children:any
}

export interface IGridProps {
    
}

export interface IGridState {
    blocList:IBlocInstance[];
}

export class Grid extends React.Component<IGridProps, IGridState> {
    
    private static _instance: Grid; 
    
    public static get Instance() {
        return Grid._instance;
    }
    
    constructor(props: IGridProps) {
        super(props);
        this.state = {
            blocList: []
        };
    }
    
    public add(bloc: typeof Tile, props: ITileProps, children: any) {
        this.state.blocList.push({
            class: bloc,
            props: props,
            children: children
        });
        this.setState(this.state);
    }
    
    componentDidMount() {
        Grid._instance = this;
    }
    
    private onCloseBloc(index: number) {
        this.state.blocList.splice(index, 1);
        this.setState(this.state);
    }
    
    public render() {
        return (
            <div className="tile-container bg-darkCobalt">
                {this.state.blocList.map((bloc:IBlocInstance, index) => {
                    let props = bloc.props;
                    props.onClose = this.onCloseBloc.bind(this, index);
                    return (
                        <bloc.class key={`bloc_${index}`} {...bloc.props}>
                            {bloc.children}
                        </bloc.class>
                    );
                })}
            </div>  
        );
    }
}
