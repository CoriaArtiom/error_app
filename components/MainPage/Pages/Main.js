import React, { Component } from 'react';
import {Table, thead, tr, tbody, td, Container, h1, ListGroup, Alert} from 'react-bootstrap';

export default class Main extends Component {
	
	render() {	

		return (
			<Container>
			<h2>
    			Добро пожаловать в приложение "Система учета ошибок"
  			</h2>
  			<p> На данной странице приведено описание веб-приложения. В верхней части приложения находится навигационная панель.
  			<br/>Навигационная панель содержит следующие ссылки:</p>
				<ul>
				    <li><strong>Система учета ошибок:</strong> ссылка на текущую страницу</li>
				    <li><strong>Список ошибок:</strong> ссылка на страницу со списком ошибок в базе</li>
				    <li><strong>Создать новую ошибку:</strong> ссылка на страницу создание новой ошибки</li>
				    <li><strong>Список пользователей:</strong> ссылка на страницу со списком пользователей в базе</li>
				    <li><strong>Добавить пользователя:</strong> ссылка на страницу регистрации нового пользователя</li>
				    <li><strong>Выход:</strong> выход из приложения и возвращение на страницу авторизации</li>
				</ul>
			<p> На странице со списком ошибок приведена таблица с информацией о каждой ошибке и ссылкой "редактировать" на 
			страницу изменения параметров ошибки. Также присутствует 2 кнопки для сортировки таблицы по представленным критериям.</p>
  			<p>Страница изменения параметров ошибки содержит детальную информацию об ошибке, выплывающее меню изменения параметров ошибки, 
  			таблицу, в которой отражена история изменения ошибки. Изменения статуса ошибки производится в соответствии с представленным в тестовом задании циклом жизни ошибки.
  			При присваивании ошибке статуса "Закрытая", изменение статуса более недоступно.</p>	
  			<p> Страница создания новой ошибки представляет пользователю форму для заполнения критериев ошибки.
  			При создании новой ошибки, статус, пользователь, дата, присваиваются автоматически а так же создается история ошибки, отражающая ее начало.</p>
  			<Alert variant="warning">
			   	При вводе некорректных данных система оповещения об ошибках в виде всплывающих Alert'ов оповестит пользователя.
			</Alert>
  			<p>Страница списка пользователей содержит таблицу с данными пользователй, зарегистрированными в системе.</p>
  			<p>Страница добавления нового пользователя содержит форму для заполнения параметров нового пользователя. Для входа в систему используется Login.</p>
  			<p>Кнопка "Выход" используется для выода текущего пользователя из приложения и адресует на страницу авторизации.</p>
 			<p>База данных приложения организована через использование Local Storage.</p> 			
			</Container>
		);
	}
}