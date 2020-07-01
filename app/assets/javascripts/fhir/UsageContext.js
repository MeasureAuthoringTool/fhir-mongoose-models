const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');

const UsageContextSchema = ElementSchemaFunction({
  code: CodingSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueReference: ReferenceSchema,
  typeName: { type: String, default: 'UsageContext' },
  _type: { type: String, default: 'FHIR::UsageContext' },
});

class UsageContext extends mongoose.Document {
  constructor(object) {
    super(object, UsageContextSchema);
    this.typeName = 'UsageContext';
    this._type = 'FHIR::UsageContext';
  }
}

module.exports.UsageContextSchema = UsageContextSchema;
module.exports.UsageContext = UsageContext;
