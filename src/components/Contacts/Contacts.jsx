import styles from './Contacts.module.scss';
import ContactsForm from './ContactsForm';

function Contacts() {
	return (
		<section className={styles.contacts}>
			<div className={styles.container}>
				<div className={styles['contacts-info']}>
					<h2 className={styles.title}>Контакты</h2>
					<h3 className={styles.subtitle}>
						Связаться с нами можно по номерам ниже или заполнив форму и мы сами
						вам перезвоним.
					</h3>
					<p className={styles.paragraph}>
						Получить консультацию по выбору тура для отдыха можно
						<span> с 9.00 до 18.00 </span>
						по телефонам ниже:
					</p>

					<ul className={styles['phone-numbers']}>
						<li>
							<img src="/images/icon_phone.png" alt="phone" title="Phone" />
							+375(17) xxx xx xx
						</li>
						<li>
							<img src="/images/icon_mts.png" alt="mts" title="MTS" />
							+375(29) xxx xx xx
						</li>
						<li>
							<img src="/images/icon_a1.png" alt="a1" title="A1" />
							+375(44) xxx xx xx
						</li>

						<li>
							<img src="/images/icon_life.png" alt="life" title="Life" />
							+375(25) xxx xx xx
						</li>
					</ul>

					<p className={styles.paragraph}>
						По всем вопросам возникшим во время поездки обращаться можно
						<span> круглосуточно </span>по номерам ниже:
					</p>

					<ul className={styles['phone-numbers']}>
						<li>
							<img src="/images/icon_phone.png" alt="phone" title="Phone" />
							+375(17) xxx xx xx
						</li>
						<li>
							<img src="/images/icon_mts.png" alt="mts" title="MTS" />
							+375(29) xxx xx xx
						</li>
						<li>
							<img src="/images/icon_a1.png" alt="a1" title="A1" />
							+375(44) xxx xx xx
						</li>

						<li>
							<img src="/images/icon_life.png" alt="life" title="Life" />
							+375(25) xxx xx xx
						</li>
					</ul>

					<p className={styles.paragraph}>
						Предложения о сотрудничестве можно отправить нам на
						<span> email </span>ниже:
					</p>

					<p className={styles['email']}>
						<img src="/images/icon_email.png" alt="email" title="Email" />
						name.@gmail.com
					</p>
				</div>

				<ContactsForm />
			</div>
		</section>
	);
}

export default Contacts;
