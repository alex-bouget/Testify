import Database from "../../database";


export default function handler(req, res) {
    res.status(200).json(Database.file[req.query.id]);
}