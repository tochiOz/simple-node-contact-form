'use strict';
module.exports = (sequelize, DataTypes) => {
	const Contact = sequelize.define(
		'Contact',
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			name: DataTypes.STRING,
			subject: DataTypes.STRING,
			email: DataTypes.STRING,
			content: DataTypes.STRING
		},
		{}
	);
	Contact.associate = function (models){
		// associations can be defined here
	};
	return Contact;
};
