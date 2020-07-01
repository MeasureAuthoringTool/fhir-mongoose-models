const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { StructureMapGroupRuleDependentSchema } = require('./StructureMapGroupRuleDependent');
const { StructureMapGroupRuleSourceSchema } = require('./StructureMapGroupRuleSource');
const { StructureMapGroupRuleTargetSchema } = require('./StructureMapGroupRuleTarget');

const StructureMapGroupRuleSchema = BackboneElementSchemaFunction({
  name: PrimitiveIdSchema,
  source: [StructureMapGroupRuleSourceSchema],
  target: [StructureMapGroupRuleTargetSchema],
  rule: [StructureMapGroupRuleSchema],
  dependent: [StructureMapGroupRuleDependentSchema],
  documentation: PrimitiveStringSchema,
  typeName: { type: String, default: 'StructureMapGroupRule' },
  _type: { type: String, default: 'FHIR::StructureMapGroupRule' },
});

class StructureMapGroupRule extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleSchema);
    this.typeName = 'StructureMapGroupRule';
    this._type = 'FHIR::StructureMapGroupRule';
  }
}

module.exports.StructureMapGroupRuleSchema = StructureMapGroupRuleSchema;
module.exports.StructureMapGroupRule = StructureMapGroupRule;
