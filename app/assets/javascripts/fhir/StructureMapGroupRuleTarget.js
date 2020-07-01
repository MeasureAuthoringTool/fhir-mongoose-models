const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { StructureMapContextTypeSchema } = require('./StructureMapContextType');
const { StructureMapGroupRuleTargetParameterSchema } = require('./StructureMapGroupRuleTargetParameter');
const { StructureMapTargetListModeSchema } = require('./StructureMapTargetListMode');
const { StructureMapTransformSchema } = require('./StructureMapTransform');

const StructureMapGroupRuleTargetSchema = BackboneElementSchemaFunction({
  context: PrimitiveIdSchema,
  contextType: StructureMapContextTypeSchema,
  element: PrimitiveStringSchema,
  variable: PrimitiveIdSchema,
  listMode: [StructureMapTargetListModeSchema],
  listRuleId: PrimitiveIdSchema,
  transform: StructureMapTransformSchema,
  parameter: [StructureMapGroupRuleTargetParameterSchema],
  typeName: { type: String, default: 'StructureMapGroupRuleTarget' },
  _type: { type: String, default: 'FHIR::StructureMapGroupRuleTarget' },
});

class StructureMapGroupRuleTarget extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleTargetSchema);
    this.typeName = 'StructureMapGroupRuleTarget';
    this._type = 'FHIR::StructureMapGroupRuleTarget';
  }
}

module.exports.StructureMapGroupRuleTargetSchema = StructureMapGroupRuleTargetSchema;
module.exports.StructureMapGroupRuleTarget = StructureMapGroupRuleTarget;
