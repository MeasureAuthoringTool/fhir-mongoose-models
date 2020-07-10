const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MeasureSupplementalDataSchema } = require('./allSchemaHeaders.js');

MeasureSupplementalDataSchema.add(BackboneElementSchema);
MeasureSupplementalDataSchema.remove('id');
MeasureSupplementalDataSchema.add({
  code: CodeableConceptSchema,
  usage: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  criteria: ExpressionSchema,
});

module.exports.MeasureSupplementalDataSchema = MeasureSupplementalDataSchema;
