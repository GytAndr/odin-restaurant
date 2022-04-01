function loadFirstPage() {
	const content = document.getElementsByClassName("content")[0];
	document.body.classList.add("center");
	document.getElementsByClassName("content")[0].classList.add("center");
	//top nav
	let topNav = Object.assign(document.createElement("div"), {
		className: "top-nav",
	});
	content.appendChild(topNav);
	//menuBtn-first
	let menuBtn1 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn1);
	menuBtn1.appendChild(
		Object.assign(document.createElement("button"), {
			id: "first",
			className: "opened",
			innerText: "Page 1",
		})
	);
	//menuBtn-second
	let menuBtn2 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn2);
	menuBtn2.appendChild(
		Object.assign(document.createElement("button"), {
			id: "second",
			innerText: "Page 2",
		})
	);
	//menuBtn-third
	let menuBtn3 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn3);
	menuBtn3.appendChild(
		Object.assign(document.createElement("button"), {
			id: "third",
			innerText: "Page 3",
		})
	);
	//main-box
	let mainBox = Object.assign(document.createElement("div"), {
		className: "main-box center",
	});
	content.appendChild(mainBox);
	//mainSideImg
	let mainSideImg = Object.assign(document.createElement("div"), {
		className: "main-side-img",
	});
	mainBox.appendChild(mainSideImg);
	//adds image
	let Img = document.createElement("img");
	Img.setAttribute("src", "./assets/first.svg");
	mainSideImg.appendChild(Img);
	//main text div
	let mainText = Object.assign(document.createElement("div"), {
		className: "main-text",
	});
	mainBox.appendChild(mainText);
	//h3 header
	mainText.appendChild(
		Object.assign(document.createElement("h4"), {
			innerText: "Page One with important stuff",
		})
	);
	//p1 paragraph text
	mainText.appendChild(
		Object.assign(document.createElement("p"), {
			innerText:
				"Kitty, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ex.",
		})
	);
	//p2 paragraph text
	mainText.appendChild(
		Object.assign(document.createElement("p"), {
			innerText:
				"Miau ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque voluptas nemo dolores minus fugiat.",
		})
	);
}

function loadSecondPage() {
	const content = document.getElementsByClassName("content")[0];
	document.body.classList.add("center");
	document.getElementsByClassName("content")[0].classList.add("center");
	//top nav
	let topNav = Object.assign(document.createElement("div"), {
		className: "top-nav",
	});
	content.appendChild(topNav);
	//menuBtn-first
	let menuBtn1 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn1);
	menuBtn1.appendChild(
		Object.assign(document.createElement("button"), {
			id: "first",
			innerText: "Page 1",
		})
	);
	//menuBtn-second
	let menuBtn2 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn2);
	menuBtn2.appendChild(
		Object.assign(document.createElement("button"), {
			id: "second",
			className: "opened",
			innerText: "Page 2",
		})
	);
	//menuBtn-third
	let menuBtn3 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn3);
	menuBtn3.appendChild(
		Object.assign(document.createElement("button"), {
			id: "third",
			innerText: "Page 3",
		})
	);
	//main-box
	let mainBox = Object.assign(document.createElement("div"), {
		className: "main-box center",
	});
	content.appendChild(mainBox);
	//mainSideImg
	let mainSideImg = Object.assign(document.createElement("div"), {
		className: "main-side-img",
	});
	mainBox.appendChild(mainSideImg);
	//adds image
	let Img = document.createElement("img");
	Img.setAttribute("src", "./assets/second.svg");
	mainSideImg.appendChild(Img);
	//main text div
	let mainText = Object.assign(document.createElement("div"), {
		className: "main-text",
	});
	mainBox.appendChild(mainText);
	//h3 header
	mainText.appendChild(
		Object.assign(document.createElement("h4"), {
			innerText: "Page Two with more important stuff",
		})
	);
	//p1 paragraph text
	mainText.appendChild(
		Object.assign(document.createElement("p"), {
			innerText:
				"Note, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ex.",
		})
	);
	//p2 paragraph text
	mainText.appendChild(
		Object.assign(document.createElement("p"), {
			innerText:
				"Note ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque voluptas nemo dolores minus fugiat.",
		})
	);
}
function loadThirdPage() {
	const content = document.getElementsByClassName("content")[0];
	document.body.classList.add("center");
	document.getElementsByClassName("content")[0].classList.add("center");
	//top nav
	let topNav = Object.assign(document.createElement("div"), {
		className: "top-nav",
	});
	content.appendChild(topNav);
	//menuBtn-first
	let menuBtn1 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn1);
	menuBtn1.appendChild(
		Object.assign(document.createElement("button"), {
			id: "first",
			innerText: "Page 1",
		})
	);
	//menuBtn-second
	let menuBtn2 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn2);
	menuBtn2.appendChild(
		Object.assign(document.createElement("button"), {
			id: "second",
			innerText: "Page 2",
		})
	);
	//menuBtn-third
	let menuBtn3 = Object.assign(document.createElement("div"), {
		className: "menuBtn",
	});
	topNav.appendChild(menuBtn3);
	menuBtn3.appendChild(
		Object.assign(document.createElement("button"), {
			id: "third",
			className: "opened",
			innerText: "Page 3",
		})
	);
	//main-box
	let mainBox = Object.assign(document.createElement("div"), {
		className: "main-box center",
	});
	content.appendChild(mainBox);
	//mainSideImg
	let mainSideImg = Object.assign(document.createElement("div"), {
		className: "main-side-img",
	});
	mainBox.appendChild(mainSideImg);
	//adds image
	let Img = document.createElement("img");
	Img.setAttribute("src", "./assets/third.svg");
	mainSideImg.appendChild(Img);
	//main text div
	let mainText = Object.assign(document.createElement("div"), {
		className: "main-text",
	});
	mainBox.appendChild(mainText);
	//h3 header
	mainText.appendChild(
		Object.assign(document.createElement("h4"), {
			innerText: "Page Three with important stuff",
		})
	);
	//p1 paragraph text
	mainText.appendChild(
		Object.assign(document.createElement("p"), {
			innerText:
				"Kitty, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ex.",
		})
	);
	//p2 paragraph text
	mainText.appendChild(
		Object.assign(document.createElement("p"), {
			innerText:
				"Miau ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque voluptas nemo dolores minus fugiat.",
		})
	);
}

function render(key) {
	switch (key) {
		case "first":
			reset();
			loadFirstPage();
			break;
		case "second":
			reset();
			loadSecondPage();
			break;

		case "third":
			reset();
			loadThirdPage();
			break;

		default:
			reset();
			loadFirstPage();
			break;
	}
}

function reset() {
	const content = document.getElementsByClassName("content")[0];
	content.innerHTML = "";
}
//Run page script
render();

//event listeners
document
	.getElementById("first")
	.addEventListener("click", () => render("first"));
document
	.getElementById("second")
	.addEventListener("click", () => render("second"));
document
	.getElementById("third")
	.addEventListener("click", () => render("third"));
