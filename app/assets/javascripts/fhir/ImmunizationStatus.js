const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ImmunizationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ImmunizationStatus' },
  _type: { type: String, default: 'FHIR::ImmunizationStatus' },
});

class ImmunizationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationStatusSchema);
    this.typeName = 'ImmunizationStatus';
    this._type = 'FHIR::ImmunizationStatus';
  }
}

module.exports.ImmunizationStatusSchema = ImmunizationStatusSchema;
module.exports.ImmunizationStatus = ImmunizationStatus;
