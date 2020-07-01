const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { FHIRAllTypesSchema } = require('./FHIRAllTypes');
const { OperationDefinitionParameterBindingSchema } = require('./OperationDefinitionParameterBinding');
const { OperationDefinitionParameterReferencedFromSchema } = require('./OperationDefinitionParameterReferencedFrom');
const { OperationParameterUseSchema } = require('./OperationParameterUse');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SearchParamTypeSchema } = require('./SearchParamType');

const OperationDefinitionParameterSchema = BackboneElementSchemaFunction({
  name: PrimitiveCodeSchema,
  use: OperationParameterUseSchema,
  min: PrimitiveIntegerSchema,
  max: PrimitiveStringSchema,
  documentation: PrimitiveStringSchema,
  type: FHIRAllTypesSchema,
  targetProfile: [PrimitiveCanonicalSchema],
  searchType: SearchParamTypeSchema,
  binding: OperationDefinitionParameterBindingSchema,
  referencedFrom: [OperationDefinitionParameterReferencedFromSchema],
  part: [OperationDefinitionParameterSchema],
  typeName: { type: String, default: 'OperationDefinitionParameter' },
  _type: { type: String, default: 'FHIR::OperationDefinitionParameter' },
});

class OperationDefinitionParameter extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionParameterSchema);
    this.typeName = 'OperationDefinitionParameter';
    this._type = 'FHIR::OperationDefinitionParameter';
  }
}

module.exports.OperationDefinitionParameterSchema = OperationDefinitionParameterSchema;
module.exports.OperationDefinitionParameter = OperationDefinitionParameter;
