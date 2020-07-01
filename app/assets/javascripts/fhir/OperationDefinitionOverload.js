const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const OperationDefinitionOverloadSchema = BackboneElementSchemaFunction({
  parameterName: [PrimitiveStringSchema],
  comment: PrimitiveStringSchema,
  typeName: { type: String, default: 'OperationDefinitionOverload' },
  _type: { type: String, default: 'FHIR::OperationDefinitionOverload' },
});

class OperationDefinitionOverload extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionOverloadSchema);
    this.typeName = 'OperationDefinitionOverload';
    this._type = 'FHIR::OperationDefinitionOverload';
  }
}

module.exports.OperationDefinitionOverloadSchema = OperationDefinitionOverloadSchema;
module.exports.OperationDefinitionOverload = OperationDefinitionOverload;
