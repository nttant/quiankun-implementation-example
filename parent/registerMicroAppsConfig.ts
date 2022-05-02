const loader = (loading: boolean) => {
    console.log('loading', loading);
};

export const Microconfig = [
    //name: the name of the microapp,
    //entry: the entry of the micro application,
    //container: The selector or Element instance of the container node of the micro application,
    //activeRule: The rule that activates the micro-application (the route that can be matched to the micro-application),
    //loader: load the state of the micro application true | false
    {
        name : 'app1' ,
        entry: 'http://localhost:3001',
        container: '#mainView',
        activeRule: '/page-app-1',
        loader,
    },
    {
        name : 'app2' ,
        entry: 'http://localhost:3002',
        container: '#mainView',
        activeRule: '/page-app-2',
        loader,
    },
];
