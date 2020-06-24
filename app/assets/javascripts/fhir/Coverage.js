const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageClassSchema } = require('./CoverageClass');
const { CoverageCostToBeneficiarySchema } = require('./CoverageCostToBeneficiary');
const { CoverageStatusSchema } = require('./CoverageStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : CoverageStatusSchema,
   type : CodeableConceptSchema,
   policyHolder : ReferenceSchema,
   subscriber : ReferenceSchema,
   subscriberId : String,
   beneficiary : ReferenceSchema,
   dependent : String,
   relationship : CodeableConceptSchema,
   period : PeriodSchema,
   payor : [ReferenceSchema],
   class : [CoverageClassSchema],
   order : Number,
   network : String,
   costToBeneficiary : [CoverageCostToBeneficiarySchema],
   subrogation : Boolean,
   contract : [ReferenceSchema],
   fhirTitle: { type: String, default: 'Coverage' },
});

class Coverage extends mongoose.Document {
  constructor(object) {
    super(object, CoverageSchema);
    this._type = 'FHIR::Coverage';
  }
};


module.exports.CoverageSchema = CoverageSchema;
module.exports.Coverage = Coverage;
