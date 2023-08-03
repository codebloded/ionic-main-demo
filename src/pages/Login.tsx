import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonText, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { FormEvent, Fragment, useEffect } from 'react';
import { logInOutline, personCircleOutline } from "ionicons/icons"
import ionImg from '../assets/favicon.png'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const Login: React.FC = () => {
	const router = useIonRouter();

	const [intro, setIntro] = React.useState(false);
	const [present, dismiss] = useIonLoading();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await present('Logging in...')
		setTimeout(() => {
			dismiss();
			router.push('/app', 'root')
		}, 2000)


	}
	const finishIntro = () => {
		setIntro(true);
		Preferences.set({ key: 'introSeen', value: 'true' });
	}

	useEffect(() => {
		const checkStorage = async () => {
			const seen = await Preferences.get({ key: 'introSeen' });
			console.log(seen);
			setIntro(seen.value === 'true');
		}
		checkStorage();
	}, [])

	return (
		<Fragment>
			{!intro ? (
				<Intro onFinish={finishIntro} />
			) : (
				<IonPage>
					<IonHeader>
						<IonToolbar color={'tertiary'}>
							<IonTitle>Login</IonTitle>
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
								}}>Login</IonText>
							</IonCardHeader>
							<IonCardContent>
								<form onSubmit={handleSubmit}>
									<IonInput fill='outline' placeholder="Email" type='email' label='Email' labelPlacement='floating' />
									<IonInput fill='outline' className='ion-margin-top' placeholder="Password" labelPlacement='floating' label='Password' />
									<IonButton type='submit' expand='block' color={'tertiary'} className='ion-margin-top' >
										Login
										<IonIcon slot='end' icon={logInOutline} />
									</IonButton>
								</form>
								<IonButton expand='block' routerLink='/register' className='ion-margin-top' >
									<IonIcon slot='end' icon={personCircleOutline} />Create Account</IonButton>
							</IonCardContent>
						</IonCard>
					</IonContent>
				</IonPage>
			)}
		</Fragment>
	);
};

export default Login;