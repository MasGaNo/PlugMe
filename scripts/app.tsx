'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Layout} from './views/layout';
import {Flyout} from './views/components/flyout';


module App {
    export function start() {
        ReactDOM.render(
            <Layout>
            </Layout>
            , document.querySelector('#container'));
    }
}

App.start();