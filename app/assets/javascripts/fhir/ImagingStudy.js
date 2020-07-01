const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImagingStudySeriesSchema } = require('./ImagingStudySeries');
const { ImagingStudyStatusSchema } = require('./ImagingStudyStatus');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');

const ImagingStudySchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: ImagingStudyStatusSchema,
  modality: [CodingSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  started: PrimitiveDateTimeSchema,
  basedOn: [ReferenceSchema],
  referrer: ReferenceSchema,
  interpreter: [ReferenceSchema],
  endpoint: [ReferenceSchema],
  numberOfSeries: PrimitiveUnsignedIntSchema,
  numberOfInstances: PrimitiveUnsignedIntSchema,
  procedureReference: ReferenceSchema,
  procedureCode: [CodeableConceptSchema],
  location: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  description: PrimitiveStringSchema,
  series: [ImagingStudySeriesSchema],
  typeName: { type: String, default: 'ImagingStudy' },
  _type: { type: String, default: 'FHIR::ImagingStudy' },
});

class ImagingStudy extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySchema);
    this.typeName = 'ImagingStudy';
    this._type = 'FHIR::ImagingStudy';
  }
}

module.exports.ImagingStudySchema = ImagingStudySchema;
module.exports.ImagingStudy = ImagingStudy;
