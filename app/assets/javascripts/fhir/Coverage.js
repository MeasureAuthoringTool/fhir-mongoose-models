const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageClassSchema } = require('./CoverageClass');
const { CoverageCostToBeneficiarySchema } = require('./CoverageCostToBeneficiary');
const { CoverageStatusSchema } = require('./CoverageStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const CoverageSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: CoverageStatusSchema,
  type: CodeableConceptSchema,
  policyHolder: ReferenceSchema,
  subscriber: ReferenceSchema,
  subscriberId: PrimitiveStringSchema,
  beneficiary: ReferenceSchema,
  dependent: PrimitiveStringSchema,
  relationship: CodeableConceptSchema,
  period: PeriodSchema,
  payor: [ReferenceSchema],
  class: [CoverageClassSchema],
  order: PrimitivePositiveIntSchema,
  network: PrimitiveStringSchema,
  costToBeneficiary: [CoverageCostToBeneficiarySchema],
  subrogation: PrimitiveBooleanSchema,
  contract: [ReferenceSchema],
  typeName: { type: String, default: 'Coverage' },
  _type: { type: String, default: 'FHIR::Coverage' },
});

class Coverage extends mongoose.Document {
  constructor(object) {
    super(object, CoverageSchema);
    this.typeName = 'Coverage';
    this._type = 'FHIR::Coverage';
  }
}

module.exports.CoverageSchema = CoverageSchema;
module.exports.Coverage = Coverage;
