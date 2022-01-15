import dbConnect from "../../util/db";
import Model from "../../util/model";
// import nc from "next-connect"

export default async function handlers(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const newData = await Model.find();
        res.status(200).json(newData);
      } catch (error) {
        res.status(400).json(error.message);
      }
      break;

    case "POST":
      try {
        const newData = await Model.create(req.body);
        res.status(200).json(newData);
      } catch (error) {
        res.status(400).json(error.message);
      }
      break;
  }
}
