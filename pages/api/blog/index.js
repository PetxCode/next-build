import { getBlogs, createBlog } from "../../../util/action";
import dbConnect from "../../../util/db";

export default async function (req, res) {
  await dbConnect();
  try {
    switch (req.method) {
      case "GET":
        res.json(await getBlogs());
        break;

      case "POST":
        res.json(await createBlog(req.body));
        break;

      default:
        res.status(404).send("NO RESPONSE FOR THAT METHOD");
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}
