import { Request, Response } from 'express';
import data from '../data';

const getPeople = (req: Request, res: Response) => {
    res.json({ message: 'Success', data });
};

const getPeopleById = (req: Request, res: Response) => {
    const id: string = req.params.id;
    const person = data.find((row) => row.id === parseInt(id));

    if (person) {
        res.json({ message: 'Success', data: person });
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
};

const createPeople = (req: Request, res: Response) => {
    const { name, username, email } = req.body;
    const newPerson = {
        id: data.length + 1,
        name,
        username,
        email,
    };
    data.push(newPerson);
    res.json({ message: 'Person created successfully', data: newPerson });
};

const deleteData = (req: Request, res: Response) => {
    const id: string = req.params.id;
    const index = data.findIndex((row) => row.id == parseInt(id));

    if (index !== -1) {
        data.splice(index, 1);
        res.json({ message: 'Data deleted successfully' });
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
};


const uploadImagePeople = (req: Request, res: Response) => {
    if (req.file && req.file.filename) {
        const url = `/uploads/${req.file.filename}`;
        res.status(200).json({ message: 'Uploaded!', url });
    } else {
        res.status(400).json({ message: 'No file uploaded' });
    }

};


export { getPeople, getPeopleById, createPeople, deleteData, uploadImagePeople };
