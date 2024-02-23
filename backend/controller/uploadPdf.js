
const multer = require("multer");
const path = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
        // Uploads is the Upload_folder_name
        cb(null, "Pdfs");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".pdf");
    },
});

const maxSize = 10 * 1000 * 1000;

exports.uploadPdf = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        var filetypes = /pdf/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(
            "Error: File upload only supports the " +"following filetypes - " +filetypes
        );
    },
});

