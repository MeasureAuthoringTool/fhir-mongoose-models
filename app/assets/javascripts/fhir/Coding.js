const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const CodingSchema = ElementSchemaFunction({
  system: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  userSelected: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'Coding' },
  _type: { type: String, default: 'FHIR::Coding' },
});

class Coding extends mongoose.Document {
  constructor(object) {
    super(object, CodingSchema);
    this.typeName = 'Coding';
    this._type = 'FHIR::Coding';
  }
}

module.exports.CodingSchema = CodingSchema;
module.exports.Coding = Coding;
