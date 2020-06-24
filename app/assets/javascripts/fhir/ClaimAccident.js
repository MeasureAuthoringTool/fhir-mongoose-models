const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { AddressSchema } = require('./Address');
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

const ClaimAccidentSchema = BackboneElementSchemaFunction({
   date : FHIRDate,
   type : CodeableConceptSchema,
   locationAddress : AddressSchema,
   locationReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'ClaimAccident' },
});

class ClaimAccident extends mongoose.Document {
  constructor(object) {
    super(object, ClaimAccidentSchema);
    this._type = 'FHIR::ClaimAccident';
  }
};


module.exports.ClaimAccidentSchema = ClaimAccidentSchema;
module.exports.ClaimAccident = ClaimAccident;
