import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// This configuration is based on React 18.
// For React 16 implementation, see https://qiankun.umijs.org/guide/getting-started
// and https://qiankun.umijs.org/guide/tutorial#react-micro-app

function renderApp(props: any) {
  const root = ReactDOM.createRoot(
    props.container ?
      props.container.querySelector('#root') :
      document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function unmountApp(props: any) {
  const root = ReactDOM.createRoot(
    props.container ?
      props.container.querySelector('#root') :
      document.getElementById('root') as HTMLElement
  );

  root.unmount();
}

if (!window.__POWERED_BY_QIANKUN__) {
  renderApp({});
}

/**
 * The bootstrap will only be called once when the child application is initialized.
 * The next time the child application re-enters, the mount hook will be called directly,
 * and bootstrap will not be triggered repeatedly.
 * Usually we can do some initialization of global variables here,
 * such as application-level caches that will not be destroyed during the unmount phase.
 */
 export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * The mount method is called every time the application enters,
 * usually we trigger the application's rendering method here.
 */
export async function mount(props: any) {
  renderApp(props);
}

/**
 * Methods that are called each time the application is switched/unloaded,
 * usually in this case we uninstall the application instance of the subapplication.
 */
export async function unmount(props: any) {
  unmountApp(props);
}

/**
 * Optional lifecycle，just available with loadMicroApp way
 */
export async function update(props: any) {
  console.log('update props', props);
}
