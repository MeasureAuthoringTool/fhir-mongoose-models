const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageCostToBeneficiaryExceptionSchema } = require('./CoverageCostToBeneficiaryException');
const { MoneySchema } = require('./Money');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageCostToBeneficiarySchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   valueSimpleQuantity : SimpleQuantitySchema,
   valueMoney : MoneySchema,
   exception : [CoverageCostToBeneficiaryExceptionSchema],
   fhirTitle: { type: String, default: 'CoverageCostToBeneficiary' },
});

class CoverageCostToBeneficiary extends mongoose.Document {
  constructor(object) {
    super(object, CoverageCostToBeneficiarySchema);
    this._type = 'FHIR::CoverageCostToBeneficiary';
  }
};


module.exports.CoverageCostToBeneficiarySchema = CoverageCostToBeneficiarySchema;
module.exports.CoverageCostToBeneficiary = CoverageCostToBeneficiary;
