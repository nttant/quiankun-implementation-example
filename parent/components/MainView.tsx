import { AppMetadata } from 'qiankun';
import { useEffect } from 'react';
 
import { Microconfig } from '../registerMicroAppsConfig';
 
interface Props {
 children?: JSX.Element | JSX.Element[];
}
 
export default function MainView(props: Props) {
    const register = async () => {
        const  qiankun  =  await  import ( 'qiankun' ) ;

        // register the microapp
        qiankun.registerMicroApps(Microconfig, {
            // qiankun lifecycle hook - before the micro application is loaded
            beforeLoad: (app: AppMetadata) => {
                console.log('before load', app, app.name);
                return Promise.resolve();
            },
            // qiankun lifecycle hook - after the micro application is mounted
            afterMount: (app: AppMetadata) => {
                console.log('after mount', app.name);
                return Promise.resolve();
            },
        });

        // start qiankun
        qiankun.start();

        // add global exception catch
        qiankun.addGlobalUncaughtErrorHandler((handler) => {
            console.log ( ' Exception catch' , handler ) ; 
        });
    };

    useEffect(() => {
        register();
    }, []);
 
    return <main id="mainView">{props.children}</main>;
}