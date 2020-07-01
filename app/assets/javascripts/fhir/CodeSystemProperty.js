const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PropertyTypeSchema } = require('./PropertyType');

const CodeSystemPropertySchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  uri: PrimitiveUriSchema,
  description: PrimitiveStringSchema,
  type: PropertyTypeSchema,
  typeName: { type: String, default: 'CodeSystemProperty' },
  _type: { type: String, default: 'FHIR::CodeSystemProperty' },
});

class CodeSystemProperty extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemPropertySchema);
    this.typeName = 'CodeSystemProperty';
    this._type = 'FHIR::CodeSystemProperty';
  }
}

module.exports.CodeSystemPropertySchema = CodeSystemPropertySchema;
module.exports.CodeSystemProperty = CodeSystemProperty;
