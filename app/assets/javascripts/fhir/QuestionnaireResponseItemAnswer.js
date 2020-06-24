const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { QuantitySchema } = require('./Quantity');
const { QuestionnaireResponseItemSchema } = require('./QuestionnaireResponseItem');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireResponseItemAnswerSchema = BackboneElementSchemaFunction({
   valueBoolean : Boolean,
   valueDecimal : Number,
   valueInteger : Number,
   valueDate : FHIRDate,
   valueDateTime : DateTime,
   valueTime : DateTime,
   valueString : String,
   valueUri : String,
   valueAttachment : AttachmentSchema,
   valueCoding : CodingSchema,
   valueQuantity : QuantitySchema,
   valueReference : ReferenceSchema,
   item : [QuestionnaireResponseItemSchema],
   fhirTitle: { type: String, default: 'QuestionnaireResponseItemAnswer' },
});

class QuestionnaireResponseItemAnswer extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireResponseItemAnswerSchema);
    this._type = 'FHIR::QuestionnaireResponseItemAnswer';
  }
};


module.exports.QuestionnaireResponseItemAnswerSchema = QuestionnaireResponseItemAnswerSchema;
module.exports.QuestionnaireResponseItemAnswer = QuestionnaireResponseItemAnswer;
