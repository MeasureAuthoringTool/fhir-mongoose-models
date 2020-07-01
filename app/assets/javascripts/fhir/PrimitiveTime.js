const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveTimeSchema = ElementSchemaFunction({
  value: Date,
  typeName: { type: String, default: 'PrimitiveTime' },
  _type: { type: String, default: 'FHIR::PrimitiveTime' },
});

class PrimitiveTime extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveTimeSchema);
    this.typeName = 'PrimitiveTime';
    this._type = 'FHIR::PrimitiveTime';
  }
}

module.exports.PrimitiveTimeSchema = PrimitiveTimeSchema;
module.exports.PrimitiveTime = PrimitiveTime;
