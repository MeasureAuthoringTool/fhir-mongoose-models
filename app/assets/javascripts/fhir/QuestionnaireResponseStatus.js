const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const QuestionnaireResponseStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'QuestionnaireResponseStatus' },
  _type: { type: String, default: 'FHIR::QuestionnaireResponseStatus' },
});

class QuestionnaireResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseStatusSchema);
    this.typeName = 'QuestionnaireResponseStatus';
    this._type = 'FHIR::QuestionnaireResponseStatus';
  }
}

module.exports.QuestionnaireResponseStatusSchema = QuestionnaireResponseStatusSchema;
module.exports.QuestionnaireResponseStatus = QuestionnaireResponseStatus;
