const uuidv4 = require('uuid/v4')
/*
	Шаблон создания нового пользователя
*/
export const createUser = ({login = "", name = "", familyname = "", password = ""} = {})=>(
	{
		id:uuidv4(),
		login,
		name,
		familyname,
		password		
	}
)
/*
	Шаблон создания характеристик ошибки
*/
export const createErrorProps = ({short_desc = "", full_desc = "", username = "", status = "", priority = "", seriousness = "", login=""} = {}) =>(
	{
		id:uuidv4(),
		date:Date.now(),
		short_desc,
		full_desc,
		username,
		status,
		priority,
		seriousness,
		history:[{
			date:Date.now(),
			action: "Ввод",
			comment: "Ошибка создана",
			user:login
		}]
	}
)
/*
	Шаблон создания истории ошибки
*/
export const createErrorHistory = ({action = "", comment = "", user = ""} = {}) =>(
		{
			date:Date.now(),
			action,
			comment,
			user
		}
	)
/*
	Фнкция возвращает текущее время
*/
export const getTime = (date) => {
	return (date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + " " + date.getHours() +":" +("0"+date.getMinutes()).slice(-2))
}
/*
	Экспорт необходимых функций
*/
module.export = {
	createUser,
	createErrorHistory,
	createErrorProps,
	getTime
}