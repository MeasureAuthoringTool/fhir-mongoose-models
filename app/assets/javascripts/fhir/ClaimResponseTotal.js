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

const ClaimResponseTotalSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   amount : MoneySchema,
   fhirTitle: { type: String, default: 'ClaimResponseTotal' },
});

class ClaimResponseTotal extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseTotalSchema);
    this._type = 'FHIR::ClaimResponseTotal';
  }
};


module.exports.ClaimResponseTotalSchema = ClaimResponseTotalSchema;
module.exports.ClaimResponseTotal = ClaimResponseTotal;
