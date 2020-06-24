const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitPayeeSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   party : ReferenceSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitPayee' },
});

class ExplanationOfBenefitPayee extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitPayeeSchema);
    this._type = 'FHIR::ExplanationOfBenefitPayee';
  }
};


module.exports.ExplanationOfBenefitPayeeSchema = ExplanationOfBenefitPayeeSchema;
module.exports.ExplanationOfBenefitPayee = ExplanationOfBenefitPayee;
