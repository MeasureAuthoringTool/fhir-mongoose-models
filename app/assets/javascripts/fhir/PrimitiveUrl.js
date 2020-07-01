const mongoose = require('mongoose/browser');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveUriSchemaFunction } = require('./PrimitiveUri');

const PrimitiveUrlSchema = PrimitiveUriSchemaFunction({
  typeName: { type: String, default: 'PrimitiveUrl' },
  _type: { type: String, default: 'FHIR::PrimitiveUrl' },
});

class PrimitiveUrl extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveUrlSchema);
    this.typeName = 'PrimitiveUrl';
    this._type = 'FHIR::PrimitiveUrl';
  }
}

module.exports.PrimitiveUrlSchema = PrimitiveUrlSchema;
module.exports.PrimitiveUrl = PrimitiveUrl;
