const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureMapContextTypeSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleTargetParameterSchema } = require('./allSchemaHeaders.js');
const { StructureMapTargetListModeSchema } = require('./allSchemaHeaders.js');
const { StructureMapTransformSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleTargetSchema } = require('./allSchemaHeaders.js');

StructureMapGroupRuleTargetSchema.add(BackboneElementSchema);
StructureMapGroupRuleTargetSchema.remove('id');
StructureMapGroupRuleTargetSchema.add({
  context: PrimitiveIdSchema,
  contextType: StructureMapContextTypeSchema,
  element: PrimitiveStringSchema,
  variable: PrimitiveIdSchema,
  listMode: [StructureMapTargetListModeSchema],
  listRuleId: PrimitiveIdSchema,
  transform: StructureMapTransformSchema,
  parameter: [StructureMapGroupRuleTargetParameterSchema],
});

module.exports.StructureMapGroupRuleTargetSchema = StructureMapGroupRuleTargetSchema;
