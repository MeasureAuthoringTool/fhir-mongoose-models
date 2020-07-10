const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EncounterHospitalizationSchema } = require('./allSchemaHeaders.js');

EncounterHospitalizationSchema.add(BackboneElementSchema);
EncounterHospitalizationSchema.remove('id');
EncounterHospitalizationSchema.add({
  preAdmissionIdentifier: IdentifierSchema,
  origin: ReferenceSchema,
  admitSource: CodeableConceptSchema,
  reAdmission: CodeableConceptSchema,
  dietPreference: [CodeableConceptSchema],
  specialCourtesy: [CodeableConceptSchema],
  specialArrangement: [CodeableConceptSchema],
  destination: ReferenceSchema,
  dischargeDisposition: CodeableConceptSchema,
});

module.exports.EncounterHospitalizationSchema = EncounterHospitalizationSchema;
