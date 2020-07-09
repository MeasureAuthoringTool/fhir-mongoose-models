const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanContactSchema } = require('./allSchemaHeaders.js');

InsurancePlanContactSchema.add(BackboneElementSchema);
InsurancePlanContactSchema.remove('id');
InsurancePlanContactSchema.add({
  purpose: CodeableConceptSchema,
  name: HumanNameSchema,
  telecom: [ContactPointSchema],
  address: AddressSchema,
});

module.exports.InsurancePlanContactSchema = InsurancePlanContactSchema;
