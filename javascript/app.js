const focus = () => {
	document.getElementsByName('userInput')[0].focus();
}

const promise = () => {
    const promise = fetch('./api.php')
        .then(response => response.json())
        .then(json => {
            const userInput = document.getElementsByName('userInput')[0];
            	let status = false,
                	data = [];
            if (userInput.value !== '') {

				switch (userInput.value) {
					case '+':
						status = true;
						data = json.data;
						break;

					default:
						for (let _counter = 0; _counter < json.data.length; _counter++) {
							const include = json.data[_counter].name.includes(userInput.value)
												|| json.data[_counter].name.toLowerCase().includes(userInput.value)
												|| json.data[_counter].name.toUpperCase().includes(userInput.value);

							switch (include) {
								case true:
									data.push(json.data[_counter]);
									status = true;
									break;
								default:
									// data-should-be-empty
									// status-is-false-by-default
									break;
							}
						}

				}

                removeExistingNodes(data, status);
            } else if (userInput.value === '') {
				removeExistingNodes(data, 'reset');
            }
    })
        .catch(error => console.log(error));
}

const removeExistingNodes = (data, status) => {
    const node = document.getElementsByClassName('outputParent')[0],
			container = document.getElementsByClassName('container')[0];
    if (!node) {
        initNodes(data, status);
    } else {
		container.removeChild(node);
        initNodes(data, status);
    }
}

const initNodes = (data, status) => {
	const parent = buildNodes('parent');
	switch (status) {
		case true:
			for (let _counter = 0; _counter < data.length; _counter++) {
				const child = buildNodes('child', parent);
				child.innerHTML = data[_counter].name + ' --> ' +
				data[_counter].department + ' department <br/>';
			}
			break;
		case false:
			parent.innerHTML = ':( not found';
			break;
		case 'reset':
			parent.innerHTML = 'waiting';
			break;
		default:
		// data-is-removeExistingNodes-empty
	}
}

const buildNodes = (type, parent) => {
	switch (type) {
		case 'parent':
			const parentNode = document.createElement("div"),
					container = document.getElementsByClassName('container')[0];

			parentNode.setAttribute("class", "outputParent");
			container.appendChild(parentNode);
			return parentNode;
		case 'child':
			let childNode = document.createElement("p");
			childNode.setAttribute("class", "outputChild");
			parent.appendChild(childNode);
			return childNode;
		default:
			return;
	}
}
