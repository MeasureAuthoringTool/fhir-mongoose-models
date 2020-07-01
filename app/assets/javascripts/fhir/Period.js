const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');

const PeriodSchema = ElementSchemaFunction({
  start: PrimitiveDateTimeSchema,
  end: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'Period' },
  _type: { type: String, default: 'FHIR::Period' },
});

class Period extends mongoose.Document {
  constructor(object) {
    super(object, PeriodSchema);
    this.typeName = 'Period';
    this._type = 'FHIR::Period';
  }
}

module.exports.PeriodSchema = PeriodSchema;
module.exports.Period = Period;
