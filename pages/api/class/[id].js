import dbConnect from "../../../util/db";
import Model from "../../../util/model";

export default async function handlers(req, res) {
  await dbConnect();

  const { method } = req;
  const id = req.query.id;

  try {
    switch (method) {
      case "GET":
        const newData = await Model.findById(id);
        res.status(200).json(newData);
        break;

      case "PATCH":
        const updateData = await Model.findByIdAndUpdate(id, req.body);
        res.status(200).json(updateData);

        break;

      case "DELETE":
        const postData = await Model.findByIdAndRemove(id);
        res.status(200).json({ message: "deleted" });

        break;
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
