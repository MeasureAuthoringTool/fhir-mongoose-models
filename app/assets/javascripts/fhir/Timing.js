const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { TimingRepeatSchema } = require('./TimingRepeat');

const TimingSchema = BackboneElementSchemaFunction({
  event: [PrimitiveDateTimeSchema],
  repeat: TimingRepeatSchema,
  code: CodeableConceptSchema,
  typeName: { type: String, default: 'Timing' },
  _type: { type: String, default: 'FHIR::Timing' },
});

class Timing extends mongoose.Document {
  constructor(object) {
    super(object, TimingSchema);
    this.typeName = 'Timing';
    this._type = 'FHIR::Timing';
  }
}

module.exports.TimingSchema = TimingSchema;
module.exports.Timing = Timing;
