import Database from '../../database';

export default function handler(req, res) {
    const { id } = req.query;
    const search = Database.search(id);
    res.status(200).json(search);

}