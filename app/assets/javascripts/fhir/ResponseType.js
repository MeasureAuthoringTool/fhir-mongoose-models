const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ResponseTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ResponseType' },
  _type: { type: String, default: 'FHIR::ResponseType' },
});

class ResponseType extends mongoose.Document {
  constructor(object) {
    super(object, ResponseTypeSchema);
    this.typeName = 'ResponseType';
    this._type = 'FHIR::ResponseType';
  }
}

module.exports.ResponseTypeSchema = ResponseTypeSchema;
module.exports.ResponseType = ResponseType;
