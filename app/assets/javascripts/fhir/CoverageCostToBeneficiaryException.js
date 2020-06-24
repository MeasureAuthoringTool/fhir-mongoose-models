const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageCostToBeneficiaryExceptionSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'CoverageCostToBeneficiaryException' },
});

class CoverageCostToBeneficiaryException extends mongoose.Document {
  constructor(object) {
    super(object, CoverageCostToBeneficiaryExceptionSchema);
    this._type = 'FHIR::CoverageCostToBeneficiaryException';
  }
};


module.exports.CoverageCostToBeneficiaryExceptionSchema = CoverageCostToBeneficiaryExceptionSchema;
module.exports.CoverageCostToBeneficiaryException = CoverageCostToBeneficiaryException;
