import dbConnect from "../../../util/db";
import Model from "../../../util/model";
import moment from "moment";
import fs from "fs";
import form from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const timeStamp = moment().format("DD-MM-YYYY");

  fs.mkdir(`./public/${timeStamp}`, { recursive: true }, (err) =>
    console.log(err)
  );

  const myForm = form({
    multiples: true,
    uploadDir: `./upload/${timeStamp}`,
  });

  myForm.on("fileBegin", (name, file) => {
    file.filepath = file.join(`/public/${timeStamp}`, slugify(file.name));
  });
};
