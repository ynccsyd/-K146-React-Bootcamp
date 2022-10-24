import React, { useState, useEffect } from "react";
import Button from "../button";
import classes from "./style.module.css";

const url = "https://jsonplaceholder.typicode.com/todos";


 //  To hold the actual data
const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [selectedTodo, setSelectedTodo] = useState();
	const [totalPage, setTotalPage] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);  // User is currently on this page
	const [changeValue, setChangeValue] =useState('');


	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((todos) => {
				setTodos(todos);
				
				//Calculate the number of pages
				setTotalPage(Math.ceil(todos.length/15));
		
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const renderThead = () => {
		return (
			<thead>
				<tr>
					<th>id</th>
					<th>başlık</th>
					<th>durum</th>
					<th>Aksiyon</th>
				</tr>
			</thead>
		);
	};


	const remove = (todo) => {
		if (window.confirm("Silmek üzerisiniz emin misiniz")) {
			setTodos(prev => {
				return prev.filter(x => x.id !== todo.id)
			})
		}
	};

	const edit = (todo) => {
		setSelectedTodo(todo);
	};


	const handleKaydet = () => {
		const newTodos = todos.map((todo) => {
			if (todo.id === selectedTodo.id) {
				return { ...todo, title: changeValue };
			} else {
				return todo;
			}
		});
		setTodos(newTodos);
	};

// Todos to be displayed on the current page
	const getDataWithPage = (page) => {
		return todos.slice((page - 1) * 10, page * 10); 
	};


	const renderBody = () => {
		return (
			<tbody>
				{getDataWithPage(currentPage).map((todo, index) => {
					return (
						<tr key={index}>
							<td>{todo.id}</td>
							<td>{todo.title}</td>
							<td>{todo.completed ? "Tamamlandı" : "Yapılacak"}</td>
							<td>
								<Button
                  className={`btn btn-sm btn-danger ${classes.actionButton} `}
                  onClick={() => remove(todo)}
								>
									Sil
								</Button>
								<Button onClick={() => edit(todo)} className="btn btn-sm btn-warning">Düzenle</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		);
	};

// set the edit button
	const renderEditForm = () => {
		return (
			<div>
				<input type={"text"} onChange={(e) => setChangeValue(e.target.value)} />
				<inpu type="check" />
				<Button onClick={handleKaydet}>Kaydet</Button>
				<Button onClick={() => setSelectedTodo(undefined)}>Vazgeç</Button>
			</div>
		)
	};


// Inside thecomponent, create an array that holds all the page numbers from 1 to pages

	return (
		<div className={`${classes.container} container`}>
			{selectedTodo && renderEditForm()}
			<table className="table">
				{renderThead()}
				{renderBody()}
			</table>
			<div className="d-flex justify-content-center">
				<Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} >
					Prev
				</Button>
				
				{Array.from({ length: totalPage }, (v, i) => i  + 1).map((page) => (
					<Button className = { page === currentPage ? 'btn btn-primary' : 'btn btn-outline-primary'}
						onClick={() => setCurrentPage(page)}
					>
						{page}

					</Button>

				))}

				<Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage}>
					Next
				</Button>

			</div>

		</div>
	);
};

export default TodoList;
