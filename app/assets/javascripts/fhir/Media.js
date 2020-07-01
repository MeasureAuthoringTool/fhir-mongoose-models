const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MediaStatusSchema } = require('./MediaStatus');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const MediaSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: MediaStatusSchema,
  type: CodeableConceptSchema,
  modality: CodeableConceptSchema,
  view: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  createdDateTime: PrimitiveDateTimeSchema,
  createdPeriod: PeriodSchema,
  issued: PrimitiveInstantSchema,
  operator: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  bodySite: CodeableConceptSchema,
  deviceName: PrimitiveStringSchema,
  device: ReferenceSchema,
  height: PrimitivePositiveIntSchema,
  width: PrimitivePositiveIntSchema,
  frames: PrimitivePositiveIntSchema,
  duration: PrimitiveDecimalSchema,
  content: AttachmentSchema,
  note: [AnnotationSchema],
  typeName: { type: String, default: 'Media' },
  _type: { type: String, default: 'FHIR::Media' },
});

class Media extends mongoose.Document {
  constructor(object) {
    super(object, MediaSchema);
    this.typeName = 'Media';
    this._type = 'FHIR::Media';
  }
}

module.exports.MediaSchema = MediaSchema;
module.exports.Media = Media;
