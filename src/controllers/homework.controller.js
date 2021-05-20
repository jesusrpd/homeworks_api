import Homework from '../models/homework';

//Create homework
export const homeworkCreate = async (req, res)=>{
    const {name} = req.body;

    const newHomework = await Homework({name, date: new Date()});
    newHomework.save();
    res.status(200).json({message: 'Homework create'});
};