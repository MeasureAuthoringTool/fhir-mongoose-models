const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CarePlanIntentSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CarePlanIntent' },
  _type: { type: String, default: 'FHIR::CarePlanIntent' },
});

class CarePlanIntent extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanIntentSchema);
    this.typeName = 'CarePlanIntent';
    this._type = 'FHIR::CarePlanIntent';
  }
}

module.exports.CarePlanIntentSchema = CarePlanIntentSchema;
module.exports.CarePlanIntent = CarePlanIntent;
