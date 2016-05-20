'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Layout} from './views/layout';

module App {
    export function start() {
        ReactDOM.render(<Layout/>, document.querySelector('#container'));
    }
}

App.start();