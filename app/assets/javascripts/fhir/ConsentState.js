const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConsentStateSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConsentState' },
  _type: { type: String, default: 'FHIR::ConsentState' },
});

class ConsentState extends mongoose.Document {
  constructor(object) {
    super(object, ConsentStateSchema);
    this.typeName = 'ConsentState';
    this._type = 'FHIR::ConsentState';
  }
}

module.exports.ConsentStateSchema = ConsentStateSchema;
module.exports.ConsentState = ConsentState;
