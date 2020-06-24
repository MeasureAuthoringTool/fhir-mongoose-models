const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { DaysOfWeekSchema } = require('./DaysOfWeek');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const HealthcareServiceAvailableTimeSchema = BackboneElementSchemaFunction({
   daysOfWeek : [DaysOfWeekSchema],
   allDay : Boolean,
   availableStartTime : DateTime,
   availableEndTime : DateTime,
   fhirTitle: { type: String, default: 'HealthcareServiceAvailableTime' },
});

class HealthcareServiceAvailableTime extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceAvailableTimeSchema);
    this._type = 'FHIR::HealthcareServiceAvailableTime';
  }
};


module.exports.HealthcareServiceAvailableTimeSchema = HealthcareServiceAvailableTimeSchema;
module.exports.HealthcareServiceAvailableTime = HealthcareServiceAvailableTime;
