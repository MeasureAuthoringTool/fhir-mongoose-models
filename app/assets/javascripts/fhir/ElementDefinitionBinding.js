const mongoose = require('mongoose/browser');
const { BindingStrengthSchema } = require('./BindingStrength');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ElementDefinitionBindingSchema = ElementSchemaFunction({
  strength: BindingStrengthSchema,
  description: PrimitiveStringSchema,
  valueSet: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'ElementDefinitionBinding' },
  _type: { type: String, default: 'FHIR::ElementDefinitionBinding' },
});

class ElementDefinitionBinding extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionBindingSchema);
    this.typeName = 'ElementDefinitionBinding';
    this._type = 'FHIR::ElementDefinitionBinding';
  }
}

module.exports.ElementDefinitionBindingSchema = ElementDefinitionBindingSchema;
module.exports.ElementDefinitionBinding = ElementDefinitionBinding;
