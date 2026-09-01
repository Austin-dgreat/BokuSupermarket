const multer = require('multer');
const {cloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('../Config/cloudinary');

const storage = new cloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "bokusupermarket",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  }
});

const upload = multer({ storage: storage });

module.exports = upload;