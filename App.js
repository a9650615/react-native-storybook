import StorybookUI from './storybook';

import MainView from './page/MainView';

module.exports = __DEV__ ? StorybookUI : MainView;