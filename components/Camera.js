import React from 'react';
import { View, Text } from 'react-native';
import LoginPage from './LoginPage';
import CameraPage from '../src/camera.page';
import Toolbar from '../src/toolbar.component';

// import { Camera, Permissions } from 'expo';

export default class Camera1 extends React.Component {
    render() {
        return (
            <React.Fragment>
            <View>
                <CameraPage />
                </View>
                    <Toolbar />
                    </React.Fragment>
        );
    };
};
