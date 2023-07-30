import dbConnect from "../../lib/mongodb";
import Announcements from "../../models/data";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    try {
      const query = {};
      let { SCRIP_CD, from, to, critAnnouncement } = req.query;

      if (SCRIP_CD) {
        SCRIP_CD = SCRIP_CD.split(",");
        query.SCRIP_CD = { $in: SCRIP_CD };
      }

      if (from && to) {
        query["NEWS_DT"] = { $gte: new Date(from), $lte: new Date(to) };
      }

      if (critAnnouncement == "true") {
        query.CRITICALNEWS = 1;
      }

      const result = await Announcements.find(query);
      res.send(result);
    } catch (e) {
      console.log(e);
    }
  }
}
