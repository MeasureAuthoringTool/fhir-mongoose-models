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

const ClinicalImpressionFindingSchema = BackboneElementSchemaFunction({
   itemCodeableConcept : CodeableConceptSchema,
   itemReference : ReferenceSchema,
   basis : String,
   fhirTitle: { type: String, default: 'ClinicalImpressionFinding' },
});

class ClinicalImpressionFinding extends mongoose.Document {
  constructor(object) {
    super(object, ClinicalImpressionFindingSchema);
    this._type = 'FHIR::ClinicalImpressionFinding';
  }
};


module.exports.ClinicalImpressionFindingSchema = ClinicalImpressionFindingSchema;
module.exports.ClinicalImpressionFinding = ClinicalImpressionFinding;
