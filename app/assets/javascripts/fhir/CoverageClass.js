const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CoverageClassSchema } = require('./allSchemaHeaders.js');

CoverageClassSchema.add(BackboneElementSchema);
CoverageClassSchema.remove('id');
CoverageClassSchema.add({
  type: CodeableConceptSchema,
  value: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
});

module.exports.CoverageClassSchema = CoverageClassSchema;
