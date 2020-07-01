const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { MedicinalProductContraindicationOtherTherapySchema } = require('./MedicinalProductContraindicationOtherTherapy');
const { PopulationSchema } = require('./Population');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductContraindicationSchema = DomainResourceSchemaFunction({
  subject: [ReferenceSchema],
  disease: CodeableConceptSchema,
  diseaseStatus: CodeableConceptSchema,
  comorbidity: [CodeableConceptSchema],
  therapeuticIndication: [ReferenceSchema],
  otherTherapy: [MedicinalProductContraindicationOtherTherapySchema],
  population: [PopulationSchema],
  typeName: { type: String, default: 'MedicinalProductContraindication' },
  _type: { type: String, default: 'FHIR::MedicinalProductContraindication' },
});

class MedicinalProductContraindication extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductContraindicationSchema);
    this.typeName = 'MedicinalProductContraindication';
    this._type = 'FHIR::MedicinalProductContraindication';
  }
}

module.exports.MedicinalProductContraindicationSchema = MedicinalProductContraindicationSchema;
module.exports.MedicinalProductContraindication = MedicinalProductContraindication;
