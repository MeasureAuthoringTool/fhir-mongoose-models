const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');

const ElementDefinitionBaseSchema = ElementSchemaFunction({
  path: PrimitiveStringSchema,
  min: PrimitiveUnsignedIntSchema,
  max: PrimitiveStringSchema,
  typeName: { type: String, default: 'ElementDefinitionBase' },
  _type: { type: String, default: 'FHIR::ElementDefinitionBase' },
});

class ElementDefinitionBase extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionBaseSchema);
    this.typeName = 'ElementDefinitionBase';
    this._type = 'FHIR::ElementDefinitionBase';
  }
}

module.exports.ElementDefinitionBaseSchema = ElementDefinitionBaseSchema;
module.exports.ElementDefinitionBase = ElementDefinitionBase;
