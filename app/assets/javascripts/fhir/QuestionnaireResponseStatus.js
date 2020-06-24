const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireResponseStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'QuestionnaireResponseStatus' },
});

class QuestionnaireResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseStatusSchema);
    this._type = 'FHIR::QuestionnaireResponseStatus';
  }
};


module.exports.QuestionnaireResponseStatusSchema = QuestionnaireResponseStatusSchema;
module.exports.QuestionnaireResponseStatus = QuestionnaireResponseStatus;
