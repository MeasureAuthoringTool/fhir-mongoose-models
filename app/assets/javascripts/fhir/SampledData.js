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

const SampledDataSchema = ElementSchemaFunction({
   origin : SimpleQuantitySchema,
   period : Number,
   factor : Number,
   lowerLimit : Number,
   upperLimit : Number,
   dimensions : Number,
   data : String,
   fhirTitle: { type: String, default: 'SampledData' },
});

class SampledData extends mongoose.Document {
  constructor(object) {
    super(object, SampledDataSchema);
    this._type = 'FHIR::SampledData';
  }
};


module.exports.SampledDataSchema = SampledDataSchema;
module.exports.SampledData = SampledData;
