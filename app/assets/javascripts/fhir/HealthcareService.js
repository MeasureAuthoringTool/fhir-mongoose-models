const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { HealthcareServiceAvailableTimeSchema } = require('./allSchemaHeaders.js');
const { HealthcareServiceEligibilitySchema } = require('./allSchemaHeaders.js');
const { HealthcareServiceNotAvailableSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { HealthcareServiceSchema } = require('./allSchemaHeaders.js');

HealthcareServiceSchema.add(DomainResourceSchema);
HealthcareServiceSchema.remove('id');
HealthcareServiceSchema.add({
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
});

module.exports.HealthcareServiceSchema = HealthcareServiceSchema;
