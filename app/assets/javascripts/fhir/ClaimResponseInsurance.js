const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseInsuranceSchema = BackboneElementSchemaFunction({
   sequence : Number,
   focal : Boolean,
   coverage : ReferenceSchema,
   businessArrangement : String,
   claimResponse : ReferenceSchema,
   fhirTitle: { type: String, default: 'ClaimResponseInsurance' },
});

class ClaimResponseInsurance extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseInsuranceSchema);
    this._type = 'FHIR::ClaimResponseInsurance';
  }
};


module.exports.ClaimResponseInsuranceSchema = ClaimResponseInsuranceSchema;
module.exports.ClaimResponseInsurance = ClaimResponseInsurance;
