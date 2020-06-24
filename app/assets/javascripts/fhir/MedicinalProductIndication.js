const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { MedicinalProductIndicationOtherTherapySchema } = require('./MedicinalProductIndicationOtherTherapy');
const { PopulationSchema } = require('./Population');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductIndicationSchema = DomainResourceSchemaFunction({
   subject : [ReferenceSchema],
   diseaseSymptomProcedure : CodeableConceptSchema,
   diseaseStatus : CodeableConceptSchema,
   comorbidity : [CodeableConceptSchema],
   intendedEffect : CodeableConceptSchema,
   duration : QuantitySchema,
   otherTherapy : [MedicinalProductIndicationOtherTherapySchema],
   undesirableEffect : [ReferenceSchema],
   population : [PopulationSchema],
   fhirTitle: { type: String, default: 'MedicinalProductIndication' },
});

class MedicinalProductIndication extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIndicationSchema);
    this._type = 'FHIR::MedicinalProductIndication';
  }
};


module.exports.MedicinalProductIndicationSchema = MedicinalProductIndicationSchema;
module.exports.MedicinalProductIndication = MedicinalProductIndication;
