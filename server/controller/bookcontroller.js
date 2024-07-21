import Book from '../model/boook.js';

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
        // console.log(book);
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
}



import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Filename in the destination folder
    }
});

// Create multer instance with configured options
const upload = multer({ storage: storage });


  
export const createBook = (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ message: 'File upload error' });
        } else if (err) {
            return res.status(500).json({ message: err.message });
        }
        
        console.log(req.file);

        const newBook = new Book({
            name: req.body.name,
            titlle: req.body.titlle,
            price: req.body.price,
            category1: req.body.category1,
            image: req.file.path
        });

        // Save the book
        newBook.save()
            .then(() => {
                console.log('Book inserted successfully');
                return res.status(200).send('Book inserted successfully');
            })
            .catch((error) => {
                console.error('Error occurred while saving book:', error);
                return res.status(500).send('Error occurred while saving book.');
            });
    });
};




// export const createBook = async (req, res) => {
//     try {
//         const { name, title, price, category1, image } = req.body;
//         const newBook = new Book({
//             name,
//             title,
//             price,
//             category1,
//             image
//         });
//         await newBook.save();
//         res.status(201).json(newBook);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// }
