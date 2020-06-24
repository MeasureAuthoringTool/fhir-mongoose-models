const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const HealthcareServiceNotAvailableSchema = BackboneElementSchemaFunction({
   description : String,
   during : PeriodSchema,
   fhirTitle: { type: String, default: 'HealthcareServiceNotAvailable' },
});

class HealthcareServiceNotAvailable extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceNotAvailableSchema);
    this._type = 'FHIR::HealthcareServiceNotAvailable';
  }
};


module.exports.HealthcareServiceNotAvailableSchema = HealthcareServiceNotAvailableSchema;
module.exports.HealthcareServiceNotAvailable = HealthcareServiceNotAvailable;
