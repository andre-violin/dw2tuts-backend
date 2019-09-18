const { Schema, model } = require("mongoose");

const TutoriaisSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    autor: {
      type: String,
      required: true
    },
    conteudo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Tutoriais", TutoriaisSchema);
