const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MediaStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MediaStatus' },
  _type: { type: String, default: 'FHIR::MediaStatus' },
});

class MediaStatus extends mongoose.Document {
  constructor(object) {
    super(object, MediaStatusSchema);
    this.typeName = 'MediaStatus';
    this._type = 'FHIR::MediaStatus';
  }
}

module.exports.MediaStatusSchema = MediaStatusSchema;
module.exports.MediaStatus = MediaStatus;
