const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseItemAdjudicationSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   reason : CodeableConceptSchema,
   amount : MoneySchema,
   value : Number,
   fhirTitle: { type: String, default: 'ClaimResponseItemAdjudication' },
});

class ClaimResponseItemAdjudication extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseItemAdjudicationSchema);
    this._type = 'FHIR::ClaimResponseItemAdjudication';
  }
};


module.exports.ClaimResponseItemAdjudicationSchema = ClaimResponseItemAdjudicationSchema;
module.exports.ClaimResponseItemAdjudication = ClaimResponseItemAdjudication;
