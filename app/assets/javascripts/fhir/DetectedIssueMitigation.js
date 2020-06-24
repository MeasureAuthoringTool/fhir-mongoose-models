const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
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

const DetectedIssueMitigationSchema = BackboneElementSchemaFunction({
   action : CodeableConceptSchema,
   date : DateTime,
   author : ReferenceSchema,
   fhirTitle: { type: String, default: 'DetectedIssueMitigation' },
});

class DetectedIssueMitigation extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueMitigationSchema);
    this._type = 'FHIR::DetectedIssueMitigation';
  }
};


module.exports.DetectedIssueMitigationSchema = DetectedIssueMitigationSchema;
module.exports.DetectedIssueMitigation = DetectedIssueMitigation;
