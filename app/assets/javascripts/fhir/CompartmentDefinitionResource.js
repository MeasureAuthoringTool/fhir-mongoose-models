const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ResourceTypeSchema } = require('./ResourceType');

const CompartmentDefinitionResourceSchema = BackboneElementSchemaFunction({
  code: ResourceTypeSchema,
  param: [PrimitiveStringSchema],
  documentation: PrimitiveStringSchema,
  typeName: { type: String, default: 'CompartmentDefinitionResource' },
  _type: { type: String, default: 'FHIR::CompartmentDefinitionResource' },
});

class CompartmentDefinitionResource extends mongoose.Document {
  constructor(object) {
    super(object, CompartmentDefinitionResourceSchema);
    this.typeName = 'CompartmentDefinitionResource';
    this._type = 'FHIR::CompartmentDefinitionResource';
  }
}

module.exports.CompartmentDefinitionResourceSchema = CompartmentDefinitionResourceSchema;
module.exports.CompartmentDefinitionResource = CompartmentDefinitionResource;
