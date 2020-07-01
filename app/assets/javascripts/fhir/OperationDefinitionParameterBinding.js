const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { BindingStrengthSchema } = require('./BindingStrength');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');

const OperationDefinitionParameterBindingSchema = BackboneElementSchemaFunction({
  strength: BindingStrengthSchema,
  valueSet: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'OperationDefinitionParameterBinding' },
  _type: { type: String, default: 'FHIR::OperationDefinitionParameterBinding' },
});

class OperationDefinitionParameterBinding extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionParameterBindingSchema);
    this.typeName = 'OperationDefinitionParameterBinding';
    this._type = 'FHIR::OperationDefinitionParameterBinding';
  }
}

module.exports.OperationDefinitionParameterBindingSchema = OperationDefinitionParameterBindingSchema;
module.exports.OperationDefinitionParameterBinding = OperationDefinitionParameterBinding;
