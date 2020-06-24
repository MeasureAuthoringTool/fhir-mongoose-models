const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ElementSchema } = require('./Element');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DosageDoseAndRateSchema = ElementSchemaFunction({
   type : CodeableConceptSchema,
   doseRange : RangeSchema,
   doseSimpleQuantity : SimpleQuantitySchema,
   rateRatio : RatioSchema,
   rateRange : RangeSchema,
   rateSimpleQuantity : SimpleQuantitySchema,
   fhirTitle: { type: String, default: 'DosageDoseAndRate' },
});

class DosageDoseAndRate extends mongoose.Document {
  constructor(object) {
    super(object, DosageDoseAndRateSchema);
    this._type = 'FHIR::DosageDoseAndRate';
  }
};


module.exports.DosageDoseAndRateSchema = DosageDoseAndRateSchema;
module.exports.DosageDoseAndRate = DosageDoseAndRate;
