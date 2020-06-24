const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CarePlanStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CarePlanStatus' },
});

class CarePlanStatus extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanStatusSchema);
    this._type = 'FHIR::CarePlanStatus';
  }
};


module.exports.CarePlanStatusSchema = CarePlanStatusSchema;
module.exports.CarePlanStatus = CarePlanStatus;
