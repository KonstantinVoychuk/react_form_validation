import React from 'react';
import { useForm } from 'react-hook-form';
import './UserForm.css';


function UserForm() {

	const { register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur" });



	const onSubmit = (date) => {
		alert('Сформирован объект: "date"')
		console.log(date);
		reset();
	}

let cls = 'submit'
if(isValid) {cls = 'submit-active'}


	return (
		<div className='user-form'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<section className='full-name'>
					<div>
						<h4 className='title'>Full Name</h4>
						<input
							{...register('firstName',
								{
									required: ' * field is required',
									maxLength:
									{
										value: 30,
										message: 'maximum length 30 characters'
									}
								}
							)}
						/>
						<div className='err'>
							<label>First Name</label>
							<div className='err-messege'>{errors.firstName && <p>{errors.firstName.message || 'Erorrs'}</p>}</div>
						</div>
					</div>
					<div>
						<h4>&nbsp;</h4>
						<input
							{...register('lastName',
								{
									required: ' * field is required',
									maxLength:
									{
										value: 30,
										message: 'maximum length 30 characters'
									}
								}
							)}
						/>
						<div className='err'>
							<label>Last Name</label>
							<div className='err-messege'>{errors.lastName && <p>{errors.lastName.message || 'Erorrs'}</p>}</div>
						</div>
					</div>
				</section>
				<section className='address'>
					<div>
						<h4 className='title'>Address</h4>
						<input
							{...register('streetAddress',
								{
									required: ' * field is required',
									maxLength:
									{
										value: 100,
										message: 'maximum length 100 characters'
									},
									minLength:
									{
										value: 5,
										message: 'minimum length 5 characters'
									},
								}
							)}
						/>
						<div className='err'>
							<label>Street Address</label>
							<div className='err-messege'>{errors.streetAddress && <p>{errors.streetAddress.message || 'Erorrs'}</p>}</div>
						</div>
					</div>
					<div>
						<h4>&nbsp;</h4>
						<input
							{...register('streetAddressLine2',
								{
									required: false,
									maxLength:
									{
										value: 100,
										message: 'maximum length 100 characters'
									},

								}
							)}
						/>
						<div className='err'>
							<label>Street Address Line 2</label>
							<div className='err-messege'>{errors.streetAddressLine2 && <p>{errors.streetAddressLine2.message || 'Erorrs'}</p>}</div>
						</div>
					</div>
					<div className="city-state">
						<div>
							<h4>&nbsp;</h4>
							<input
								{...register('city',
									{
										required: ' * field is required',
										maxLength:
										{
											value: 30,
											message: 'maximum length 30 characters'
										},
										minLength:
										{
											value: 3,
											message: 'minimum length 3 characters'
										},
									}
								)}
							/>
							<div className='err'>
								<label>City</label>
								<div className='err-messege'>{errors.city && <p>{errors.city.message || 'Erorrs'}</p>}</div>
							</div>
						</div>
						<div>
							<h4>&nbsp;</h4>
							<input
								{...register('stateProvince',
									{
										required: ' * field is required',
										maxLength:
										{
											value: 30,
											message: 'maximum length 30 characters'
										},
										minLength:
										{
											value: 3,
											message: 'minimum length 3 characters'
										},
									}
								)}
							/>
							<div className='err'>
								<label>State / Province</label>
								<div className='err-messege'>{errors.stateProvince && <p>{errors.stateProvince.message || 'Erorrs'}</p>}</div>
							</div>
						</div>
					</div>
					<div>
						<h4>&nbsp;</h4>
						<input placeholder='00000-0000'
							{...register('postalZipCode',
								{
									required: ' * field is required',
									pattern:  /(^\d{5}$)|(^\d{5}-\d{4}$)/,
								}
							)}
						/>
						<div className='err'>
							<label>Postal / Zip Code</label>
							<div className='err-messege'>{errors.postalZipCode && <p>{errors.postalZipCode.message || ' * not correct format'}</p>}</div>
						</div>
					</div>
				</section>
				<section className='tell'>
					<div>
						<h4 className='title'>Phone Number</h4>
						<input type="tel" placeholder='(000) 000-0000'
							{...register('tell',
								{
									required: ' * field is required',
									maxLength:
									{
										value: 12,
										message: 'maximum length 12 characters'
									},
									minLength:
									{
										value: 6,
										message: 'minimum length 6 characters'
									},
								}
							)}
						/>
						<div className='err'>
							<label>&nbsp;</label>
							<div className='err-messege'>{errors.tell && <p>{errors.tell.message || 'Erorrs'}</p>}</div>
						</div>
					</div>
				</section>
				<section className='email'>
					<div>
						<h4 className='title-email'>E-mail</h4>
						<input type="tel" placeholder='ex: email@yahoo.com'
							{...register('email',
								{
									required: false,
									pattern: /^\S+@\S+$/i,
								}
							)}
						/>
						<div className='err'>
							<label>example@example.com</label>
							<div className='err-messege'>{errors.email && <p>{errors.email.message || ' * not correct format'}</p>}</div>
						</div>
					</div>
				</section>
					<input className={cls} type="submit" disabled={!isValid}/>
				
			</form>
		</div>
	);

}

	
export default UserForm;