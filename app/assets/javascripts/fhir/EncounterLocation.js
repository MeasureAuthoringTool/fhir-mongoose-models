const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { EncounterLocationStatusSchema } = require('./EncounterLocationStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EncounterLocationSchema = BackboneElementSchemaFunction({
   location : ReferenceSchema,
   status : EncounterLocationStatusSchema,
   physicalType : CodeableConceptSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'EncounterLocation' },
});

class EncounterLocation extends mongoose.Document {
  constructor(object) {
    super(object, EncounterLocationSchema);
    this._type = 'FHIR::EncounterLocation';
  }
};


module.exports.EncounterLocationSchema = EncounterLocationSchema;
module.exports.EncounterLocation = EncounterLocation;
