const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseErrorSchema = BackboneElementSchemaFunction({
   itemSequence : Number,
   detailSequence : Number,
   subDetailSequence : Number,
   code : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ClaimResponseError' },
});

class ClaimResponseError extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseErrorSchema);
    this._type = 'FHIR::ClaimResponseError';
  }
};


module.exports.ClaimResponseErrorSchema = ClaimResponseErrorSchema;
module.exports.ClaimResponseError = ClaimResponseError;
