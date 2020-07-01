const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const OperationDefinitionParameterReferencedFromSchema = BackboneElementSchemaFunction({
  source: PrimitiveStringSchema,
  sourceId: PrimitiveStringSchema,
  typeName: { type: String, default: 'OperationDefinitionParameterReferencedFrom' },
  _type: { type: String, default: 'FHIR::OperationDefinitionParameterReferencedFrom' },
});

class OperationDefinitionParameterReferencedFrom extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionParameterReferencedFromSchema);
    this.typeName = 'OperationDefinitionParameterReferencedFrom';
    this._type = 'FHIR::OperationDefinitionParameterReferencedFrom';
  }
}

module.exports.OperationDefinitionParameterReferencedFromSchema = OperationDefinitionParameterReferencedFromSchema;
module.exports.OperationDefinitionParameterReferencedFrom = OperationDefinitionParameterReferencedFrom;
