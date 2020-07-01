const mongoose = require('mongoose/browser');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveUriSchemaFunction } = require('./PrimitiveUri');

const PrimitiveCanonicalSchema = PrimitiveUriSchemaFunction({
  typeName: { type: String, default: 'PrimitiveCanonical' },
  _type: { type: String, default: 'FHIR::PrimitiveCanonical' },
});

class PrimitiveCanonical extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveCanonicalSchema);
    this.typeName = 'PrimitiveCanonical';
    this._type = 'FHIR::PrimitiveCanonical';
  }
}

module.exports.PrimitiveCanonicalSchema = PrimitiveCanonicalSchema;
module.exports.PrimitiveCanonical = PrimitiveCanonical;
