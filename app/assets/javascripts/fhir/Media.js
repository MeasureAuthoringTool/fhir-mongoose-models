const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MediaStatusSchema } = require('./MediaStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MediaSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : [ReferenceSchema],
   partOf : [ReferenceSchema],
   status : MediaStatusSchema,
   type : CodeableConceptSchema,
   modality : CodeableConceptSchema,
   view : CodeableConceptSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   createdDateTime : DateTime,
   createdPeriod : PeriodSchema,
   issued : DateTime,
   operator : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   bodySite : CodeableConceptSchema,
   deviceName : String,
   device : ReferenceSchema,
   height : Number,
   width : Number,
   frames : Number,
   duration : Number,
   content : AttachmentSchema,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'Media' },
});

class Media extends mongoose.Document {
  constructor(object) {
    super(object, MediaSchema);
    this._type = 'FHIR::Media';
  }
};


module.exports.MediaSchema = MediaSchema;
module.exports.Media = Media;
