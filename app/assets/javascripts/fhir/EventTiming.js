const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EventTimingSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EventTiming' },
  _type: { type: String, default: 'FHIR::EventTiming' },
});

class EventTiming extends mongoose.Document {
  constructor(object) {
    super(object, EventTimingSchema);
    this.typeName = 'EventTiming';
    this._type = 'FHIR::EventTiming';
  }
}

module.exports.EventTimingSchema = EventTimingSchema;
module.exports.EventTiming = EventTiming;
