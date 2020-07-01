const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RequestIntentSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RequestIntent' },
  _type: { type: String, default: 'FHIR::RequestIntent' },
});

class RequestIntent extends mongoose.Document {
  constructor(object) {
    super(object, RequestIntentSchema);
    this.typeName = 'RequestIntent';
    this._type = 'FHIR::RequestIntent';
  }
}

module.exports.RequestIntentSchema = RequestIntentSchema;
module.exports.RequestIntent = RequestIntent;
