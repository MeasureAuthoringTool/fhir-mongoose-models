const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RangeSchema = ElementSchemaFunction({
   low : SimpleQuantitySchema,
   high : SimpleQuantitySchema,
   fhirTitle: { type: String, default: 'Range' },
});

class Range extends mongoose.Document {
  constructor(object) {
    super(object, RangeSchema);
    this._type = 'FHIR::Range';
  }
};


module.exports.RangeSchema = RangeSchema;
module.exports.Range = Range;
