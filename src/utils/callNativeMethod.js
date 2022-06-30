import {UIManager, Platform} from 'react-native';

const callNativeMethod = (node, component, command, args) => {
  console.log(UIManager.getViewManagerConfig(component).Commands, 'SpreView',node);
  UIManager.dispatchViewManagerCommand(
    node,
    Platform.OS === 'ios'
      ? UIManager.getViewManagerConfig(component).Commands[command]
      : command,
    !!args ? args : undefined,
  );
};

export default callNativeMethod;
