
//@desc Auth user
//@route POST/api/users/login
//@access Public
export const authUser = async (req, res) => {
   res.json({ message: 'You are join' })
}

//GET - ПОЛУЧЕНИЕ
//POST - ЗАПИСЬ ДАННЫХ 
//PUT - ОБНОВЛЕНИЯ ДАННЫХ (СУЩНОСТИ)
//PATCH - МАЛЕНЬКИЕ МОМЕНТЫ PUT
//DELETE - УДАЛЕНИЕ