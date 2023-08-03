import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import ionImg from '../assets/favicon.png'
import React from 'react';

const Register: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Register</IonTitle>
                    <IonButtons slot='start' color='light'>
                        <IonBackButton defaultHref='/' />

                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <div className='ion-text-center ion-padding'>

                <img src={ionImg} alt='logo' width={50} height={50} />
            </div>
            <IonText className='ion-text-center ion-text-bold'>Get Into Ionic</IonText>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonText className='ion-text-center ion-text-bold' style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: 'var(--ion-color-dark)'
                        }}>Register</IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput fill='outline' placeholder="Email" type='email' label='Email' labelPlacement='floating' />
                        <IonInput fill='outline' className='ion-margin-top' placeholder="Password" labelPlacement='floating' label='Password' />
                        <IonButton type='submit' expand='block' color={'tertiary'} className='ion-margin-top' >
                            Create Account
                            <IonIcon slot='end' icon={checkmarkDoneOutline} />
                        </IonButton>

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;