'use strict';

import * as React from 'react';

export interface IApplicationProps {
}

export interface IApplicationState {
    show: boolean;
    title?: string;
    content?: JSX.Element;
}

export class Application extends React.Component<IApplicationProps, IApplicationState> {
    
    private static _instance: Application;
    
    public static get Instance() {
        return Application._instance;
    }
    
    constructor(props: IApplicationProps) {
        super(props);
        
        this.state = {
            show: false,
            title: '',
            content: null
        };
    }
    
    componentDidMount() {
        
        Application._instance = this;
        
    }
    
    private onClose() {
        this.setState({
            show: false
        });
    }
    
    public show(title: string, content: JSX.Element) {
        this.setState({
            show: true,
            content: content,
            title: title
        });
    }
    
    render() {
        let style;
        if (this.state.show) {
            style = {
                display: 'block',
                opacity: 1
            };
        } else {
            style = {
                display: 'none',
                opacity: 0
            };
        }
        
        style.backgroundColor = 'rgba(158, 158, 158, 0.5)';
        
        return (
            <div className="modal fade" tabindex="-1" role="dialog" style={style}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={this.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="glyphicon glyphicon-remove"></span></button>
                            <h4 className="modal-title">{this.state.title}</h4>
                        </div>
                        <div className="modal-body">
                            {this.state.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}