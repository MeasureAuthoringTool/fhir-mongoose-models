const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImagingStudySeriesSchema } = require('./ImagingStudySeries');
const { ImagingStudyStatusSchema } = require('./ImagingStudyStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImagingStudySchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ImagingStudyStatusSchema,
   modality : [CodingSchema],
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   started : DateTime,
   basedOn : [ReferenceSchema],
   referrer : ReferenceSchema,
   interpreter : [ReferenceSchema],
   endpoint : [ReferenceSchema],
   numberOfSeries : Number,
   numberOfInstances : Number,
   procedureReference : ReferenceSchema,
   procedureCode : [CodeableConceptSchema],
   location : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   note : [AnnotationSchema],
   description : String,
   series : [ImagingStudySeriesSchema],
   fhirTitle: { type: String, default: 'ImagingStudy' },
});

class ImagingStudy extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySchema);
    this._type = 'FHIR::ImagingStudy';
  }
};


module.exports.ImagingStudySchema = ImagingStudySchema;
module.exports.ImagingStudy = ImagingStudy;
