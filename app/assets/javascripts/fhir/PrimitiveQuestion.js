const mongoose = require('mongoose/browser');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveStringSchemaFunction } = require('./PrimitiveString');

const PrimitiveQuestionSchema = PrimitiveStringSchemaFunction({
  typeName: { type: String, default: 'PrimitiveQuestion' },
  _type: { type: String, default: 'FHIR::PrimitiveQuestion' },
});

class PrimitiveQuestion extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveQuestionSchema);
    this.typeName = 'PrimitiveQuestion';
    this._type = 'FHIR::PrimitiveQuestion';
  }
}

module.exports.PrimitiveQuestionSchema = PrimitiveQuestionSchema;
module.exports.PrimitiveQuestion = PrimitiveQuestion;
