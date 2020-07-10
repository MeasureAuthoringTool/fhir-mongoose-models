const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { OrganizationContactSchema } = require('./allSchemaHeaders.js');

OrganizationContactSchema.add(BackboneElementSchema);
OrganizationContactSchema.remove('id');
OrganizationContactSchema.add({
  purpose: CodeableConceptSchema,
  name: HumanNameSchema,
  telecom: [ContactPointSchema],
  address: AddressSchema,
});

module.exports.OrganizationContactSchema = OrganizationContactSchema;
