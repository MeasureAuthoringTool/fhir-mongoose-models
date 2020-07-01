const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RatioSchema } = require('./Ratio');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationAdministrationDosageSchema = BackboneElementSchemaFunction({
  text: PrimitiveStringSchema,
  site: CodeableConceptSchema,
  route: CodeableConceptSchema,
  method: CodeableConceptSchema,
  dose: SimpleQuantitySchema,
  rateRatio: RatioSchema,
  rateSimpleQuantity: SimpleQuantitySchema,
  typeName: { type: String, default: 'MedicationAdministrationDosage' },
  _type: { type: String, default: 'FHIR::MedicationAdministrationDosage' },
});

class MedicationAdministrationDosage extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationDosageSchema);
    this.typeName = 'MedicationAdministrationDosage';
    this._type = 'FHIR::MedicationAdministrationDosage';
  }
}

module.exports.MedicationAdministrationDosageSchema = MedicationAdministrationDosageSchema;
module.exports.MedicationAdministrationDosage = MedicationAdministrationDosage;
