const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EventCapabilityModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EventCapabilityMode' },
  _type: { type: String, default: 'FHIR::EventCapabilityMode' },
});

class EventCapabilityMode extends mongoose.Document {
  constructor(object) {
    super(object, EventCapabilityModeSchema);
    this.typeName = 'EventCapabilityMode';
    this._type = 'FHIR::EventCapabilityMode';
  }
}

module.exports.EventCapabilityModeSchema = EventCapabilityModeSchema;
module.exports.EventCapabilityMode = EventCapabilityMode;
