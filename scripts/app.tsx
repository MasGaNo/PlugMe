'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Layout} from './views/layout';
import {Flyout} from './views/components/flyout';
import {Grid} from './views/grid';

import * as Tile from './views/grid/tile';
import * as Image from './views/grid/tile/image';
import * as Title from './views/grid/tile/title';

import {AppButton} from './views/apps/app/button';

import * as ApplicationView from './views/application';


module App {
    export function start() {
        ReactDOM.render(
            <Layout>
                <Flyout />
                <Grid />
                <AppButton />
                <ApplicationView.Application />
            </Layout>
            , document.querySelector('#app-container'));
            
            let size:Tile.ITileSize[] = ['large', 'small', 'wide', 'square'];
            //setInterval(function() {
               for (var i = 0; i < 5; ++i) {
                   
                   let children = [
                       <Image.TileImage url="http://cdn.theatlantic.com/assets/media/img/posts/600_Stay_at_home_dad_reuters.jpg" />,
                       <Title.TileTitle title="test" />
                   ];
                   
                Grid.Instance.add(Tile.Tile, {size:'large', settings:true} as Tile.ITileProps, children);
               }
            //}, 2000);
    }
}

App.start();