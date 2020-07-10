const { AddressSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { OrganizationContactSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { OrganizationSchema } = require('./allSchemaHeaders.js');

OrganizationSchema.add(DomainResourceSchema);
OrganizationSchema.remove('id');
OrganizationSchema.add({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  type: [CodeableConceptSchema],
  name: PrimitiveStringSchema,
  alias: [PrimitiveStringSchema],
  telecom: [ContactPointSchema],
  address: [AddressSchema],
  partOf: ReferenceSchema,
  contact: [OrganizationContactSchema],
  endpoint: [ReferenceSchema],
});

module.exports.OrganizationSchema = OrganizationSchema;
