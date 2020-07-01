const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { MedicinalProductIndicationOtherTherapySchema } = require('./MedicinalProductIndicationOtherTherapy');
const { PopulationSchema } = require('./Population');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductIndicationSchema = DomainResourceSchemaFunction({
  subject: [ReferenceSchema],
  diseaseSymptomProcedure: CodeableConceptSchema,
  diseaseStatus: CodeableConceptSchema,
  comorbidity: [CodeableConceptSchema],
  intendedEffect: CodeableConceptSchema,
  duration: QuantitySchema,
  otherTherapy: [MedicinalProductIndicationOtherTherapySchema],
  undesirableEffect: [ReferenceSchema],
  population: [PopulationSchema],
  typeName: { type: String, default: 'MedicinalProductIndication' },
  _type: { type: String, default: 'FHIR::MedicinalProductIndication' },
});

class MedicinalProductIndication extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIndicationSchema);
    this.typeName = 'MedicinalProductIndication';
    this._type = 'FHIR::MedicinalProductIndication';
  }
}

module.exports.MedicinalProductIndicationSchema = MedicinalProductIndicationSchema;
module.exports.MedicinalProductIndication = MedicinalProductIndication;
