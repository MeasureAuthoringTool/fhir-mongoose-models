const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityResponseInsuranceItemBenefitSchema } = require('./CoverageEligibilityResponseInsuranceItemBenefit');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityResponseInsuranceItemSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   productOrService : CodeableConceptSchema,
   modifier : [CodeableConceptSchema],
   provider : ReferenceSchema,
   excluded : Boolean,
   name : String,
   description : String,
   network : CodeableConceptSchema,
   unit : CodeableConceptSchema,
   term : CodeableConceptSchema,
   benefit : [CoverageEligibilityResponseInsuranceItemBenefitSchema],
   authorizationRequired : Boolean,
   authorizationSupporting : [CodeableConceptSchema],
   authorizationUrl : String,
   fhirTitle: { type: String, default: 'CoverageEligibilityResponseInsuranceItem' },
});

class CoverageEligibilityResponseInsuranceItem extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseInsuranceItemSchema);
    this._type = 'FHIR::CoverageEligibilityResponseInsuranceItem';
  }
};


module.exports.CoverageEligibilityResponseInsuranceItemSchema = CoverageEligibilityResponseInsuranceItemSchema;
module.exports.CoverageEligibilityResponseInsuranceItem = CoverageEligibilityResponseInsuranceItem;
