const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PopulationSchema } = require('./Population');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductUndesirableEffectSchema = DomainResourceSchemaFunction({
  subject: [ReferenceSchema],
  symptomConditionEffect: CodeableConceptSchema,
  classification: CodeableConceptSchema,
  frequencyOfOccurrence: CodeableConceptSchema,
  population: [PopulationSchema],
  typeName: { type: String, default: 'MedicinalProductUndesirableEffect' },
  _type: { type: String, default: 'FHIR::MedicinalProductUndesirableEffect' },
});

class MedicinalProductUndesirableEffect extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductUndesirableEffectSchema);
    this.typeName = 'MedicinalProductUndesirableEffect';
    this._type = 'FHIR::MedicinalProductUndesirableEffect';
  }
}

module.exports.MedicinalProductUndesirableEffectSchema = MedicinalProductUndesirableEffectSchema;
module.exports.MedicinalProductUndesirableEffect = MedicinalProductUndesirableEffect;
