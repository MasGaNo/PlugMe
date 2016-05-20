import * as React from 'react';
import * as FlyoutContent from '../../components/flyout/content';

interface ISettingsFlyoutProps extends FlyoutContent.IFlyoutContentProps {
    
}

interface ISettingsFlyoutState extends FlyoutContent.IFlyoutContentState {
}


export class  SettingsFlyout extends FlyoutContent.FlyoutContent {
  constructor(props:ISettingsFlyoutProps) {
    super(props);
  }
  render() {
    return (<div className="col-md-12"></div>);
  }
}