'use strict';
 
import * as React from 'react';

export interface IFlyoutContentProps {
        exitOnEscape?: Boolean;
        exitOnOutsideClick?: Boolean;
}

export interface IFlyoutContentState {
}

export class  FlyoutContent extends React.Component <IFlyoutContentProps,IFlyoutContentState>{
  constructor(props:IFlyoutContentProps) {
    super(props);

    this.state = {
    };

      this.onOpenClose = this.onOpenClose.bind(this);
  }

  private onOpenClose(){

  }

    close() {

    }

  render() {
    return (
        <div className="col-md-12">
            <div className="row-fluid" onClick={this.onOpenClose}>
                <i className="glyphicon glyphicon-cog"></i> <span>P</span>
                <div className="row-fluid">
                    {this.renderContent()}
                </div>
            </div>
        </div>
    );
  }

    renderContent(){
        return null;
    }
}

