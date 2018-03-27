var App = React.createClass({
	render: function() {
		return (
			<div className={'app'}>
				<ContactForm contact={contactForm}/>
				<Contacts items={contacts}/>
			</div>
		);
	}
});

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var contacts = [
	{
		id: 1,
		firstName: 'John',
		lastName: 'Walker',
		email: 'g@ds.com'
	},
	{
		id: 3,
		firstName: 'Mary',
		lastName: 'Poppins',
		email: 'g@ds.com'
	},
	{
		id: 4,
		firstName: 'Jessica',
		lastName: 'Jones',
		email: 'g@ds.com'
	},
	{
		id: 5,
		firstName: 'Franz',
		lastName: 'Ferdinand',
		email: 'g@ds.com'
	}
];

