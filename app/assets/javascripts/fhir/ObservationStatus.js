const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ObservationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ObservationStatus' },
  _type: { type: String, default: 'FHIR::ObservationStatus' },
});

class ObservationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ObservationStatusSchema);
    this.typeName = 'ObservationStatus';
    this._type = 'FHIR::ObservationStatus';
  }
}

module.exports.ObservationStatusSchema = ObservationStatusSchema;
module.exports.ObservationStatus = ObservationStatus;
