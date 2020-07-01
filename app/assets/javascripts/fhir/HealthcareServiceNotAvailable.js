const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const HealthcareServiceNotAvailableSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  during: PeriodSchema,
  typeName: { type: String, default: 'HealthcareServiceNotAvailable' },
  _type: { type: String, default: 'FHIR::HealthcareServiceNotAvailable' },
});

class HealthcareServiceNotAvailable extends mongoose.Document {
  constructor(object) {
    super(object, HealthcareServiceNotAvailableSchema);
    this.typeName = 'HealthcareServiceNotAvailable';
    this._type = 'FHIR::HealthcareServiceNotAvailable';
  }
}

module.exports.HealthcareServiceNotAvailableSchema = HealthcareServiceNotAvailableSchema;
module.exports.HealthcareServiceNotAvailable = HealthcareServiceNotAvailable;
