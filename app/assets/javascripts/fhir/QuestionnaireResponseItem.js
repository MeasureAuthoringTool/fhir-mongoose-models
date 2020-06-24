const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { QuestionnaireResponseItemAnswerSchema } = require('./QuestionnaireResponseItemAnswer');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireResponseItemSchema = BackboneElementSchemaFunction({
   linkId : String,
   definition : String,
   text : String,
   answer : [QuestionnaireResponseItemAnswerSchema],
   item : [QuestionnaireResponseItemSchema],
   fhirTitle: { type: String, default: 'QuestionnaireResponseItem' },
});

class QuestionnaireResponseItem extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseItemSchema);
    this._type = 'FHIR::QuestionnaireResponseItem';
  }
};


module.exports.QuestionnaireResponseItemSchema = QuestionnaireResponseItemSchema;
module.exports.QuestionnaireResponseItem = QuestionnaireResponseItem;
