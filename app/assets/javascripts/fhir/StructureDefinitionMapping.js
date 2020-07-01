const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const StructureDefinitionMappingSchema = BackboneElementSchemaFunction({
  identity: PrimitiveIdSchema,
  uri: PrimitiveUriSchema,
  name: PrimitiveStringSchema,
  comment: PrimitiveStringSchema,
  typeName: { type: String, default: 'StructureDefinitionMapping' },
  _type: { type: String, default: 'FHIR::StructureDefinitionMapping' },
});

class StructureDefinitionMapping extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionMappingSchema);
    this.typeName = 'StructureDefinitionMapping';
    this._type = 'FHIR::StructureDefinitionMapping';
  }
}

module.exports.StructureDefinitionMappingSchema = StructureDefinitionMappingSchema;
module.exports.StructureDefinitionMapping = StructureDefinitionMapping;
