const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema } = require('./MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies');
const { QuantitySchema } = require('./Quantity');
const { RatioSchema } = require('./Ratio');

const MedicinalProductPharmaceuticalRouteOfAdministrationSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  firstDose: QuantitySchema,
  maxSingleDose: QuantitySchema,
  maxDosePerDay: QuantitySchema,
  maxDosePerTreatmentPeriod: RatioSchema,
  maxTreatmentPeriod: DurationSchema,
  targetSpecies: [MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema],
  typeName: { type: String, default: 'MedicinalProductPharmaceuticalRouteOfAdministration' },
  _type: { type: String, default: 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministration' },
});

class MedicinalProductPharmaceuticalRouteOfAdministration extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalRouteOfAdministrationSchema);
    this.typeName = 'MedicinalProductPharmaceuticalRouteOfAdministration';
    this._type = 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministration';
  }
}

module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationSchema = MedicinalProductPharmaceuticalRouteOfAdministrationSchema;
module.exports.MedicinalProductPharmaceuticalRouteOfAdministration = MedicinalProductPharmaceuticalRouteOfAdministration;
