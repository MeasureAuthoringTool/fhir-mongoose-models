const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitItemAdjudicationSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   reason : CodeableConceptSchema,
   amount : MoneySchema,
   value : Number,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitItemAdjudication' },
});

class ExplanationOfBenefitItemAdjudication extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemAdjudicationSchema);
    this._type = 'FHIR::ExplanationOfBenefitItemAdjudication';
  }
};


module.exports.ExplanationOfBenefitItemAdjudicationSchema = ExplanationOfBenefitItemAdjudicationSchema;
module.exports.ExplanationOfBenefitItemAdjudication = ExplanationOfBenefitItemAdjudication;
