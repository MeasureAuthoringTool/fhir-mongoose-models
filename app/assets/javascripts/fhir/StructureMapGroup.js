const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { StructureMapGroupInputSchema } = require('./StructureMapGroupInput');
const { StructureMapGroupRuleSchema } = require('./StructureMapGroupRule');
const { StructureMapGroupTypeModeSchema } = require('./StructureMapGroupTypeMode');

const StructureMapGroupSchema = BackboneElementSchemaFunction({
  name: PrimitiveIdSchema,
  extends: PrimitiveIdSchema,
  typeMode: StructureMapGroupTypeModeSchema,
  documentation: PrimitiveStringSchema,
  input: [StructureMapGroupInputSchema],
  rule: [StructureMapGroupRuleSchema],
  typeName: { type: String, default: 'StructureMapGroup' },
  _type: { type: String, default: 'FHIR::StructureMapGroup' },
});

class StructureMapGroup extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupSchema);
    this.typeName = 'StructureMapGroup';
    this._type = 'FHIR::StructureMapGroup';
  }
}

module.exports.StructureMapGroupSchema = StructureMapGroupSchema;
module.exports.StructureMapGroup = StructureMapGroup;
