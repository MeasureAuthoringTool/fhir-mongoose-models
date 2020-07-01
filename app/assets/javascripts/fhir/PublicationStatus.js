const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PublicationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PublicationStatus' },
  _type: { type: String, default: 'FHIR::PublicationStatus' },
});

class PublicationStatus extends mongoose.Document {
  constructor(object) {
    super(object, PublicationStatusSchema);
    this.typeName = 'PublicationStatus';
    this._type = 'FHIR::PublicationStatus';
  }
}

module.exports.PublicationStatusSchema = PublicationStatusSchema;
module.exports.PublicationStatus = PublicationStatus;
