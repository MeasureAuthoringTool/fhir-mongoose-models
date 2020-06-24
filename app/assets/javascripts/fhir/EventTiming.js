const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EventTimingSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EventTiming' },
});

class EventTiming extends mongoose.Document {
  constructor(object) {
    super(object, EventTimingSchema);
    this._type = 'FHIR::EventTiming';
  }
};


module.exports.EventTimingSchema = EventTimingSchema;
module.exports.EventTiming = EventTiming;
