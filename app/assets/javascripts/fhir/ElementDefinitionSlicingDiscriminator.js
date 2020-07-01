const mongoose = require('mongoose/browser');
const { DiscriminatorTypeSchema } = require('./DiscriminatorType');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ElementDefinitionSlicingDiscriminatorSchema = ElementSchemaFunction({
  type: DiscriminatorTypeSchema,
  path: PrimitiveStringSchema,
  typeName: { type: String, default: 'ElementDefinitionSlicingDiscriminator' },
  _type: { type: String, default: 'FHIR::ElementDefinitionSlicingDiscriminator' },
});

class ElementDefinitionSlicingDiscriminator extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionSlicingDiscriminatorSchema);
    this.typeName = 'ElementDefinitionSlicingDiscriminator';
    this._type = 'FHIR::ElementDefinitionSlicingDiscriminator';
  }
}

module.exports.ElementDefinitionSlicingDiscriminatorSchema = ElementDefinitionSlicingDiscriminatorSchema;
module.exports.ElementDefinitionSlicingDiscriminator = ElementDefinitionSlicingDiscriminator;
