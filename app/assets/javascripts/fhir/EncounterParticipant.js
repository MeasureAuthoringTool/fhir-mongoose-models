const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EncounterParticipantSchema = BackboneElementSchemaFunction({
   type : [CodeableConceptSchema],
   period : PeriodSchema,
   individual : ReferenceSchema,
   fhirTitle: { type: String, default: 'EncounterParticipant' },
});

class EncounterParticipant extends mongoose.Document {
  constructor(object) {
    super(object, EncounterParticipantSchema);
    this._type = 'FHIR::EncounterParticipant';
  }
};


module.exports.EncounterParticipantSchema = EncounterParticipantSchema;
module.exports.EncounterParticipant = EncounterParticipant;
