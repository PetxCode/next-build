import dbConnect from "../../../util/db";
import Model from "../../../util/model";
import multer from "multer";
import nc from "next-connect";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage }).single("pix");

const handlers = nc()
  .get(async (req, res) => {
    const newData = await Model.find({});
    res.status(200).json(newData);
  })
  .post(upload, async (req, res) => {
    const postData = await Model.create(req.body);
    res.status(200).json(postData);
  });

export default handlers;

// export default async function handlers(req, res) {
//   await dbConnect();

//   const { method } = req;

//   try {
//     switch (method) {
//       case "GET":
//         const newData = await Model.find({});
//         res.status(200).json(newData);
//         break;

//       case "POST":
//         const postData = await Model.create(req.body);
//         res.status(200).json(postData);

//         break;
//     }
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// }
