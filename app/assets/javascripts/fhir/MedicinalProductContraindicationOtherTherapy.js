const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductContraindicationOtherTherapySchema = BackboneElementSchemaFunction({
   therapyRelationshipType : CodeableConceptSchema,
   medicationCodeableConcept : CodeableConceptSchema,
   medicationReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'MedicinalProductContraindicationOtherTherapy' },
});

class MedicinalProductContraindicationOtherTherapy extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductContraindicationOtherTherapySchema);
    this._type = 'FHIR::MedicinalProductContraindicationOtherTherapy';
  }
};


module.exports.MedicinalProductContraindicationOtherTherapySchema = MedicinalProductContraindicationOtherTherapySchema;
module.exports.MedicinalProductContraindicationOtherTherapy = MedicinalProductContraindicationOtherTherapy;
