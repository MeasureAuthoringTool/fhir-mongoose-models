const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicationBatchSchema } = require('./MedicationBatch');
const { MedicationIngredientSchema } = require('./MedicationIngredient');
const { MedicationStatusSchema } = require('./MedicationStatus');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   code : CodeableConceptSchema,
   status : MedicationStatusSchema,
   manufacturer : ReferenceSchema,
   form : CodeableConceptSchema,
   amount : RatioSchema,
   ingredient : [MedicationIngredientSchema],
   batch : MedicationBatchSchema,
   fhirTitle: { type: String, default: 'Medication' },
});

class Medication extends mongoose.Document {
  constructor(object) {
    super(object, MedicationSchema);
    this._type = 'FHIR::Medication';
  }
};


module.exports.MedicationSchema = MedicationSchema;
module.exports.Medication = Medication;
