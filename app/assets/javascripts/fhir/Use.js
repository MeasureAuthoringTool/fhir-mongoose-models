const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const UseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'Use' },
  _type: { type: String, default: 'FHIR::Use' },
});

class Use extends mongoose.Document {
  constructor(object) {
    super(object, UseSchema);
    this.typeName = 'Use';
    this._type = 'FHIR::Use';
  }
}

module.exports.UseSchema = UseSchema;
module.exports.Use = Use;
