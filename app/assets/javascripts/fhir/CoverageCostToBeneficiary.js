const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageCostToBeneficiaryExceptionSchema } = require('./CoverageCostToBeneficiaryException');
const { MoneySchema } = require('./Money');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const CoverageCostToBeneficiarySchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  valueSimpleQuantity: SimpleQuantitySchema,
  valueMoney: MoneySchema,
  exception: [CoverageCostToBeneficiaryExceptionSchema],
  typeName: { type: String, default: 'CoverageCostToBeneficiary' },
  _type: { type: String, default: 'FHIR::CoverageCostToBeneficiary' },
});

class CoverageCostToBeneficiary extends mongoose.Document {
  constructor(object) {
    super(object, CoverageCostToBeneficiarySchema);
    this.typeName = 'CoverageCostToBeneficiary';
    this._type = 'FHIR::CoverageCostToBeneficiary';
  }
}

module.exports.CoverageCostToBeneficiarySchema = CoverageCostToBeneficiarySchema;
module.exports.CoverageCostToBeneficiary = CoverageCostToBeneficiary;
