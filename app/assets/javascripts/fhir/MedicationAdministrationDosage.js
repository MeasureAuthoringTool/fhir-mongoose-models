const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationAdministrationDosageSchema = BackboneElementSchemaFunction({
   text : String,
   site : CodeableConceptSchema,
   route : CodeableConceptSchema,
   method : CodeableConceptSchema,
   dose : SimpleQuantitySchema,
   rateRatio : RatioSchema,
   rateSimpleQuantity : SimpleQuantitySchema,
   fhirTitle: { type: String, default: 'MedicationAdministrationDosage' },
});

class MedicationAdministrationDosage extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationDosageSchema);
    this._type = 'FHIR::MedicationAdministrationDosage';
  }
};


module.exports.MedicationAdministrationDosageSchema = MedicationAdministrationDosageSchema;
module.exports.MedicationAdministrationDosage = MedicationAdministrationDosage;
