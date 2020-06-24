const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RangeSchema } = require('./Range');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationReferenceRangeSchema = BackboneElementSchemaFunction({
   low : SimpleQuantitySchema,
   high : SimpleQuantitySchema,
   type : CodeableConceptSchema,
   appliesTo : [CodeableConceptSchema],
   age : RangeSchema,
   text : String,
   fhirTitle: { type: String, default: 'ObservationReferenceRange' },
});

class ObservationReferenceRange extends mongoose.Document {
  constructor(object) {
    super(object, ObservationReferenceRangeSchema);
    this._type = 'FHIR::ObservationReferenceRange';
  }
};


module.exports.ObservationReferenceRangeSchema = ObservationReferenceRangeSchema;
module.exports.ObservationReferenceRange = ObservationReferenceRange;
