const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SpecimenStatus' },
});

class SpecimenStatus extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenStatusSchema);
    this._type = 'FHIR::SpecimenStatus';
  }
};


module.exports.SpecimenStatusSchema = SpecimenStatusSchema;
module.exports.SpecimenStatus = SpecimenStatus;
