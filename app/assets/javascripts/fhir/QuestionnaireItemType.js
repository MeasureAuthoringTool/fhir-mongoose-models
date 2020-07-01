const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const QuestionnaireItemTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'QuestionnaireItemType' },
  _type: { type: String, default: 'FHIR::QuestionnaireItemType' },
});

class QuestionnaireItemType extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemTypeSchema);
    this.typeName = 'QuestionnaireItemType';
    this._type = 'FHIR::QuestionnaireItemType';
  }
}

module.exports.QuestionnaireItemTypeSchema = QuestionnaireItemTypeSchema;
module.exports.QuestionnaireItemType = QuestionnaireItemType;
