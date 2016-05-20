'use strict';

import * as React from 'react';
import {Flyout} from '../../components/flyout';
import {SettingsAppFlyout} from './flyout';

export interface ISettingsAppProps {

}

export interface ISettingsAppState {

}

export class SettingsAppButton extends React.Component<ISettingsAppProps, ISettingsAppState> {
    constructor(props: ISettingsAppProps) {
        super(props);
        this.state = {};

        this.onClick = this.onClick.bind(this);
    }

    private onClick() {
        Flyout.Instance.add(SettingsAppFlyout, {});
    }

    render() {
        return (
            <button onClick={this.onClick}>
                <span className="glyphicon glyphicon-cog">P</span>
            </button>
        );
    }
}