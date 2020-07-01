const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const MedicinalProductPharmaceuticalCharacteristicsSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  status: CodeableConceptSchema,
  typeName: { type: String, default: 'MedicinalProductPharmaceuticalCharacteristics' },
  _type: { type: String, default: 'FHIR::MedicinalProductPharmaceuticalCharacteristics' },
});

class MedicinalProductPharmaceuticalCharacteristics extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalCharacteristicsSchema);
    this.typeName = 'MedicinalProductPharmaceuticalCharacteristics';
    this._type = 'FHIR::MedicinalProductPharmaceuticalCharacteristics';
  }
}

module.exports.MedicinalProductPharmaceuticalCharacteristicsSchema = MedicinalProductPharmaceuticalCharacteristicsSchema;
module.exports.MedicinalProductPharmaceuticalCharacteristics = MedicinalProductPharmaceuticalCharacteristics;
