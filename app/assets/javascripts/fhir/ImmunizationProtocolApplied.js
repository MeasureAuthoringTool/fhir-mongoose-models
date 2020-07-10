const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImmunizationProtocolAppliedSchema } = require('./allSchemaHeaders.js');

ImmunizationProtocolAppliedSchema.add(BackboneElementSchema);
ImmunizationProtocolAppliedSchema.remove('id');
ImmunizationProtocolAppliedSchema.add({
  series: PrimitiveStringSchema,
  authority: ReferenceSchema,
  targetDisease: [CodeableConceptSchema],
  doseNumberPositiveInt: PrimitivePositiveIntSchema,
  doseNumberString: PrimitiveStringSchema,
  seriesDosesPositiveInt: PrimitivePositiveIntSchema,
  seriesDosesString: PrimitiveStringSchema,
});

module.exports.ImmunizationProtocolAppliedSchema = ImmunizationProtocolAppliedSchema;
