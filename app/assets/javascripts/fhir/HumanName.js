const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { NameUseSchema } = require('./NameUse');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const HumanNameSchema = ElementSchemaFunction({
  use: NameUseSchema,
  text: PrimitiveStringSchema,
  family: PrimitiveStringSchema,
  given: [PrimitiveStringSchema],
  prefix: [PrimitiveStringSchema],
  suffix: [PrimitiveStringSchema],
  period: PeriodSchema,
  typeName: { type: String, default: 'HumanName' },
  _type: { type: String, default: 'FHIR::HumanName' },
});

class HumanName extends mongoose.Document {
  constructor(object) {
    super(object, HumanNameSchema);
    this.typeName = 'HumanName';
    this._type = 'FHIR::HumanName';
  }
}

module.exports.HumanNameSchema = HumanNameSchema;
module.exports.HumanName = HumanName;
