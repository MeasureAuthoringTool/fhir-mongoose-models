const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CarePlanStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CarePlanStatus' },
  _type: { type: String, default: 'FHIR::CarePlanStatus' },
});

class CarePlanStatus extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanStatusSchema);
    this.typeName = 'CarePlanStatus';
    this._type = 'FHIR::CarePlanStatus';
  }
}

module.exports.CarePlanStatusSchema = CarePlanStatusSchema;
module.exports.CarePlanStatus = CarePlanStatus;
