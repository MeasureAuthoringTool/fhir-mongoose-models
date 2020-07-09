const { AddressSchema } = require('./allSchemaHeaders.js');
const { AdministrativeGenderSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PatientCommunicationSchema } = require('./allSchemaHeaders.js');
const { PatientContactSchema } = require('./allSchemaHeaders.js');
const { PatientLinkSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PatientSchema } = require('./allSchemaHeaders.js');

PatientSchema.add(DomainResourceSchema);
PatientSchema.remove('id');
PatientSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  deceasedBoolean: PrimitiveBooleanSchema,
  deceasedDateTime: PrimitiveDateTimeSchema,
  address: [AddressSchema],
  maritalStatus: CodeableConceptSchema,
  multipleBirthBoolean: PrimitiveBooleanSchema,
  multipleBirthInteger: PrimitiveIntegerSchema,
  photo: [AttachmentSchema],
  contact: [PatientContactSchema],
  communication: [PatientCommunicationSchema],
  generalPractitioner: [ReferenceSchema],
  managingOrganization: ReferenceSchema,
  link: [PatientLinkSchema],
});

module.exports.PatientSchema = PatientSchema;
