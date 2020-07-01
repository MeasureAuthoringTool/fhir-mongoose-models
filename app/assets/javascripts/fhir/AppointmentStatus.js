const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AppointmentStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AppointmentStatus' },
  _type: { type: String, default: 'FHIR::AppointmentStatus' },
});

class AppointmentStatus extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentStatusSchema);
    this.typeName = 'AppointmentStatus';
    this._type = 'FHIR::AppointmentStatus';
  }
}

module.exports.AppointmentStatusSchema = AppointmentStatusSchema;
module.exports.AppointmentStatus = AppointmentStatus;
