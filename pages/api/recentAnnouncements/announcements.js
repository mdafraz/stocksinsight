import dbConnect from "../../../lib/mongodb";
import Announcements from "../../../models/data";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    try {
      const { d } = req.query;
      const day = new Date();
      const prevday = new Date();
      prevday.setDate(day.getDate() - Number(d));

      const result = await Announcements.find({
        NEWS_DT: { $gte: prevday, $lte: day },
      }).sort({ NEWS_DT: -1 });

      res.send(result);
    } catch (e) {
      console.log(e);
    }
  }
}
