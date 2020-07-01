const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const AggregationModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'AggregationMode' },
  _type: { type: String, default: 'FHIR::AggregationMode' },
});

class AggregationMode extends mongoose.Document {
  constructor(object) {
    super(object, AggregationModeSchema);
    this.typeName = 'AggregationMode';
    this._type = 'FHIR::AggregationMode';
  }
}

module.exports.AggregationModeSchema = AggregationModeSchema;
module.exports.AggregationMode = AggregationMode;
