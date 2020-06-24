const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExposureStateSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ExposureState' },
});

class ExposureState extends mongoose.Document {
  constructor(object) {
    super(object, ExposureStateSchema);
    this._type = 'FHIR::ExposureState';
  }
};


module.exports.ExposureStateSchema = ExposureStateSchema;
module.exports.ExposureState = ExposureState;
