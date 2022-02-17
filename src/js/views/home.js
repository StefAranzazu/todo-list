import React, { useState } from "react";

export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [todo, setTodo] = useState([]);
	let [counter, setCounter] = useState(0);
	const addTodo = text => {
		let newTodo = [...todo, text];
		setTodo(newTodo);
	};
	const handleKey = event => {
		if (event.key === "Enter" && inputValue !== " " && inputValue !== "") {
			addTodo(inputValue);
			setCounter(counter + 1);
			setInputValue("");
		}
	};

	const DeleteItems = indexItem => {
		setTodo(prevState => prevState.filter((t, index) => index !== indexItem));
		setCounter(counter - 1);
	};

	return (
		<>
			<div className="container-fluid ">
				<div className="d-flex justify-content-center todo">todos</div>

				<input
					onChange={e => setInputValue(e.target.value)}
					onKeyPressCapture={e => handleKey(e)}
					type="text"
					size="72"
					value={inputValue}
					placeholder="What need to be done?"
				/>

				<div>
					<ul>
						{todo.map((t, index) => (
							<li key={index} className="list-group-item index">
								{t}
								<button className="btn DelItem" onClick={() => DeleteItems(index)}>
									<i className="fas fa-times" />
								</button>
							</li>
						))}
						<li className="list-group-item">
							{"" + (counter == 0 ? "No tasks, add a task" : counter + " items left")}
						</li>
					</ul>
				</div>
			<div className="d-flex justify-content-center finalbut">
					{counter == 0 ? (
						<p>Nothing to delete</p>
					) : (
						<p>You have some things to do</p>
					)}
				</div>
			</div>
		</>
	);
}
