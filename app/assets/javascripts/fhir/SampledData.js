const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const SampledDataSchema = ElementSchemaFunction({
  origin: SimpleQuantitySchema,
  period: PrimitiveDecimalSchema,
  factor: PrimitiveDecimalSchema,
  lowerLimit: PrimitiveDecimalSchema,
  upperLimit: PrimitiveDecimalSchema,
  dimensions: PrimitivePositiveIntSchema,
  data: PrimitiveStringSchema,
  typeName: { type: String, default: 'SampledData' },
  _type: { type: String, default: 'FHIR::SampledData' },
});

class SampledData extends mongoose.Document {
  constructor(object) {
    super(object, SampledDataSchema);
    this.typeName = 'SampledData';
    this._type = 'FHIR::SampledData';
  }
}

module.exports.SampledDataSchema = SampledDataSchema;
module.exports.SampledData = SampledData;
