const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const HealthcareServiceEligibilitySchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   comment : String,
   fhirTitle: { type: String, default: 'HealthcareServiceEligibility' },
});

class HealthcareServiceEligibility extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceEligibilitySchema);
    this._type = 'FHIR::HealthcareServiceEligibility';
  }
};


module.exports.HealthcareServiceEligibilitySchema = HealthcareServiceEligibilitySchema;
module.exports.HealthcareServiceEligibility = HealthcareServiceEligibility;
