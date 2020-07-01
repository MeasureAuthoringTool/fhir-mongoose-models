const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const HTTPVerbSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'HTTPVerb' },
  _type: { type: String, default: 'FHIR::HTTPVerb' },
});

class HTTPVerb extends mongoose.Document {
  constructor(object) {
    super(object, HTTPVerbSchema);
    this.typeName = 'HTTPVerb';
    this._type = 'FHIR::HTTPVerb';
  }
}

module.exports.HTTPVerbSchema = HTTPVerbSchema;
module.exports.HTTPVerb = HTTPVerb;
