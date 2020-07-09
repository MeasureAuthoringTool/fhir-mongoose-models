const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleDependentSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleSourceSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleTargetSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleSchema } = require('./allSchemaHeaders.js');

StructureMapGroupRuleSchema.add(BackboneElementSchema);
StructureMapGroupRuleSchema.remove('id');
StructureMapGroupRuleSchema.add({
  name: PrimitiveIdSchema,
  source: [StructureMapGroupRuleSourceSchema],
  target: [StructureMapGroupRuleTargetSchema],
  rule: [StructureMapGroupRuleSchema],
  dependent: [StructureMapGroupRuleDependentSchema],
  documentation: PrimitiveStringSchema,
});

module.exports.StructureMapGroupRuleSchema = StructureMapGroupRuleSchema;
