import multer from 'multer';
import path from 'path';

const PUBLIC_DIR = path.join(__dirname, '../public');
const UPLOAD_DIR = path.join(PUBLIC_DIR, 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, UPLOAD_DIR);
    },
    filename: (req, file, callback) => {
        const id = Math.random().toString();
        callback(null, id + path.extname(file.originalname));
    },
});

export default multer({ storage });
