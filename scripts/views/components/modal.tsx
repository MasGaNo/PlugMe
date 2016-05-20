//import React from 'react';
//import { Button, MenuItem, ButtonToolbar,SplitButton, DropdownButton, Modal  } from 'react-bootstrap';
//
//var modalContent = React.createClass({
//    handleClick: function() {
//        this.setState({hide: !this.state.hide});
//    },
//    componentDidMount: function() {
//
//    },
//    getInitialState: function() {
//        return {
//            hide: true
//        };
//    },
//    handleRequestHide: function() {
//        this.setState({
//            hide: true,
//            modalManage: this.props.renderModal
//        });
//    },
//    render: function() {
//        return <div>
//            <button type="button" className="btn btn-danger btn-block" href="javascript:;" role="button" onClick={this.handleClick}  >
//               <span>Settings</span>
//            </button>
//            <div hidden={this.state.hide} className="text-left " >
//                <Modal className="modal fade" backdrop={true} onRequestHide={this.handleRequestHide}>
//                    <div className="manageModal">
//                        <div className="closeModal" onClick={this.handleClick}>
//                            <span className="glyphicon glyphicon-remove"> </span>
//                        </div>
//
//
//                       <div className="row-fluid">
//                           <p>Content Hee</p>
//                       </div>
//
//                        <div className="row-fluid">
//                           <p>Footer</p>
//                        </div>
//
//
//                    </div>
//                </Modal>
//            </div>
//        </div>;
//    }
//});
//
//export {modalContent}