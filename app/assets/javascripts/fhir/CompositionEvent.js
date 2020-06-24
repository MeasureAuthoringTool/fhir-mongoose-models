const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompositionEventSchema = BackboneElementSchemaFunction({
   code : [CodeableConceptSchema],
   period : PeriodSchema,
   detail : [ReferenceSchema],
   fhirTitle: { type: String, default: 'CompositionEvent' },
});

class CompositionEvent extends mongoose.Document {
  constructor(object) {
    super(object, CompositionEventSchema);
    this._type = 'FHIR::CompositionEvent';
  }
};


module.exports.CompositionEventSchema = CompositionEventSchema;
module.exports.CompositionEvent = CompositionEvent;
