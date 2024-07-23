import { useState } from 'react';
import styles from './Contacts.module.scss';

function ContactsForm() {
	const [inputName, setInputName] = useState('');
	const [inputPhoneNumber, setInputPhoneNumber] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	return (
		<div className={styles['contacts-form']}>
			<form action="" method="get" target="_self">
				<p className={styles['form-title']}>
					<span>Заполните форму</span>
					<br /> и мы свяжемся в течении 15 минут
				</p>

				<label htmlFor="name">Имя:</label>
				<input
					id="name"
					className={styles['input-name']}
					value={inputName}
					onChange={(event) => {
						setInputName(event.target.value);
					}}
					placeholder="Ваше имя*"
				/>

				<label htmlFor="phone-number">Номер телефона:</label>
				<input
					id="phone-number"
					className={styles['input-phone-number']}
					value={inputPhoneNumber}
					onChange={(event) => {
						setInputPhoneNumber(event.target.value);
					}}
					placeholder="Ваш номер телефона*"
				/>

				<label htmlFor="email">Email:</label>
				<input
					id="email"
					className={styles['input-email']}
					value={inputEmail}
					onChange={(event) => {
						setInputEmail(event.target.value);
					}}
					placeholder="Ваш Email*"
				/>

				<button type="button">Оставить заявку</button>
			</form>
		</div>
	);
}

export default ContactsForm;
