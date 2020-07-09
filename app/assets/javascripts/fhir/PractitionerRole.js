const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PractitionerRoleAvailableTimeSchema } = require('./allSchemaHeaders.js');
const { PractitionerRoleNotAvailableSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PractitionerRoleSchema } = require('./allSchemaHeaders.js');

PractitionerRoleSchema.add(DomainResourceSchema);
PractitionerRoleSchema.remove('id');
PractitionerRoleSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  period: PeriodSchema,
  practitioner: ReferenceSchema,
  organization: ReferenceSchema,
  code: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  location: [ReferenceSchema],
  healthcareService: [ReferenceSchema],
  telecom: [ContactPointSchema],
  availableTime: [PractitionerRoleAvailableTimeSchema],
  notAvailable: [PractitionerRoleNotAvailableSchema],
  availabilityExceptions: PrimitiveStringSchema,
  endpoint: [ReferenceSchema],
});

module.exports.PractitionerRoleSchema = PractitionerRoleSchema;
