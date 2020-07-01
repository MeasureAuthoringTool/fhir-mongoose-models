const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { HealthcareServiceAvailableTimeSchema } = require('./HealthcareServiceAvailableTime');
const { HealthcareServiceEligibilitySchema } = require('./HealthcareServiceEligibility');
const { HealthcareServiceNotAvailableSchema } = require('./HealthcareServiceNotAvailable');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const HealthcareServiceSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  providedBy: ReferenceSchema,
  category: [CodeableConceptSchema],
  type: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  location: [ReferenceSchema],
  name: PrimitiveStringSchema,
  comment: PrimitiveStringSchema,
  extraDetails: PrimitiveMarkdownSchema,
  photo: AttachmentSchema,
  telecom: [ContactPointSchema],
  coverageArea: [ReferenceSchema],
  serviceProvisionCode: [CodeableConceptSchema],
  eligibility: [HealthcareServiceEligibilitySchema],
  program: [CodeableConceptSchema],
  characteristic: [CodeableConceptSchema],
  communication: [CodeableConceptSchema],
  referralMethod: [CodeableConceptSchema],
  appointmentRequired: PrimitiveBooleanSchema,
  availableTime: [HealthcareServiceAvailableTimeSchema],
  notAvailable: [HealthcareServiceNotAvailableSchema],
  availabilityExceptions: PrimitiveStringSchema,
  endpoint: [ReferenceSchema],
  typeName: { type: String, default: 'HealthcareService' },
  _type: { type: String, default: 'FHIR::HealthcareService' },
});

class HealthcareService extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceSchema);
    this.typeName = 'HealthcareService';
    this._type = 'FHIR::HealthcareService';
  }
}

module.exports.HealthcareServiceSchema = HealthcareServiceSchema;
module.exports.HealthcareService = HealthcareService;
