import { NativeModules } from 'react-native';
import Reactotron, { trackGlobalErrors, overlay } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import Immutable from 'seamless-immutable';
import { Tron } from '@interfaces/reactotron';

declare global {
  interface Console {
    tron: Tron;
  }
}

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'appName', host: scriptHostname })
    .use(trackGlobalErrors({}))
    .use(
      reactotronRedux({
        onRestore: state =>
          (<any>Object).entries(state).reduce(
            (prev: any, [key, value]: any) => ({
              ...prev,
              [key]: key === 'nav' ? value : Immutable(value)
            }),
            {}
          )
      })
    )
    .use(overlay()).setAsyncStorageHandler!(AsyncStorage).connect();

  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}

export default Reactotron;
