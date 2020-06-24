const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CarePlanIntentSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CarePlanIntent' },
});

class CarePlanIntent extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanIntentSchema);
    this._type = 'FHIR::CarePlanIntent';
  }
};


module.exports.CarePlanIntentSchema = CarePlanIntentSchema;
module.exports.CarePlanIntent = CarePlanIntent;
