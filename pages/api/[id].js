import dbConnect from "../../util/db";
import Model from "../../util/model";
import nc from "next-connect";

export default async function handlers(req, res) {
  const id = req.query.id;

  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const getData = await Model.findById(id);
        res.status(200).json({ message: "Done", data: getData });
      } catch (error) {
        res.status(400).json(error.message);
      }
      break;
  }
}
