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

const LocationHoursOfOperationSchema = BackboneElementSchemaFunction({
   daysOfWeek : [DaysOfWeekSchema],
   allDay : Boolean,
   openingTime : DateTime,
   closingTime : DateTime,
   fhirTitle: { type: String, default: 'LocationHoursOfOperation' },
});

class LocationHoursOfOperation extends mongoose.Document {
  constructor(object) {
    super(object, LocationHoursOfOperationSchema);
    this._type = 'FHIR::LocationHoursOfOperation';
  }
};


module.exports.LocationHoursOfOperationSchema = LocationHoursOfOperationSchema;
module.exports.LocationHoursOfOperation = LocationHoursOfOperation;
