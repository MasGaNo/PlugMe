'use strict';

import * as React from 'react';
import PMException from '../../error/pmexception';

import {CloseButton} from '../components/gui/button/close';
import {SettingsButton} from '../components/gui/button/settings';

export type ITileSize = 'large'|'square'|'small'|'wide';

export interface ITileProps {
    size?:ITileSize;
    settings?:boolean;
    onClose?: () => void;
}

export interface ITileState {
    size: ITileSize;
}

export class Tile extends React.Component<ITileProps, ITileState> {
    public constructor(props: ITileProps) {
        super(props);
        this.state = {
            size: this.props.size || 'large'
        };
        
        this.onClose = this.onClose.bind(this);
    }

    private onClose() {
        
        if (this.props.onClose) {
            this.props.onClose();
        }
        
    }

    render() {
        
        let settingsDom = null;
        if (this.props.settings) {
            settingsDom = <SettingsButton />
        }
        
        return (
            <div className={`tile-${this.state.size} fg-white`}>
                <div className="tile-content">
                    {this.props.children}
                </div>
                <div className="action-bar">
                    {settingsDom}
                    <CloseButton onClick={this.onClose} />
                </div>
            </div>
        );
    }
}
