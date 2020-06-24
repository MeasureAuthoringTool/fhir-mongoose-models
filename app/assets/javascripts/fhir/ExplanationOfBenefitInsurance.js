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

const ExplanationOfBenefitInsuranceSchema = BackboneElementSchemaFunction({
   focal : Boolean,
   coverage : ReferenceSchema,
   preAuthRef : [String],
   fhirTitle: { type: String, default: 'ExplanationOfBenefitInsurance' },
});

class ExplanationOfBenefitInsurance extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitInsuranceSchema);
    this._type = 'FHIR::ExplanationOfBenefitInsurance';
  }
};


module.exports.ExplanationOfBenefitInsuranceSchema = ExplanationOfBenefitInsuranceSchema;
module.exports.ExplanationOfBenefitInsurance = ExplanationOfBenefitInsurance;
