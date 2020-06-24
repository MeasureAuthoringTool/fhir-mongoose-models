const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireItemOperatorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'QuestionnaireItemOperator' },
});

class QuestionnaireItemOperator extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemOperatorSchema);
    this._type = 'FHIR::QuestionnaireItemOperator';
  }
};


module.exports.QuestionnaireItemOperatorSchema = QuestionnaireItemOperatorSchema;
module.exports.QuestionnaireItemOperator = QuestionnaireItemOperator;
