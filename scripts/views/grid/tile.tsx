'use strict';

import * as React from 'react';
import PMException from '../../error/pmexception';

import {CloseButton} from '../components/gui/button/close';
import {SettingsButton} from '../components/gui/button/settings';

export type ITileSize = 'large'|'square'|'small'|'wide';
export type ITileSlide = 'up'|'down'|'left'|'right';

export interface ITileProps {
    size?:ITileSize;
    settings?:boolean;
    slide?:string;
    redirect?: string;
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
        this.onClickContent = this.onClickContent.bind(this);
    }

    private onClose() {
        
        if (this.props.onClose) {
            this.props.onClose();
        }
        
    }
    
    private onClickContent() {
        if (this.props.redirect) {
            window.open(this.props.redirect, '_blank');
        }
    }

    render() {
        
        let settingsDom = null;
        if (this.props.settings) {
            settingsDom = <SettingsButton />
        }
        
        let className = '';
        if (this.props.slide) {
            className = `slide-${this.props.slide}`;
        }
        
        return (
            <div className={`tile-${this.state.size} fg-white `}>
                <div className={`tile-content ${className}`} onClick={this.onClickContent}>
                    {this.renderContent()}
                </div>
                <div className="action-bar">
                    {settingsDom}
                    <CloseButton onClick={this.onClose} />
                </div>
            </div>
        );
    }
    
    protected renderContent() {
        return this.props.children;
    }
}
