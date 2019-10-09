const { Schema, model } = require("mongoose")

const TutoriaisSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    autor: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    conteudo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)
module.exports = model("Tutoriais", TutoriaisSchema)
