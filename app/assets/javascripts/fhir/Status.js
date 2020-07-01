const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'Status' },
  _type: { type: String, default: 'FHIR::Status' },
});

class Status extends mongoose.Document {
  constructor(object) {
    super(object, StatusSchema);
    this.typeName = 'Status';
    this._type = 'FHIR::Status';
  }
}

module.exports.StatusSchema = StatusSchema;
module.exports.Status = Status;
