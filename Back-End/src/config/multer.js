//Libs
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { format } from "date-fns";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "../uploads");
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "dd-MM-yyyy_HH-mm-ss");
    const filename = `image_${formattedDate}${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

export default upload;
