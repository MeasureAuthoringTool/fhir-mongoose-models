const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VerificationResultPrimarySourceSchema = BackboneElementSchemaFunction({
   who : ReferenceSchema,
   type : [CodeableConceptSchema],
   communicationMethod : [CodeableConceptSchema],
   validationStatus : CodeableConceptSchema,
   validationDate : DateTime,
   canPushUpdates : CodeableConceptSchema,
   pushTypeAvailable : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'VerificationResultPrimarySource' },
});

class VerificationResultPrimarySource extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultPrimarySourceSchema);
    this._type = 'FHIR::VerificationResultPrimarySource';
  }
};


module.exports.VerificationResultPrimarySourceSchema = VerificationResultPrimarySourceSchema;
module.exports.VerificationResultPrimarySource = VerificationResultPrimarySource;
