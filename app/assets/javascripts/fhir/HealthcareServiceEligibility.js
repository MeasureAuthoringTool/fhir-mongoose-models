const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');

const HealthcareServiceEligibilitySchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  comment: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'HealthcareServiceEligibility' },
  _type: { type: String, default: 'FHIR::HealthcareServiceEligibility' },
});

class HealthcareServiceEligibility extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceEligibilitySchema);
    this.typeName = 'HealthcareServiceEligibility';
    this._type = 'FHIR::HealthcareServiceEligibility';
  }
}

module.exports.HealthcareServiceEligibilitySchema = HealthcareServiceEligibilitySchema;
module.exports.HealthcareServiceEligibility = HealthcareServiceEligibility;
