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

const ExplanationOfBenefitTotalSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   amount : MoneySchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitTotal' },
});

class ExplanationOfBenefitTotal extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitTotalSchema);
    this._type = 'FHIR::ExplanationOfBenefitTotal';
  }
};


module.exports.ExplanationOfBenefitTotalSchema = ExplanationOfBenefitTotalSchema;
module.exports.ExplanationOfBenefitTotal = ExplanationOfBenefitTotal;
