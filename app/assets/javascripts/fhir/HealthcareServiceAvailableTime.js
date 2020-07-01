const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DaysOfWeekSchema } = require('./DaysOfWeek');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');

const HealthcareServiceAvailableTimeSchema = BackboneElementSchemaFunction({
  daysOfWeek: [DaysOfWeekSchema],
  allDay: PrimitiveBooleanSchema,
  availableStartTime: PrimitiveTimeSchema,
  availableEndTime: PrimitiveTimeSchema,
  typeName: { type: String, default: 'HealthcareServiceAvailableTime' },
  _type: { type: String, default: 'FHIR::HealthcareServiceAvailableTime' },
});

class HealthcareServiceAvailableTime extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceAvailableTimeSchema);
    this.typeName = 'HealthcareServiceAvailableTime';
    this._type = 'FHIR::HealthcareServiceAvailableTime';
  }
}

module.exports.HealthcareServiceAvailableTimeSchema = HealthcareServiceAvailableTimeSchema;
module.exports.HealthcareServiceAvailableTime = HealthcareServiceAvailableTime;
