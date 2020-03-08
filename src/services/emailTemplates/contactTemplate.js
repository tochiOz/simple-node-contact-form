module.exports = (contact) => {
	return `
    <html>
      <body>
      <p>From ${contact.name}</p>
        <div style="font-size: 20px; margin-top: 30px; font-family: 'cursive">
          <p>${contact.content}</p>
        </div>
      </body>
    </html>
  `;
};
