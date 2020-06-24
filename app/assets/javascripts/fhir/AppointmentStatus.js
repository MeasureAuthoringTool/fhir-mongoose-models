const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AppointmentStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AppointmentStatus' },
});

class AppointmentStatus extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentStatusSchema);
    this._type = 'FHIR::AppointmentStatus';
  }
};


module.exports.AppointmentStatusSchema = AppointmentStatusSchema;
module.exports.AppointmentStatus = AppointmentStatus;
