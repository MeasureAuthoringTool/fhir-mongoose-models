const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const PractitionerRoleNotAvailableSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  during: PeriodSchema,
  typeName: { type: String, default: 'PractitionerRoleNotAvailable' },
  _type: { type: String, default: 'FHIR::PractitionerRoleNotAvailable' },
});

class PractitionerRoleNotAvailable extends mongoose.Document {
  constructor(object) {
    super(object, PractitionerRoleNotAvailableSchema);
    this.typeName = 'PractitionerRoleNotAvailable';
    this._type = 'FHIR::PractitionerRoleNotAvailable';
  }
}

module.exports.PractitionerRoleNotAvailableSchema = PractitionerRoleNotAvailableSchema;
module.exports.PractitionerRoleNotAvailable = PractitionerRoleNotAvailable;
