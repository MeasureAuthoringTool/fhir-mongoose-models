const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');

const EncounterHospitalizationSchema = BackboneElementSchemaFunction({
  preAdmissionIdentifier: IdentifierSchema,
  origin: ReferenceSchema,
  admitSource: CodeableConceptSchema,
  reAdmission: CodeableConceptSchema,
  dietPreference: [CodeableConceptSchema],
  specialCourtesy: [CodeableConceptSchema],
  specialArrangement: [CodeableConceptSchema],
  destination: ReferenceSchema,
  dischargeDisposition: CodeableConceptSchema,
  typeName: { type: String, default: 'EncounterHospitalization' },
  _type: { type: String, default: 'FHIR::EncounterHospitalization' },
});

class EncounterHospitalization extends mongoose.Document {
  constructor(object) {
    super(object, EncounterHospitalizationSchema);
    this.typeName = 'EncounterHospitalization';
    this._type = 'FHIR::EncounterHospitalization';
  }
}

module.exports.EncounterHospitalizationSchema = EncounterHospitalizationSchema;
module.exports.EncounterHospitalization = EncounterHospitalization;
