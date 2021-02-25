import { notice, error, defaultModules } from '@pnotify/core/dist/PNotify';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const fall = err => {
  error({
    title: 'Oh No!',
    text: 'Something terrible happened. ' + err,
  });
};

const warn = () => {
  notice({
    title: 'Oh!',
    text: 'Something went wrong!',
    icon: 'far fa-envelope',
  });
};

export { fall, warn };
