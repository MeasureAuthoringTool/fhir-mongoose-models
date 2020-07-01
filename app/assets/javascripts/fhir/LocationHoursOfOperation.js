const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DaysOfWeekSchema } = require('./DaysOfWeek');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');

const LocationHoursOfOperationSchema = BackboneElementSchemaFunction({
  daysOfWeek: [DaysOfWeekSchema],
  allDay: PrimitiveBooleanSchema,
  openingTime: PrimitiveTimeSchema,
  closingTime: PrimitiveTimeSchema,
  typeName: { type: String, default: 'LocationHoursOfOperation' },
  _type: { type: String, default: 'FHIR::LocationHoursOfOperation' },
});

class LocationHoursOfOperation extends mongoose.Document {
  constructor(object) {
    super(object, LocationHoursOfOperationSchema);
    this.typeName = 'LocationHoursOfOperation';
    this._type = 'FHIR::LocationHoursOfOperation';
  }
}

module.exports.LocationHoursOfOperationSchema = LocationHoursOfOperationSchema;
module.exports.LocationHoursOfOperation = LocationHoursOfOperation;
