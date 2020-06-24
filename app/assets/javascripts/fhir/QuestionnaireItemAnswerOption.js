const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireItemAnswerOptionSchema = BackboneElementSchemaFunction({
   valueInteger : Number,
   valueDate : FHIRDate,
   valueTime : DateTime,
   valueString : String,
   valueCoding : CodingSchema,
   valueReference : ReferenceSchema,
   initialSelected : Boolean,
   fhirTitle: { type: String, default: 'QuestionnaireItemAnswerOption' },
});

class QuestionnaireItemAnswerOption extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemAnswerOptionSchema);
    this._type = 'FHIR::QuestionnaireItemAnswerOption';
  }
};


module.exports.QuestionnaireItemAnswerOptionSchema = QuestionnaireItemAnswerOptionSchema;
module.exports.QuestionnaireItemAnswerOption = QuestionnaireItemAnswerOption;
