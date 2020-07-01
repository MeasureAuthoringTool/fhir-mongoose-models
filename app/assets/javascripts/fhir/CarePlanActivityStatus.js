const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CarePlanActivityStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CarePlanActivityStatus' },
  _type: { type: String, default: 'FHIR::CarePlanActivityStatus' },
});

class CarePlanActivityStatus extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanActivityStatusSchema);
    this.typeName = 'CarePlanActivityStatus';
    this._type = 'FHIR::CarePlanActivityStatus';
  }
}

module.exports.CarePlanActivityStatusSchema = CarePlanActivityStatusSchema;
module.exports.CarePlanActivityStatus = CarePlanActivityStatus;
