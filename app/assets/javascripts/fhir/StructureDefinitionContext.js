const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExtensionContextTypeSchema } = require('./ExtensionContextType');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const StructureDefinitionContextSchema = BackboneElementSchemaFunction({
  type: ExtensionContextTypeSchema,
  expression: PrimitiveStringSchema,
  typeName: { type: String, default: 'StructureDefinitionContext' },
  _type: { type: String, default: 'FHIR::StructureDefinitionContext' },
});

class StructureDefinitionContext extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionContextSchema);
    this.typeName = 'StructureDefinitionContext';
    this._type = 'FHIR::StructureDefinitionContext';
  }
}

module.exports.StructureDefinitionContextSchema = StructureDefinitionContextSchema;
module.exports.StructureDefinitionContext = StructureDefinitionContext;
