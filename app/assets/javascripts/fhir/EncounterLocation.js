const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { EncounterLocationStatusSchema } = require('./EncounterLocationStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const EncounterLocationSchema = BackboneElementSchemaFunction({
  location: ReferenceSchema,
  status: EncounterLocationStatusSchema,
  physicalType: CodeableConceptSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'EncounterLocation' },
  _type: { type: String, default: 'FHIR::EncounterLocation' },
});

class EncounterLocation extends mongoose.Document {
  constructor(object) {
    super(object, EncounterLocationSchema);
    this.typeName = 'EncounterLocation';
    this._type = 'FHIR::EncounterLocation';
  }
}

module.exports.EncounterLocationSchema = EncounterLocationSchema;
module.exports.EncounterLocation = EncounterLocation;
