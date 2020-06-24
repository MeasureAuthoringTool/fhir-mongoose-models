const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
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

const ExplanationOfBenefitAccidentSchema = BackboneElementSchemaFunction({
   date : FHIRDate,
   type : CodeableConceptSchema,
   locationAddress : AddressSchema,
   locationReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitAccident' },
});

class ExplanationOfBenefitAccident extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAccidentSchema);
    this._type = 'FHIR::ExplanationOfBenefitAccident';
  }
};


module.exports.ExplanationOfBenefitAccidentSchema = ExplanationOfBenefitAccidentSchema;
module.exports.ExplanationOfBenefitAccident = ExplanationOfBenefitAccident;
