
 
import * as React from 'react';
import * as FlyoutHolder from '../flyout';

export interface IFlyoutContentProps {
}

export interface IFlyoutContentState {
}

export class  FlyoutContent extends React.Component <IFlyoutContentProps,IFlyoutContentState>{
  constructor(props:IFlyoutContentProps) {
    super(props);
  }
  render() {
    return (<div className="col-md-12"> </div>);
  }
}

