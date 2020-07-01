const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveDateSchema = ElementSchemaFunction({
  value: Date,
  typeName: { type: String, default: 'PrimitiveDate' },
  _type: { type: String, default: 'FHIR::PrimitiveDate' },
});

class PrimitiveDate extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveDateSchema);
    this.typeName = 'PrimitiveDate';
    this._type = 'FHIR::PrimitiveDate';
  }
}

module.exports.PrimitiveDateSchema = PrimitiveDateSchema;
module.exports.PrimitiveDate = PrimitiveDate;
