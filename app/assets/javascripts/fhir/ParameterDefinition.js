const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { FHIRAllTypesSchema } = require('./FHIRAllTypes');
const { ParameterUseSchema } = require('./ParameterUse');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ParameterDefinitionSchema = ElementSchemaFunction({
  name: PrimitiveCodeSchema,
  use: ParameterUseSchema,
  min: PrimitiveIntegerSchema,
  max: PrimitiveStringSchema,
  documentation: PrimitiveStringSchema,
  type: FHIRAllTypesSchema,
  profile: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'ParameterDefinition' },
  _type: { type: String, default: 'FHIR::ParameterDefinition' },
});

class ParameterDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ParameterDefinitionSchema);
    this.typeName = 'ParameterDefinition';
    this._type = 'FHIR::ParameterDefinition';
  }
}

module.exports.ParameterDefinitionSchema = ParameterDefinitionSchema;
module.exports.ParameterDefinition = ParameterDefinition;
