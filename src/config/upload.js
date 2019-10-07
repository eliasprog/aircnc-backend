/**
 * Config to use Multipart Form with Node.
 */

 //imports
const multer = require('multer');
const path   = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname); //extension.
            const name = path.basename(file.originalname, ext); //filename.
            cb(null, `${name}-${Date.now()}${ext}`); //Mount the full name with extension.
        }
    })
};
