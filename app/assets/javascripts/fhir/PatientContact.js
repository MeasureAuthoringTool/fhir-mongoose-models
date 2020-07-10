const { AddressSchema } = require('./allSchemaHeaders.js');
const { AdministrativeGenderSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { HumanNameSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PatientContactSchema } = require('./allSchemaHeaders.js');

PatientContactSchema.add(BackboneElementSchema);
PatientContactSchema.remove('id');
PatientContactSchema.add({
  relationship: [CodeableConceptSchema],
  name: HumanNameSchema,
  telecom: [ContactPointSchema],
  address: AddressSchema,
  gender: AdministrativeGenderSchema,
  organization: ReferenceSchema,
  period: PeriodSchema,
});

module.exports.PatientContactSchema = PatientContactSchema;
