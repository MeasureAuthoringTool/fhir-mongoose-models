const { AddressSchema } = require('./allSchemaHeaders.js');
const { AdministrativeGenderSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PersonLinkSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PersonSchema } = require('./allSchemaHeaders.js');

PersonSchema.add(DomainResourceSchema);
PersonSchema.remove('id');
PersonSchema.add({
  identifier: [IdentifierSchema],
  name: [HumanNameSchema],
  telecom: [ContactPointSchema],
  gender: AdministrativeGenderSchema,
  birthDate: PrimitiveDateSchema,
  address: [AddressSchema],
  photo: AttachmentSchema,
  managingOrganization: ReferenceSchema,
  active: PrimitiveBooleanSchema,
  link: [PersonLinkSchema],
});

module.exports.PersonSchema = PersonSchema;
