import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import Menu from './Menu';
import { homeOutline, settingsOutline } from 'ionicons/icons';
import ionImg from '../assets/favicon.png'

const Sidebar: React.FC = ({ }) => {
    const paths = [
        { name: 'List', url: '/app/list', icon: homeOutline },
        { name: 'Settings', url: '/app/settings', icon: settingsOutline },
    ]

    return (
        <IonPage>
            <IonMenu contentId='ion-content'>
                <IonHeader>
                    <IonToolbar color={'light'}>
                        <div className='ion-text-center ion-padding ion-flex-row'>

                            <img src={ionImg} alt='logo' width={20} height={20} />
                            <IonTitle>Menu</IonTitle>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {paths.map((p, i) => (
                        <IonMenuToggle key={i}>
                            <IonItem key={i} routerLink={p.url} routerDirection='none' lines='none' detail={false}>
                                {p.name}
                                <IonIcon slot='start' icon={p.icon} />
                            </IonItem>
                        </IonMenuToggle>
                    )
                    )}
                </IonContent>
            </IonMenu>
            <IonRouterOutlet id='ion-content'>
                <Route exact path="/app/list" component={Menu} />
                <Route exact path="/app/settings" component={Settings} />
                <Route exact path="/app">
                    <Redirect to="/app/list" />
                </Route>
            </IonRouterOutlet>


        </IonPage>
    );
};

export default Sidebar;