const Tutoriais = require("../models/Tutoriais");
module.exports = {
  async store(req, res) {
    const tutorial = await Tutoriais.create(req.body);
    return res.json(tutorial);
  },
  async list(req, res) {
    const tutoriais = await Tutoriais.find({});
    return res.json(tutoriais);
  },
  async index(req, res) {
    const tutorial = await Tutoriais.findOne({ _id: req.params.id });
    return res.json(tutorial);
  },
  async update(req, res) {
    const tutorial = await Tutoriais.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(tutorial);
  },
  async destroy(req, res) {
    await Tutoriais.deleteOne({ _id: req.params.id });
    return res.json({
      message: "Exclusão realizada com sucesso!"
    });
  }
};
