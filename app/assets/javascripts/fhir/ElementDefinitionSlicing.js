const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { ElementDefinitionSlicingDiscriminatorSchema } = require('./ElementDefinitionSlicingDiscriminator');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SlicingRulesSchema } = require('./SlicingRules');

const ElementDefinitionSlicingSchema = ElementSchemaFunction({
  discriminator: [ElementDefinitionSlicingDiscriminatorSchema],
  description: PrimitiveStringSchema,
  ordered: PrimitiveBooleanSchema,
  rules: SlicingRulesSchema,
  typeName: { type: String, default: 'ElementDefinitionSlicing' },
  _type: { type: String, default: 'FHIR::ElementDefinitionSlicing' },
});

class ElementDefinitionSlicing extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionSlicingSchema);
    this.typeName = 'ElementDefinitionSlicing';
    this._type = 'FHIR::ElementDefinitionSlicing';
  }
}

module.exports.ElementDefinitionSlicingSchema = ElementDefinitionSlicingSchema;
module.exports.ElementDefinitionSlicing = ElementDefinitionSlicing;
