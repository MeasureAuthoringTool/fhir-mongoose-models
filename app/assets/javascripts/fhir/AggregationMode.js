const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AggregationModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AggregationMode' },
});

class AggregationMode extends mongoose.Document {
  constructor(object) {
    super(object, AggregationModeSchema);
    this._type = 'FHIR::AggregationMode';
  }
};


module.exports.AggregationModeSchema = AggregationModeSchema;
module.exports.AggregationMode = AggregationMode;
