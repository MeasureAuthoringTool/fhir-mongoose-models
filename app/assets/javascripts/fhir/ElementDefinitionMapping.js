const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ElementDefinitionMappingSchema = ElementSchemaFunction({
  identity: PrimitiveIdSchema,
  language: MimeTypeSchema,
  map: PrimitiveStringSchema,
  comment: PrimitiveStringSchema,
  typeName: { type: String, default: 'ElementDefinitionMapping' },
  _type: { type: String, default: 'FHIR::ElementDefinitionMapping' },
});

class ElementDefinitionMapping extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionMappingSchema);
    this.typeName = 'ElementDefinitionMapping';
    this._type = 'FHIR::ElementDefinitionMapping';
  }
}

module.exports.ElementDefinitionMappingSchema = ElementDefinitionMappingSchema;
module.exports.ElementDefinitionMapping = ElementDefinitionMapping;
