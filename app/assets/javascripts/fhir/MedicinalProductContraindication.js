const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { MedicinalProductContraindicationOtherTherapySchema } = require('./MedicinalProductContraindicationOtherTherapy');
const { PopulationSchema } = require('./Population');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductContraindicationSchema = DomainResourceSchemaFunction({
   subject : [ReferenceSchema],
   disease : CodeableConceptSchema,
   diseaseStatus : CodeableConceptSchema,
   comorbidity : [CodeableConceptSchema],
   therapeuticIndication : [ReferenceSchema],
   otherTherapy : [MedicinalProductContraindicationOtherTherapySchema],
   population : [PopulationSchema],
   fhirTitle: { type: String, default: 'MedicinalProductContraindication' },
});

class MedicinalProductContraindication extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductContraindicationSchema);
    this._type = 'FHIR::MedicinalProductContraindication';
  }
};


module.exports.MedicinalProductContraindicationSchema = MedicinalProductContraindicationSchema;
module.exports.MedicinalProductContraindication = MedicinalProductContraindication;
