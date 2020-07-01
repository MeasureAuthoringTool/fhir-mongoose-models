const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const StructureMapGroupRuleDependentSchema = BackboneElementSchemaFunction({
  name: PrimitiveIdSchema,
  variable: [PrimitiveStringSchema],
  typeName: { type: String, default: 'StructureMapGroupRuleDependent' },
  _type: { type: String, default: 'FHIR::StructureMapGroupRuleDependent' },
});

class StructureMapGroupRuleDependent extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleDependentSchema);
    this.typeName = 'StructureMapGroupRuleDependent';
    this._type = 'FHIR::StructureMapGroupRuleDependent';
  }
}

module.exports.StructureMapGroupRuleDependentSchema = StructureMapGroupRuleDependentSchema;
module.exports.StructureMapGroupRuleDependent = StructureMapGroupRuleDependent;
