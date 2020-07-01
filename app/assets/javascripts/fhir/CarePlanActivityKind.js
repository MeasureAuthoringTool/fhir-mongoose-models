const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CarePlanActivityKindSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CarePlanActivityKind' },
  _type: { type: String, default: 'FHIR::CarePlanActivityKind' },
});

class CarePlanActivityKind extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanActivityKindSchema);
    this.typeName = 'CarePlanActivityKind';
    this._type = 'FHIR::CarePlanActivityKind';
  }
}

module.exports.CarePlanActivityKindSchema = CarePlanActivityKindSchema;
module.exports.CarePlanActivityKind = CarePlanActivityKind;
