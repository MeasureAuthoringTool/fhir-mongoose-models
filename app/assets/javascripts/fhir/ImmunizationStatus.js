const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ImmunizationStatus' },
});

class ImmunizationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationStatusSchema);
    this._type = 'FHIR::ImmunizationStatus';
  }
};


module.exports.ImmunizationStatusSchema = ImmunizationStatusSchema;
module.exports.ImmunizationStatus = ImmunizationStatus;
