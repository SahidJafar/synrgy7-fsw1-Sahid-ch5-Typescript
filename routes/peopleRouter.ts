import { Router, Request, Response, NextFunction } from 'express';
import { getPeople, getPeopleById, createPeople, deleteData, uploadImagePeople} from '../service/peopleService';
import upload from '../middlewares/uploadHandler';


const router = Router();


const idChecker = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const newId = +id;

    if (newId > 0) {
        next(); // Lanjutkan jika ID valid
    } else {
        res.status(400).json({ message: 'ID Tidak Valid' });
    }
};


router.get('/', getPeople);
router.get('/:id', idChecker, getPeopleById);
router.post('/create', createPeople);
router.delete('/delete/:id', idChecker, deleteData);
router.post('/upload', upload.single('image'), uploadImagePeople);


export default router;