const { AddressSchema } = require('./allSchemaHeaders.js');
const { AdministrativeGenderSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PractitionerQualificationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PractitionerSchema } = require('./allSchemaHeaders.js');

PractitionerSchema.add(DomainResourceSchema);
PractitionerSchema.remove('id');
PractitionerSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  address: [AddressSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  photo: [AttachmentSchema],
  qualification: [PractitionerQualificationSchema],
  communication: [CodeableConceptSchema],
});

module.exports.PractitionerSchema = PractitionerSchema;
