const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ObservationDataTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ObservationDataType' },
});

class ObservationDataType extends mongoose.Document {
  constructor(object) {
    super(object, ObservationDataTypeSchema);
    this._type = 'FHIR::ObservationDataType';
  }
};


module.exports.ObservationDataTypeSchema = ObservationDataTypeSchema;
module.exports.ObservationDataType = ObservationDataType;
