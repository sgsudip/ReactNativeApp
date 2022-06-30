import React from 'react';
import {SprenView as SprenViewBridge} from '@spren/react-native';
import {findNodeHandle} from 'react-native';
import {callNativeMethod} from '../../utils';

export class SprenView extends React.Component {
  cancelReading = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'cancelReading');
  };
  setAutoStart = autoStart => {
    callNativeMethod(
      findNodeHandle(this),
      'SprenView',
      'setAutoStart',
      autoStart,
    );
  };
  getReadingData = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'getReadingData');
  };
  captureStart = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'captureStart');
  };
  captureStop = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'captureStop');
  };
  captureLock = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'captureLock');
  };
  captureUnlock = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'captureUnlock');
  };
  dropComplexity = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'dropComplexity');
  };
  handleOverExposure = () => {
    callNativeMethod(findNodeHandle(this), 'SprenView', 'handleOverExposure');
  };
  setTorchMode = torchMode => {
    callNativeMethod(
      findNodeHandle(this),
      'SprenView',
      'setTorchMode',
      torchMode,
    );
  };

  render() {
    const {children, ...rest} = this.props;
    // @ts-ignore
    return <SprenViewBridge {...rest}>{children}</SprenViewBridge>;
  }
}
