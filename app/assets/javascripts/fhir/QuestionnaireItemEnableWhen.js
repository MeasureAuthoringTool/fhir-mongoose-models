const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { QuantitySchema } = require('./Quantity');
const { QuestionnaireItemOperatorSchema } = require('./QuestionnaireItemOperator');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireItemEnableWhenSchema = BackboneElementSchemaFunction({
   question : String,
   operator : QuestionnaireItemOperatorSchema,
   answerBoolean : Boolean,
   answerDecimal : Number,
   answerInteger : Number,
   answerDate : FHIRDate,
   answerDateTime : DateTime,
   answerTime : DateTime,
   answerString : String,
   answerCoding : CodingSchema,
   answerQuantity : QuantitySchema,
   answerReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'QuestionnaireItemEnableWhen' },
});

class QuestionnaireItemEnableWhen extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireItemEnableWhenSchema);
    this._type = 'FHIR::QuestionnaireItemEnableWhen';
  }
};


module.exports.QuestionnaireItemEnableWhenSchema = QuestionnaireItemEnableWhenSchema;
module.exports.QuestionnaireItemEnableWhen = QuestionnaireItemEnableWhen;
