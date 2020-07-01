const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const QuestionnaireItemOperatorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'QuestionnaireItemOperator' },
  _type: { type: String, default: 'FHIR::QuestionnaireItemOperator' },
});

class QuestionnaireItemOperator extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemOperatorSchema);
    this.typeName = 'QuestionnaireItemOperator';
    this._type = 'FHIR::QuestionnaireItemOperator';
  }
}

module.exports.QuestionnaireItemOperatorSchema = QuestionnaireItemOperatorSchema;
module.exports.QuestionnaireItemOperator = QuestionnaireItemOperator;
