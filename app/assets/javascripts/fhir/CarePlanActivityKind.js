const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CarePlanActivityKindSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CarePlanActivityKind' },
});

class CarePlanActivityKind extends mongoose.Document {
  constructor(object) {
    super(object, CarePlanActivityKindSchema);
    this._type = 'FHIR::CarePlanActivityKind';
  }
};


module.exports.CarePlanActivityKindSchema = CarePlanActivityKindSchema;
module.exports.CarePlanActivityKind = CarePlanActivityKind;
