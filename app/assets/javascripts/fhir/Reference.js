const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ReferenceSchema = ElementSchemaFunction({
  reference: PrimitiveStringSchema,
  type: PrimitiveUriSchema,
  identifier: IdentifierSchema,
  display: PrimitiveStringSchema,
  typeName: { type: String, default: 'Reference' },
  _type: { type: String, default: 'FHIR::Reference' },
});

class Reference extends mongoose.Document {
  constructor(object) {
    super(object, ReferenceSchema);
    this.typeName = 'Reference';
    this._type = 'FHIR::Reference';
  }
}

module.exports.ReferenceSchema = ReferenceSchema;
module.exports.Reference = Reference;
