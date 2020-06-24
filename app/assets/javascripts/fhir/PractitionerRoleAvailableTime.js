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

const PractitionerRoleAvailableTimeSchema = BackboneElementSchemaFunction({
   daysOfWeek : [DaysOfWeekSchema],
   allDay : Boolean,
   availableStartTime : DateTime,
   availableEndTime : DateTime,
   fhirTitle: { type: String, default: 'PractitionerRoleAvailableTime' },
});

class PractitionerRoleAvailableTime extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerRoleAvailableTimeSchema);
    this._type = 'FHIR::PractitionerRoleAvailableTime';
  }
};


module.exports.PractitionerRoleAvailableTimeSchema = PractitionerRoleAvailableTimeSchema;
module.exports.PractitionerRoleAvailableTime = PractitionerRoleAvailableTime;
