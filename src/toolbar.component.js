import React from 'react';
import { Camera } from 'expo';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

export default ({ 
    capturing = false, 
    onShortCapture,  
}) => (
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col size={2} style={styles.alignCenter}>
                <TouchableWithoutFeedback
                    onPress={onShortCapture}>
                    <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal} />}
                    </View>
                </TouchableWithoutFeedback>
            </Col>
        </Row>
    </Grid>
);