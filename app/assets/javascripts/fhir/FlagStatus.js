const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FlagStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FlagStatus' },
  _type: { type: String, default: 'FHIR::FlagStatus' },
});

class FlagStatus extends mongoose.Document {
  constructor(object) {
    super(object, FlagStatusSchema);
    this.typeName = 'FlagStatus';
    this._type = 'FHIR::FlagStatus';
  }
}

module.exports.FlagStatusSchema = FlagStatusSchema;
module.exports.FlagStatus = FlagStatus;
