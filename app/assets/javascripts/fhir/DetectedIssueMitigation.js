const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const DetectedIssueMitigationSchema = BackboneElementSchemaFunction({
  action: CodeableConceptSchema,
  date: PrimitiveDateTimeSchema,
  author: ReferenceSchema,
  typeName: { type: String, default: 'DetectedIssueMitigation' },
  _type: { type: String, default: 'FHIR::DetectedIssueMitigation' },
});

class DetectedIssueMitigation extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueMitigationSchema);
    this.typeName = 'DetectedIssueMitigation';
    this._type = 'FHIR::DetectedIssueMitigation';
  }
}

module.exports.DetectedIssueMitigationSchema = DetectedIssueMitigationSchema;
module.exports.DetectedIssueMitigation = DetectedIssueMitigation;
