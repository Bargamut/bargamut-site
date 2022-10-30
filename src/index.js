const getSayHiElement = () => {
	const element = documen.createElement('div');

	element.innerHTML = "Hello, Webpack and bargamut!";

	return element;
};

document.body.appendChild(getSayHiElement());
