const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicationBatchSchema } = require('./MedicationBatch');
const { MedicationIngredientSchema } = require('./MedicationIngredient');
const { MedicationStatusSchema } = require('./MedicationStatus');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');

const MedicationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  code: CodeableConceptSchema,
  status: MedicationStatusSchema,
  manufacturer: ReferenceSchema,
  form: CodeableConceptSchema,
  amount: RatioSchema,
  ingredient: [MedicationIngredientSchema],
  batch: MedicationBatchSchema,
  typeName: { type: String, default: 'Medication' },
  _type: { type: String, default: 'FHIR::Medication' },
});

class Medication extends mongoose.Document {
  constructor(object) {
    super(object, MedicationSchema);
    this.typeName = 'Medication';
    this._type = 'FHIR::Medication';
  }
}

module.exports.MedicationSchema = MedicationSchema;
module.exports.Medication = Medication;
