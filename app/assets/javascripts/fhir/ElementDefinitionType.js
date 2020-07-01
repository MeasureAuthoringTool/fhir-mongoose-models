const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceVersionRulesSchema } = require('./ReferenceVersionRules');

const ElementDefinitionTypeSchema = ElementSchemaFunction({
  code: PrimitiveUriSchema,
  targetProfile: [PrimitiveCanonicalSchema],
  versioning: ReferenceVersionRulesSchema,
  typeName: { type: String, default: 'ElementDefinitionType' },
  _type: { type: String, default: 'FHIR::ElementDefinitionType' },
});

class ElementDefinitionType extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionTypeSchema);
    this.typeName = 'ElementDefinitionType';
    this._type = 'FHIR::ElementDefinitionType';
  }
}

module.exports.ElementDefinitionTypeSchema = ElementDefinitionTypeSchema;
module.exports.ElementDefinitionType = ElementDefinitionType;
