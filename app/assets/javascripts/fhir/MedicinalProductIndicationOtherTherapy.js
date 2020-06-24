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

const MedicinalProductIndicationOtherTherapySchema = BackboneElementSchemaFunction({
   therapyRelationshipType : CodeableConceptSchema,
   medicationCodeableConcept : CodeableConceptSchema,
   medicationReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'MedicinalProductIndicationOtherTherapy' },
});

class MedicinalProductIndicationOtherTherapy extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIndicationOtherTherapySchema);
    this._type = 'FHIR::MedicinalProductIndicationOtherTherapy';
  }
};


module.exports.MedicinalProductIndicationOtherTherapySchema = MedicinalProductIndicationOtherTherapySchema;
module.exports.MedicinalProductIndicationOtherTherapy = MedicinalProductIndicationOtherTherapy;
