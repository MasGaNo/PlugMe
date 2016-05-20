
'use strict';

import * as React from 'react';
import {FlyoutContent, IFlyoutContentProps} from './flyout/content';

export interface IFlyoutProps {

}

export interface IFlyoutState {
  currentFlyout: FlyoutContent;
}

export class  Flyout extends React.Component<IFlyoutProps, IFlyoutState> {

  private static _instance: Flyout;

  public static get Instance() {
    return Flyout._instance;
  }

  private currentFlyout:FlyoutContent;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Flyout._instance = this;
  }

  add(flyoutContent:typeof FlyoutContent, props: IFlyoutContentProps) {

    if (this.state.currentFlyout) {
      this.state.currentFlyout.close();
    }

  }

  render() {

    return (
        <div className="col-md-4">
          <button className="btn btn-danger"> <i className="glyphicon glyphicon-cog"></i> Blaahhh</button>
        </div>
    );
  }
}