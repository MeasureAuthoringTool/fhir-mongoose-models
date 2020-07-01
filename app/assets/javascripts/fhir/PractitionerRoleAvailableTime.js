const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DaysOfWeekSchema } = require('./DaysOfWeek');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');

const PractitionerRoleAvailableTimeSchema = BackboneElementSchemaFunction({
  daysOfWeek: [DaysOfWeekSchema],
  allDay: PrimitiveBooleanSchema,
  availableStartTime: PrimitiveTimeSchema,
  availableEndTime: PrimitiveTimeSchema,
  typeName: { type: String, default: 'PractitionerRoleAvailableTime' },
  _type: { type: String, default: 'FHIR::PractitionerRoleAvailableTime' },
});

class PractitionerRoleAvailableTime extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerRoleAvailableTimeSchema);
    this.typeName = 'PractitionerRoleAvailableTime';
    this._type = 'FHIR::PractitionerRoleAvailableTime';
  }
}

module.exports.PractitionerRoleAvailableTimeSchema = PractitionerRoleAvailableTimeSchema;
module.exports.PractitionerRoleAvailableTime = PractitionerRoleAvailableTime;
