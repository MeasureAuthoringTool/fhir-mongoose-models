const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimInsuranceSchema = BackboneElementSchemaFunction({
   sequence : Number,
   focal : Boolean,
   identifier : IdentifierSchema,
   coverage : ReferenceSchema,
   businessArrangement : String,
   preAuthRef : [String],
   claimResponse : ReferenceSchema,
   fhirTitle: { type: String, default: 'ClaimInsurance' },
});

class ClaimInsurance extends mongoose.Document {
  constructor(object) {
    super(object, ClaimInsuranceSchema);
    this._type = 'FHIR::ClaimInsurance';
  }
};


module.exports.ClaimInsuranceSchema = ClaimInsuranceSchema;
module.exports.ClaimInsurance = ClaimInsurance;
