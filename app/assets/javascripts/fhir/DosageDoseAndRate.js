const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const DosageDoseAndRateSchema = ElementSchemaFunction({
  type: CodeableConceptSchema,
  doseRange: RangeSchema,
  doseSimpleQuantity: SimpleQuantitySchema,
  rateRatio: RatioSchema,
  rateRange: RangeSchema,
  rateSimpleQuantity: SimpleQuantitySchema,
  typeName: { type: String, default: 'DosageDoseAndRate' },
  _type: { type: String, default: 'FHIR::DosageDoseAndRate' },
});

class DosageDoseAndRate extends mongoose.Document {
  constructor(object) {
    super(object, DosageDoseAndRateSchema);
    this.typeName = 'DosageDoseAndRate';
    this._type = 'FHIR::DosageDoseAndRate';
  }
}

module.exports.DosageDoseAndRateSchema = DosageDoseAndRateSchema;
module.exports.DosageDoseAndRate = DosageDoseAndRate;
