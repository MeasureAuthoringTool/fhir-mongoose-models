const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MimeTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MimeType' },
  _type: { type: String, default: 'FHIR::MimeType' },
});

class MimeType extends mongoose.Document {
  constructor(object) {
    super(object, MimeTypeSchema);
    this.typeName = 'MimeType';
    this._type = 'FHIR::MimeType';
  }
}

module.exports.MimeTypeSchema = MimeTypeSchema;
module.exports.MimeType = MimeType;
