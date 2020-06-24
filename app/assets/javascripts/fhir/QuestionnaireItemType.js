const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireItemTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'QuestionnaireItemType' },
});

class QuestionnaireItemType extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemTypeSchema);
    this._type = 'FHIR::QuestionnaireItemType';
  }
};


module.exports.QuestionnaireItemTypeSchema = QuestionnaireItemTypeSchema;
module.exports.QuestionnaireItemType = QuestionnaireItemType;
