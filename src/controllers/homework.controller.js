import Homework from '../models/homework';

//Create homework
export const homeworkCreate = async (req, res)=>{
    const {name} = req.body;

    const newHomework = await Homework({
        name, 
        date: new Date(),
        user: req.id
    });
    await newHomework.save();
    res.status(200).json(newHomework);
};

//Get homework
export const homeworksGet = async (req, res)=>{
    const homeworks = await Homework.find({user: req.id});
    res.status(200).json(homeworks);
};

//Delete homework 
export const homeworkDelete = async (req, res)=>{
    await Homework.findOneAndDelete({_id: req.params.id});
    const homeworks = await Homework.find({user: req.id});
    res.status(200).json(homeworks);
};