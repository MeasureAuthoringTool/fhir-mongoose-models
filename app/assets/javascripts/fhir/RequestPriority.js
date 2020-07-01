const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RequestPrioritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RequestPriority' },
  _type: { type: String, default: 'FHIR::RequestPriority' },
});

class RequestPriority extends mongoose.Document {
  constructor(object) {
    super(object, RequestPrioritySchema);
    this.typeName = 'RequestPriority';
    this._type = 'FHIR::RequestPriority';
  }
}

module.exports.RequestPrioritySchema = RequestPrioritySchema;
module.exports.RequestPriority = RequestPriority;
