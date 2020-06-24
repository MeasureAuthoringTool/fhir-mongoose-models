const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { PopulationSchema } = require('./Population');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductUndesirableEffectSchema = DomainResourceSchemaFunction({
   subject : [ReferenceSchema],
   symptomConditionEffect : CodeableConceptSchema,
   classification : CodeableConceptSchema,
   frequencyOfOccurrence : CodeableConceptSchema,
   population : [PopulationSchema],
   fhirTitle: { type: String, default: 'MedicinalProductUndesirableEffect' },
});

class MedicinalProductUndesirableEffect extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductUndesirableEffectSchema);
    this._type = 'FHIR::MedicinalProductUndesirableEffect';
  }
};


module.exports.MedicinalProductUndesirableEffectSchema = MedicinalProductUndesirableEffectSchema;
module.exports.MedicinalProductUndesirableEffect = MedicinalProductUndesirableEffect;
