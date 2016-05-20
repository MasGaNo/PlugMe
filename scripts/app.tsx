'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Layout} from './views/layout';
import {Grid} from './views/grid';

import {AppButton} from './views/apps/app/button';

import * as ApplicationView from './views/application';

import * as JamendoPlayer from './views/apps/jamendoplayer/tile';

module App {
    export function start() {
        ReactDOM.render(
            <Layout>
                <Grid />
                <AppButton />
                <ApplicationView.Application />
            </Layout>
            , document.querySelector('#app-container'));
            
            Grid.Instance.add(JamendoPlayer.JamendoPlayerTile, {size:'large', settings:false, url:"http://widgets.jamendo.com/v3/?layout=cover&theme=light&width=400"} as JamendoPlayer.IJamendoPlayerTileProps, null);
    }
}

App.start();