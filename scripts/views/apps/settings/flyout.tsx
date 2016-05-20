'use strict';

import * as React from 'react';
import * as FlyoutContent from '../../components/flyout/content';

interface ISettingsFlyoutProps extends FlyoutContent.IFlyoutContentProps {
    
}

interface ISettingsFlyoutState extends FlyoutContent.IFlyoutContentState {
}


export class  SettingsAppFlyout extends FlyoutContent.FlyoutContent {
  constructor(props:ISettingsFlyoutProps) {
    super(props);
  }
  renderContent() {
    return (<section>
                    <span>Different options will popup below in Tiles with check box option</span>
                    <button> Modal button</button>
        </section>);
  }
}