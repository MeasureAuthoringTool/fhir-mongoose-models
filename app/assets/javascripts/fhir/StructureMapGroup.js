const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupInputSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupTypeModeSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupSchema } = require('./allSchemaHeaders.js');

StructureMapGroupSchema.add(BackboneElementSchema);
StructureMapGroupSchema.remove('id');
StructureMapGroupSchema.add({
  name: PrimitiveIdSchema,
  extends: PrimitiveIdSchema,
  typeMode: StructureMapGroupTypeModeSchema,
  documentation: PrimitiveStringSchema,
  input: [StructureMapGroupInputSchema],
  rule: [StructureMapGroupRuleSchema],
});

module.exports.StructureMapGroupSchema = StructureMapGroupSchema;
