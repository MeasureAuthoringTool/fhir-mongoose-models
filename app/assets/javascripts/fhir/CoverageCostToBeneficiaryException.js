const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');

const CoverageCostToBeneficiaryExceptionSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'CoverageCostToBeneficiaryException' },
  _type: { type: String, default: 'FHIR::CoverageCostToBeneficiaryException' },
});

class CoverageCostToBeneficiaryException extends mongoose.Document {
  constructor(object) {
    super(object, CoverageCostToBeneficiaryExceptionSchema);
    this.typeName = 'CoverageCostToBeneficiaryException';
    this._type = 'FHIR::CoverageCostToBeneficiaryException';
  }
}

module.exports.CoverageCostToBeneficiaryExceptionSchema = CoverageCostToBeneficiaryExceptionSchema;
module.exports.CoverageCostToBeneficiaryException = CoverageCostToBeneficiaryException;
