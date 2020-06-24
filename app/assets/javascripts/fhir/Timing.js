const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { TimingRepeatSchema } = require('./TimingRepeat');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TimingSchema = BackboneElementSchemaFunction({
   event : [DateTime],
   repeat : TimingRepeatSchema,
   code : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'Timing' },
});

class Timing extends mongoose.Document {
  constructor(object) {
    super(object, TimingSchema);
    this._type = 'FHIR::Timing';
  }
};


module.exports.TimingSchema = TimingSchema;
module.exports.Timing = Timing;
