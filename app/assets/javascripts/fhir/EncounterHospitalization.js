const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EncounterHospitalizationSchema = BackboneElementSchemaFunction({
   preAdmissionIdentifier : IdentifierSchema,
   origin : ReferenceSchema,
   admitSource : CodeableConceptSchema,
   reAdmission : CodeableConceptSchema,
   dietPreference : [CodeableConceptSchema],
   specialCourtesy : [CodeableConceptSchema],
   specialArrangement : [CodeableConceptSchema],
   destination : ReferenceSchema,
   dischargeDisposition : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'EncounterHospitalization' },
});

class EncounterHospitalization extends mongoose.Document {
  constructor(object) {
    super(object, EncounterHospitalizationSchema);
    this._type = 'FHIR::EncounterHospitalization';
  }
};


module.exports.EncounterHospitalizationSchema = EncounterHospitalizationSchema;
module.exports.EncounterHospitalization = EncounterHospitalization;
