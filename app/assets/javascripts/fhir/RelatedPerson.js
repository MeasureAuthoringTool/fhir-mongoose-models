const { AddressSchema } = require('./allSchemaHeaders.js');
const { AdministrativeGenderSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RelatedPersonCommunicationSchema } = require('./allSchemaHeaders.js');
const { RelatedPersonSchema } = require('./allSchemaHeaders.js');

RelatedPersonSchema.add(DomainResourceSchema);
RelatedPersonSchema.remove('id');
RelatedPersonSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  patient: ReferenceSchema,
  relationship: [CodeableConceptSchema],
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  address: [AddressSchema],
  photo: [AttachmentSchema],
  period: PeriodSchema,
  communication: [RelatedPersonCommunicationSchema],
});

module.exports.RelatedPersonSchema = RelatedPersonSchema;
