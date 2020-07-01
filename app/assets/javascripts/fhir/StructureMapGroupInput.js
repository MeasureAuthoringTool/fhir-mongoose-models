const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { StructureMapInputModeSchema } = require('./StructureMapInputMode');

const StructureMapGroupInputSchema = BackboneElementSchemaFunction({
  name: PrimitiveIdSchema,
  type: PrimitiveStringSchema,
  mode: StructureMapInputModeSchema,
  documentation: PrimitiveStringSchema,
  typeName: { type: String, default: 'StructureMapGroupInput' },
  _type: { type: String, default: 'FHIR::StructureMapGroupInput' },
});

class StructureMapGroupInput extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupInputSchema);
    this.typeName = 'StructureMapGroupInput';
    this._type = 'FHIR::StructureMapGroupInput';
  }
}

module.exports.StructureMapGroupInputSchema = StructureMapGroupInputSchema;
module.exports.StructureMapGroupInput = StructureMapGroupInput;
