import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Intro1 from '../assets/1.svg'
import Intro2 from '../assets/2.svg'
import './intro.css';

interface ContainerProps {
	onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
	const swiper = useSwiper();
	return (
		<IonButton onClick={() => swiper.slideNext()} fill='solid'>{children}</IonButton>
	);
}
const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
	const [introSeen, setIntroSeen] = useState(false);


	return (
		<Swiper>
			<SwiperSlide>
				<img src={Intro1} alt='intro1' />
				<IonText className='ion-text-center'>Get Into Ionic</IonText>
				<SwiperButtonNext>Next</SwiperButtonNext>
			</SwiperSlide>
			<SwiperSlide>
				<img src={Intro2} alt='intro2' />
				<IonText className='ion-text-center'>Get Into Ionic</IonText>
				<IonButton onClick={() => onFinish()} color={'tertiary'} fill='solid'>Finish</IonButton>
			</SwiperSlide>
		</Swiper>
	);
};

export default Intro;